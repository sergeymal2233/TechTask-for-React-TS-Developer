import { useAuth } from "@/hooks/useAuth";
import { Flex } from "../UI/Flex";
import { Icon } from "../UI/Icons/Icon";
import { Typography } from "../UI/Typography";
import { useLaptopMediaQuery } from "@/utils/queries";

export const HeaderUserSection = () => {
  const { firstName, lastName } = useAuth();
  const initials = `${firstName[0]}${lastName[0]}`;
  const fullName = `${firstName} ${lastName}`.toUpperCase();
  const isBreakpoint = useLaptopMediaQuery();

  return (
    <Flex options={{ align: "center", gap: 1 }}>
      <Icon>{initials}</Icon>
      {!isBreakpoint && (
        <Typography textColor="primary-p-50" variant="body-2">
          {fullName}
        </Typography>
      )}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 15.375L6 9.37505L7.075 8.30005L12 13.25L16.925 8.32505L18 9.40005L12 15.375Z"
          fill="#F5CC82"
        />
      </svg>
    </Flex>
  );
};
