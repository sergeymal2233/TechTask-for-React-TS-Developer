import { Transaction } from "@/models/Transactions";
import { CardProvider } from "@/types/CardProvider";
import { useMemo, useState } from "react";
import { TransactionItem } from "../TransactionItem";
import { Button } from "../UI/Button";
import { Flex } from "../UI/Flex";
import { useTabletMediaQuery } from "@/utils/queries";
import styles from './TransactionList.module.scss';

type Props = {
  transactions: Transaction[];
};

enum FilterByProvider {
  ALL,
  XEPPT,
}

const filterTransactions = (
  transactions: Transaction[],
  filter: FilterByProvider
) => {
  switch (filter) {
    case FilterByProvider.ALL:
      return transactions;
    case FilterByProvider.XEPPT:
      return transactions.filter(
        (transction) => transction.card.provider === CardProvider.XEPPT
      );
  }
};

export const TransactionsList = ({ transactions }: Props) => {
  const [filter, setFilter] = useState<FilterByProvider>(FilterByProvider.ALL);
  const [limit, setLimit] = useState(3);
  const isTablet = useTabletMediaQuery();

  const filteredTransactions = useMemo(
    () => filterTransactions(transactions, filter),
    [filter, transactions]
  );

  const limitedTransactions = useMemo(
    () => filteredTransactions.slice(0, limit),
    [limit, filteredTransactions]
  );

  return (
    <div className={styles.list}>
      <Flex options={{ align: "center", justify: "space-between" }}>
        <Flex options={{ gap: 1 }}>
          <Button
            buttonStyle="outlined"
            status={filter === FilterByProvider.ALL ? "active" : "inactive"}
            onClick={() => setFilter(FilterByProvider.ALL)}
          >
            All
          </Button>
          <Button
            buttonStyle="outlined"
            status={filter === FilterByProvider.XEPPT ? "active" : "inactive"}
            onClick={() => setFilter(FilterByProvider.XEPPT)}
          >
            XEPPT Card
          </Button>
        </Flex>

        {isTablet || (
          <Button
            onClick={() => setLimit((limit) => limit + 2)}
            buttonStyle="alternate"
          >
            Show more
          </Button>
        )}
      </Flex>

      <Flex options={{ direction: "column", gap: 0.5 }}>
        {limitedTransactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </Flex>

      {isTablet && (
        <Flex options={{justify: 'center'}}>
          <Button
            onClick={() => setLimit((limit) => limit + 2)}
            buttonStyle="alternate"
          >
            Show more
          </Button>
        </Flex>
      )}
    </div>
  );
};
