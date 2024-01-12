import { TransactionType } from "@/types/TransactionType";
import { Card } from "./Card";

export interface Transaction {
  id: string,
  object: string,
  date: number,
  type: TransactionType
  card: Card,
  cents: number,
}
