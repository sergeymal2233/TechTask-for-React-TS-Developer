import { Typography } from "../UI/Typography";
import styles from "./UserBankInfo.module.scss";

export type BankInfo = {
  name: string;
  cardNumber: string;
};

type Props = {
  bankInfo: BankInfo;
};

const getEndOfBlurredCard = (cardNumber: string) => {
  return `****${cardNumber.slice(-4)}`;
};

export const UserBankInfo = ({ bankInfo }: Props) => {
  const { name, cardNumber } = bankInfo;

  return (
    <div className={styles.info}>
      <Typography variant="body-medium">
        {`${name} (${getEndOfBlurredCard(cardNumber)})`}
      </Typography>
    </div>
  );
};
