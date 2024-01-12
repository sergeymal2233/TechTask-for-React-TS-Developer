import { BankInfo, UserBankInfo } from "../UserBankInfo";
import styles from "./UserBankInfoList.module.scss";

type Props = {
  infos: BankInfo[];
};

export const UserBankInfoList = ({ infos }: Props) => {
  return (
    <div className={styles.list}>
      {infos.map((info) => (
        <UserBankInfo key={info.cardNumber} bankInfo={info} />
      ))}
    </div>
  );
};
