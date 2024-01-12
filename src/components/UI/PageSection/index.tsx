import { ReactNode } from "react";
import styles from "./PageSection.module.scss";
import { Typography } from "../Typography";

type Props = {
  title: string;
  component: ReactNode;
};

export const PageSection = ({ title, component }: Props) => {
  return (
    <div className={styles.section}>
      <Typography variant="h4" tag="h4">
        {title}
      </Typography>
      {component}
    </div>
  );
};
