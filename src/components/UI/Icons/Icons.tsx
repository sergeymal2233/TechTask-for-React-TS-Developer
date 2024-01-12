import { Icon, IconProps } from "./Icon";

export const CreditCard = ({
  variant = "secondary",
  size = "large",
}: IconProps) => {
  return (
    <Icon variant={variant} size={size}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="24"
        viewBox="0 0 30 24"
        fill="none"
      >
        <path
          d="M24.5699 4H5.43007C4.10225 4 3.04956 4.89 3.04956 6L3.0376 18C3.0376 19.11 4.10225 20 5.43007 20H24.5699C25.8977 20 26.9623 19.11 26.9623 18V6C26.9623 4.89 25.8977 4 24.5699 4ZM24.5699 18H5.43007V12H24.5699V18ZM24.5699 8H5.43007V6H24.5699V8Z"
          fill="#353535"
        />
      </svg>
    </Icon>
  );
};

export const Wallet = ({ variant = "primary", size = "large" }: IconProps) => {
  return (
    <Icon variant={variant} size={size}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="24"
        viewBox="0 0 33 24"
        fill="none"
      >
        <path
          d="M28.0943 7.28V5C28.0943 3.9 26.8829 3 25.4022 3H6.5573C5.06317 3 3.86517 3.9 3.86517 5V19C3.86517 20.1 5.06317 21 6.5573 21H25.4022C26.8829 21 28.0943 20.1 28.0943 19V16.72C28.8885 16.37 29.4404 15.74 29.4404 15V9C29.4404 8.26 28.8885 7.63 28.0943 7.28ZM26.7482 9V15H17.3258V9H26.7482ZM6.5573 19V5H25.4022V7H17.3258C15.8451 7 14.6337 7.9 14.6337 9V15C14.6337 16.1 15.8451 17 17.3258 17H25.4022V19H6.5573Z"
          fill="#201E1B"
        />
        <path
          d="M21.364 13.5C22.4791 13.5 23.3831 12.8284 23.3831 12C23.3831 11.1716 22.4791 10.5 21.364 10.5C20.2489 10.5 19.3449 11.1716 19.3449 12C19.3449 12.8284 20.2489 13.5 21.364 13.5Z"
          fill="#201E1B"
        />
      </svg>
    </Icon>
  );
};

export const Plus = ({ variant = "dark", size = "large" }: IconProps) => {
  return (
    <Icon variant={variant} size={size}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M20 13H13V20H11V13H4V11H11V4H13V11H20V13Z" fill="#F5CC82" />
      </svg>
    </Icon>
  );
};

export const Notification = ({
  variant = "secondary",
  size = 'regular',
}: IconProps) => {
  return (
    <Icon variant={variant} size={size}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M3.97876 19V17H5.97876V10C5.97876 8.61667 6.39543 7.3875 7.22876 6.3125C8.06209 5.2375 9.14543 4.53333 10.4788 4.2V3.5C10.4788 3.08333 10.6246 2.72917 10.9163 2.4375C11.2079 2.14583 11.5621 2 11.9788 2C12.3954 2 12.7496 2.14583 13.0413 2.4375C13.3329 2.72917 13.4788 3.08333 13.4788 3.5V4.2C14.8121 4.53333 15.8954 5.2375 16.7288 6.3125C17.5621 7.3875 17.9788 8.61667 17.9788 10V17H19.9788V19H3.97876ZM11.9788 22C11.4288 22 10.9579 21.8042 10.5663 21.4125C10.1746 21.0208 9.97876 20.55 9.97876 20H13.9788C13.9788 20.55 13.7829 21.0208 13.3913 21.4125C12.9996 21.8042 12.5288 22 11.9788 22ZM7.97876 17H15.9788V10C15.9788 8.9 15.5871 7.95833 14.8038 7.175C14.0204 6.39167 13.0788 6 11.9788 6C10.8788 6 9.93709 6.39167 9.15376 7.175C8.37043 7.95833 7.97876 8.9 7.97876 10V17Z"
          fill="#353535"
        />
      </svg>
    </Icon>
  );
};
