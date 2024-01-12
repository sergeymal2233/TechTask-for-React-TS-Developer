import { Flex } from "@/components/UI/Flex";
import styles from "./Icon.module.scss";
import { PropsWithChildren } from "react";
import classNames from "classnames";

export type IconProps = {
  size?: "large" | "regular";
  variant?: "secondary" | "primary" | 'dark';
};

export const Icon = ({
  size = "regular",
  variant = "secondary",
  children,
}: PropsWithChildren<IconProps>) => {
  return (
    <Flex
      options={{ align: "center", justify: "center" }}
      className={classNames(styles.icon, {
        [styles["icon--large"]]: size === "large",
        [styles["icon--primary"]]: variant === "primary",
        [styles["icon--dark"]]: variant === 'dark',
      })}
    >
      {children}
    </Flex>
  );
};
