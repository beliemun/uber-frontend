import {
  RequestRefreshTokenDocument,
  RequestRefreshTokenMutation,
  RequestRefreshTokenMutationVariables,
} from "gql/graphql";
import { useRefreshToken } from "hooks";
import { useCallback, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { PATH } from "routes/constants";
import { useUserStore } from "stores";
import { useMutation } from "urql";

const PublicRouteGuard = () => {
  const { accessToken, signIn } = useUserStore();
  const { getRefreshToken, setRefreshToken } = useRefreshToken();
  // eslint-disable-next-line
  const [{ fetching }, requestRefreshTokenMutation] = useMutation<
    RequestRefreshTokenMutation,
    RequestRefreshTokenMutationVariables
  >(RequestRefreshTokenDocument);

  const requestTokens = useCallback(async () => {
    if (fetching || accessToken) {
      return;
    }

    const token = getRefreshToken();
    if (token) {
      const { data } = await requestRefreshTokenMutation({ input: { refreshToken: token } });
      if (data?.requestRefreshToken) {
        const { accessToken, refreshToken } = data.requestRefreshToken;
        if (accessToken && refreshToken) {
          signIn(accessToken);
          setRefreshToken(refreshToken);
        }
      }
    }
  }, [fetching, accessToken, getRefreshToken, requestRefreshTokenMutation, setRefreshToken]);

  useEffect(() => {
    requestTokens();
    // eslint-disable-next-line
  }, []);

  return !accessToken ? <Outlet /> : <Navigate to={PATH.HOME} replace />;
};

export default PublicRouteGuard;
