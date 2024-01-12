import { Card } from "@/models/Card";
import styles from "./BankCard.module.scss";
import classNames from "classnames";
import { CardStatus } from "@/types/CardStatus";
import { Typography } from "../UI/Typography";
import { formatMoneyToUpperUnit } from "@/utils/price";
import { Link } from "react-router-dom";
import { Flex } from "../UI/Flex";
import { Plus } from "../UI/Icons/Icons";

type Props = {
  card: Card;
};

export const BankCard = ({ card }: Props) => {
  const { status, balance, number } = card;

  return (
    <div className={styles.card}>
      <div
        className={classNames(styles.status, {
          [styles.active]: status === CardStatus.ACTIVE,
          [styles.inactive]: status === CardStatus.INACTIVE,
        })}
      >
        <Typography
          variant="utility-small"
          textColor={status === CardStatus.ACTIVE ? "white" : "regular"}
        >
          {status === CardStatus.INACTIVE ? "Inactive" : "Active"}
        </Typography>
      </div>

      <div>
        <Typography variant='card-main' textColor="white">
          {`$${formatMoneyToUpperUnit(balance)}`}
        </Typography>
        <Typography variant="body" textColor="white">
          Available Balance
        </Typography>
      </div>

      <Typography variant="body" textColor="white">
        {number}
      </Typography>
    </div>
  );
};

export const EmptyCard = () => {
  return (
    <Link className={styles["empty-card"]} to="/card">
      <Flex options={{ gap: 1.375, direction: "column" }}>
        <Plus size='regular' />
        <Typography variant="h6">Order a new card</Typography>
      </Flex>
    </Link>
  );
};
