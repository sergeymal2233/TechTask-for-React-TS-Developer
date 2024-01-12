import classNames from "classnames";
import { HTMLAttributes, PropsWithChildren, createElement } from "react";
import styles from "./Typography.module.scss";

type Variants =
  | "h4"
  | "h6"
  | "body"
  | "body-2"
  | "body-large"
  | "body-medium"
  | "utility-small"
  | 'link-bold'
  | 'card-utility'
  | 'card-main'
  | 'h3'
type Tags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
type TextColors =
  | "primary-p-50"
  | "regular"
  | "success-color"
  | "secondary-grey"
  | "white";

type Props = {
  tag?: Tags;
  variant?: Variants;
  textColor?: TextColors;
} & HTMLAttributes<HTMLParagraphElement>;

export const Typography = ({
  tag = "p",
  variant = "body",
  textColor = "regular",
  children,
  ...props
}: PropsWithChildren<Props>) => {
  return createElement(
    tag,
    {
      className: classNames(
        {
          
          [styles.body]: variant === "body",
          [styles["body-2"]]: variant === "body-2",
          [styles.h4]: variant === "h4",
          [styles.h3]: variant === "h3",
          [styles.h6]: variant === "h6",
          [styles['card-utility']]: variant === 'card-utility',
          [styles['card-main']]: variant === 'card-main',
          [styles["body-medium"]]: variant === "body-medium",
          [styles["utility-small"]]: variant === "utility-small",
          [styles["primary-color"]]: textColor === "primary-p-50",
          [styles["body-large"]]: variant === "body-large",
          [styles["link-bold"]]: variant === 'link-bold', 
          [styles["success-color"]]: textColor === "success-color",
          [styles["secondary-grey"]]: textColor === "secondary-grey",
          [styles["white"]]: textColor === "white",
        },
        classNames
      ),
      ...props,
    },
    children
  );
};
