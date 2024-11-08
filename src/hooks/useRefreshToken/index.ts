import { useCookies } from "react-cookie";

export const useRefreshToken = () => {
  const [cookies, setCookie] = useCookies();

  const setRefreshToken = (token: string): void => {
    setCookie("refreshToken", token, { path: "/" });
  };
  const getRefreshToken = (): string | undefined => {
    return cookies.refreshToken;
  };
  return { setRefreshToken, getRefreshToken };
};
