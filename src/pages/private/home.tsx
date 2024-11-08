import { Button } from "components/atoms";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate("/sign-in")}>Button</Button>
    </div>
  );
};
