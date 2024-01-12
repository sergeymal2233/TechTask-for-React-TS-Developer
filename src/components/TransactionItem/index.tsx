import { Transaction } from "@/models/Transactions";
import styles from "./TransactionItem.module.scss";
import { Flex } from "../UI/Flex";
import { CreditCard, Wallet } from "../UI/Icons/Icons";
import { Typography } from "../UI/Typography";
import { TransactionType } from "@/types/TransactionType";
import { formatMoneyToUpperUnit } from "@/utils/price";
import { formatDate } from "@/utils/date";

type Props = {
  transaction: Transaction;
};

export const TransactionItem = ({ transaction }: Props) => {
  const { type, object, date, cents } = transaction;
  const isPayment = type === TransactionType.PAYMENT;
  const formattedMoney = `$${formatMoneyToUpperUnit(cents)}`
  const paymentTypeText = isPayment ? 'Payment' : 'Transfer from bank';

  return (
    <Flex
      className={styles.item}
      options={{ align: "center", justify: "space-between" }}
    >
      <div className={styles['item--body']}>
        {isPayment ? <CreditCard /> : <Wallet />}
        <div className={styles['item--text']}>
          <Typography variant="body-large">{object}</Typography>
          <Typography variant="card-utility">{`${formatDate(date)}, ${paymentTypeText}`}</Typography>
        </div>
      </div>

      <Typography
        variant="body-large"
        textColor={isPayment ? "secondary-grey" : "success-color"}
      >
        {isPayment ? `-${formattedMoney}` : `+${formattedMoney}`}
      </Typography>
    </Flex>
  );
};
