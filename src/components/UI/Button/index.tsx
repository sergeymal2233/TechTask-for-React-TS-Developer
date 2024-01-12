import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

type Size = "medium" | "large" | "small" | "fill";

type Style = "alternate" | "outlined";

type Status = "active" | "inactive";

type Props = {
  size?: Size;
  buttonStyle?: Style;
  status?: Status;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  size = "medium",
  status = "inactive",
  buttonStyle = "alternate",
  type = "button",
  children,
  ...rest
}: PropsWithChildren<Props>) => {
  return (
    <button
      type={type}
      className={classNames(styles.button, {
        [styles.medium]: size === "medium",
        [styles.large]: size === "large",
        [styles.fill]: size === "fill",
        [styles.alternate]: buttonStyle === "alternate",
        [styles.outlined]: buttonStyle === "outlined",
        [styles.active]: buttonStyle === "outlined" && status === "active",
      })}
      {...rest}
    >
      {children}
    </button>
  );
};
