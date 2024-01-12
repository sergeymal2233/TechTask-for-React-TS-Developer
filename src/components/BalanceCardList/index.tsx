import { Account } from "@/models/Accounts";
import { BalanceCard } from "../BalanceCard";
import styles from "./BalanceCardList.module.scss";
import { useScrollHorizontally } from "@/hooks/useScrollHorizontally";

type Props = {
  balances: Account[];
};

export const BalanceCardList = ({ balances }: Props) => {
  const { scrollElementRef, handleMouseWheel } =
    useScrollHorizontally<HTMLDivElement>();

  return (
    <div
      ref={scrollElementRef}
      onWheel={handleMouseWheel}
      className={styles.list}
    >
      {balances.map((balance) => (
        <BalanceCard key={balance.id} balance={balance} />
      ))}
    </div>
  );
};
