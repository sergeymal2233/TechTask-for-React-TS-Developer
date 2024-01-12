import { Account } from "@/models/Accounts";
import { Card } from "@/models/Card";
import { User } from "@/models/User";
import { CardProvider } from "@/types/CardProvider";
import { CardStatus } from "@/types/CardStatus";
import { PaymentSystem } from "@/types/PaymentSystem";
import { TransactionType } from "@/types/TransactionType";
import { PropsWithChildren, createContext, useState } from "react";

const accounts: Account[] = [
  { id: crypto.randomUUID(), cents: 19000, name: 'AccountName', cardNumber: '4588 •••• •••• 3211' },
  { id: crypto.randomUUID(), cents: 1020, name: "AccountName2", cardNumber: '4588 •••• •••• 0000' },
  { id: crypto.randomUUID(), cents: 5150, name: "AccountName3", cardNumber: '4588 •••• •••• 2134'},
  { id: crypto.randomUUID(), cents: 1250, name: "AccountName4", cardNumber: '4231 •••• •••• 9413'},
  { id: crypto.randomUUID(), cents: 52310, name: "AccountName5", cardNumber: '4588 •••• •••• 1559'},
]

const XeppTCard: Card = {
  id: crypto.randomUUID(),
  balance: 10523,
  name: 'Signature RBC visa',
  number: '4588 •••• •••• 0092',
  paymentSystem: PaymentSystem.VISA,
  provider: CardProvider.XEPPT,
  status: CardStatus.ACTIVE,
};

const otherCard = {
  id: crypto.randomUUID(),
  balance: 10050,
  name: 'Carddd Name visa',
  number: '4588 •••• •••• 0011',
  paymentSystem: PaymentSystem.VISA,
  provider: CardProvider.OTHER,
  status: CardStatus.INACTIVE,
}

const anotherCard = {
  id: crypto.randomUUID(),
  balance: 10023150,
  name: 'NameCard visa',
  number: '4128 •••• •••• 3211',
  paymentSystem: PaymentSystem.VISA,
  provider: CardProvider.OTHER,
  status: CardStatus.INACTIVE,
}

const mockedUser: User = {
  firstName: "Peter",
  lastName: "Morgan",
  cards: [XeppTCard, otherCard, anotherCard],
  accounts,
  transactions: [
    {
      id: crypto.randomUUID(),
      object: "Cineplex Inc.",
      date: 1705074061879,
      type: TransactionType.PAYMENT,
      card: otherCard,
      cents: 4250,
    },
    {
      id: crypto.randomUUID(),
      object: "RBC Royal Bank",
      date: 1702395789445,
      type: TransactionType.BANK_TRANSFER,
      card: XeppTCard,
      cents: 50000,
    },
    {
      id: crypto.randomUUID(),
      object: "Skyline Restaurant",
      date: 1699803798470,
      type: TransactionType.PAYMENT,
      card: otherCard,
      cents: 11045,
    },
    {
      id: crypto.randomUUID(),
      object: "Mock Bank",
      date: 1697121809826,
      type: TransactionType.BANK_TRANSFER,
      card: XeppTCard,
      cents: 50000,
    },
  ],
};

export const AuthContext = createContext<User>(mockedUser);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user] = useState(mockedUser);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
