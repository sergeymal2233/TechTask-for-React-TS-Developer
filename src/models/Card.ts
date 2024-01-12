import { CardProvider } from "@/types/CardProvider"
import { CardStatus } from "@/types/CardStatus"
import { PaymentSystem } from "@/types/PaymentSystem"

export interface Card {
  id: string,
  name: string
  balance: number,
  status: CardStatus,
  number: string,
  paymentSystem: PaymentSystem,
  provider: CardProvider,
}