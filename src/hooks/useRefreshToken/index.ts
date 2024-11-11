import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "stores";

const REFRESH_TOKEN = "refresh-token";

export const useRefreshToken = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const { signOut } = useUserStore();
  const navigate = useNavigate();

  const getRefreshToken = (): string | undefined => {
    return cookies[REFRESH_TOKEN];
  };
  const setRefreshToken = (token: string): void => {
    setCookie(REFRESH_TOKEN, token, { path: "/" });
  };
  const removeRefreshToken = (): void => {
    removeCookie(REFRESH_TOKEN, { path: "/" });
    signOut();
    navigate("/sign-in");
  };

  return { getRefreshToken, setRefreshToken, removeRefreshToken };
};
