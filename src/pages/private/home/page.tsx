import { Button } from "components/atoms";
import { useRefreshToken } from "hooks";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  const { removeRefreshToken } = useRefreshToken();

  const handleClickSignOut = () => {
    removeRefreshToken();
  };

  return (
    <div className="flex flex-col justify-start items-start w-full h-screen">
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Button className="m-2" onClick={handleClickSignOut}>
        Sign out
      </Button>
    </div>
  );
};

export default HomePage;
