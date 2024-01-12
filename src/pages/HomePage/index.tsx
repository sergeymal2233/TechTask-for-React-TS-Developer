import { TransactionsList } from "@/components/TransactionList";
import { PageSection } from "@/components/UI/PageSection";
import { useAuth } from "@/hooks/useAuth";
import styles from "./HomePage.module.scss";
import { Container } from "@/components/UI/Container";
import { HomeSidebar } from "@/components/HomeSidebar";
import { BalanceCardList } from "@/components/BalanceCardList";
import { BankCardList } from "@/components/BankCardList";
import { useLaptopMediaQuery } from "@/utils/queries";

export const HomePage = () => {
  const { transactions, cards, accounts } = useAuth();
  const isLaptopQuery = useLaptopMediaQuery();

  return (
    <Container>
      <div className={styles.page}>
        <div className={styles.main}>
          <PageSection
            title="XEPPT Account Balance"
            component={<BalanceCardList balances={accounts} />}
          />
          <PageSection
            title="XEPPT Prepaid Card"
            component={<BankCardList cards={cards} withEmpty />}
          />
          <PageSection
            title="Transactions"
            component={<TransactionsList transactions={transactions} />}
          />
        </div>

        <HomeSidebar />
      </div>

      {!isLaptopQuery && <div className={styles.globe} />}
    </Container>
  );
};
