import { CardPage, HomePage, StatementsPage } from "@/pages";

type Route = {
  path: string;
  element: React.ReactNode;
};

export const routes: Route[] = [
  { path: "/", element: <HomePage /> },
  { path: "/card", element: <CardPage /> },
  { path: "/statements", element: <StatementsPage /> },
];
