import { Account } from "./Accounts";
import { Card } from "./Card";
import { Transaction } from "./Transactions";

export interface User {
  firstName: string,
  lastName: string,
  transactions: Transaction[],
  cards: Card[]
  accounts: Account[]
}