import { Link } from "react-router-dom";
import { Button } from "../UI/Button";
import { Typography } from "../UI/Typography";
import styles from "./HomeSidebar.module.scss";
import { Plus } from "../UI/Icons/Icons";
import { UserBankInfoList } from "../UserBankInfoList";
import { Flex } from "../UI/Flex";
import { Card } from "@/models/Card";
import { BankInfo } from "../UserBankInfo";
import { Account } from "@/models/Accounts";
import { useAuth } from "@/hooks/useAuth";

const cardsToBankInfo = (cards: Card[]): BankInfo[] => {
  return cards.map((card) => ({
    name: card.name,
    cardNumber: card.number,
  }));
};

const accountsToBankInfo = (accounts: Account[]): BankInfo[] => {
  return accounts.map((account) => ({
    name: account.name,
    cardNumber: account.cardNumber,
  }));
};

export const HomeSidebar = () => {
  const { accounts, cards } = useAuth();
  const infos = [...accountsToBankInfo(accounts), ...cardsToBankInfo(cards)];

  return (
    <div className={styles.side}>
      <div className={styles.wrapper}>
        <div className={styles.buttonWrapper}>
          <Link to='/card'>
            <Button buttonStyle="alternate" size="fill">
              Add money
            </Button>
          </Link>
        </div>

        <Flex className={styles.info} options={{ direction: "column", gap: 1 }}>
          <Typography variant="h3">Bank Account and Cards</Typography>

          <div>
            <UserBankInfoList infos={infos} />
          </div>

          <Link className={styles.link} to="/card">
            <Plus size="regular" />
            <Typography variant="link-bold">Link a card or bank</Typography>
          </Link>
        </Flex>
      </div>
    </div>
  );
};
