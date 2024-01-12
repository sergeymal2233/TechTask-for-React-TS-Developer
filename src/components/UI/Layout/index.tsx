import { PropsWithChildren } from "react";
import styles from "./Layout.module.scss";
import { Header } from "@/components/Header";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
