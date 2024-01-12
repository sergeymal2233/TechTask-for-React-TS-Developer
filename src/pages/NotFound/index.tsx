import { Button } from "@/components/UI/Button";
import { Flex } from "@/components/UI/Flex";
import { Typography } from "@/components/UI/Typography";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Flex
      className="empty-page"
      options={{ align: "center", direction: "column", gap: 1 }}
    >
      <Typography variant="h4">You're lost</Typography>
      <Button buttonStyle="outlined" onClick={() => navigate("/")}>
        Go home
      </Button>
    </Flex>
  );
};
