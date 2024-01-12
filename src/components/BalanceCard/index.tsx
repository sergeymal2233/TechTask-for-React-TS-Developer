import { formatMoneyToUpperUnit } from "@/utils/price";
import { Flex } from "../UI/Flex";
import { Typography } from "../UI/Typography";
import styles from "./BalanceCard.module.scss";
import canada from "@/assets/canada.png";
import { Account } from "@/models/Accounts";

type Props = {
  balance: Account
}

export const BalanceCard = ({ balance }: Props) => {
  const img = balance.img || canada;

  return (
    <Flex options={{ direction: "column", gap: 0.5 }} className={styles.card}>
      <img className={styles.img} src={img} alt="balance logo" />
      <Typography variant="h6" tag="p">
        {`$${formatMoneyToUpperUnit(balance.cents)}`}
      </Typography>
    </Flex>
  );
};
