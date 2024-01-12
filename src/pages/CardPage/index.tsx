import { Flex } from "@/components/UI/Flex";
import { Typography } from "@/components/UI/Typography";

export const CardPage = () => {
  return (
    <Flex
      className="empty-page"
      options={{ align: "center", justify: "center" }}
    >
      <Typography variant="h4">No information yet</Typography>
    </Flex>
  );
};
