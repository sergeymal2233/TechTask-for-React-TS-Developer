import classNames from "classnames";
import { HTMLAttributes } from "react";
import styles from './Flex.module.scss';

type Props = {
  options?: {
    gap?: number;
    direction?: "column";
    justify?: "center" | "space-between" | "flex-end";
    align?: "center" | "space-between";
  };
} & HTMLAttributes<HTMLDivElement>;

export const Flex = ({options, ...rest}: Props) => {
  return (
    <div
      className={classNames(styles.flex, rest.className, {
        [styles["flex--column"]]: options?.direction === "column",
        [styles["flex--justify-center"]]: options?.justify === "center",
        [styles["flex--justify-space-between"]]:
          options?.justify === "space-between",
        [styles["flex--justify-flex-end"]]: options?.justify === "flex-end",
        [styles["flex--align-center"]]: options?.align === "center",
        [styles["flex--align-space-between"]]:
          options?.align === "space-between",
      })}
      style={{ gap: `${options?.gap}rem`, ...rest.style }}
    >
      {rest.children}
    </div>
  );
};
