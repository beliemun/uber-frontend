import { useRefreshToken } from "hooks";
import { useUserStore } from "stores";
import { cacheExchange, Client, fetchExchange } from "urql";

const getTokens = async (): Promise<{ accessToken: string; refreshToken: string } | null> => {
  const { getRefreshToken, setRefreshToken } = useRefreshToken();
  const token = getRefreshToken();
  if (!token) return null;
  const response = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: ` mutation RequestRefreshToken($input: RequestRefreshTokenInput!) { requestRefreshToken(input: $input) { accessToken refreshToken } } `,
      variables: { input: { refreshToken: token } },
    }),
  });
  const result = await response.json();
  const data = result.data.requestRefreshToken;
  if (data?.accessToken && data?.refreshToken) {
    useUserStore.getState().signIn(data.accessToken);
    setRefreshToken(data.refreshToken);
    return { accessToken: data.accessToken, refreshToken: data.refreshToken };
  }
  return null;
};

export const client = new Client({
  url: "http://localhost:4000/graphql",
  exchanges: [cacheExchange, fetchExchange],
  // fetchOptions: () => {
  //   const token = getToken();
  //   return {
  //     headers: { authorization: token ? `Bearer ${token}` : '' },
  //   };
  // },
});
