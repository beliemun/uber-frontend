import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RootPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/sign-in");
  }, [navigate]);
  return <article>RootPage</article>;
};

export default RootPage;
