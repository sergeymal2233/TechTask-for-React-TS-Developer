import { Card } from "@/models/Card";
import styles from "./BankCardList.module.scss";
import { BankCard, EmptyCard } from "../BankCard";
import { useScrollHorizontally } from "@/hooks/useScrollHorizontally";

type Props = {
  cards: Card[];
  withEmpty?: boolean;
};

export const BankCardList = ({ cards, withEmpty }: Props) => {
  const { scrollElementRef, handleMouseWheel } =
    useScrollHorizontally<HTMLDivElement>();

  return (
    <div
      ref={scrollElementRef}
      onWheel={handleMouseWheel}
      className={styles.list}
    >
      {cards.map((card) => (
        <BankCard key={card.id} card={card} />
      ))}
      {withEmpty && <EmptyCard />}
    </div>
  );
};
