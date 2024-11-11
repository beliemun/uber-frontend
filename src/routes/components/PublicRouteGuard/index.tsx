import { LoadingModal } from "components/molecules/loading-modal";
import {
  RequestRefreshTokenDocument,
  RequestRefreshTokenMutation,
  RequestRefreshTokenMutationVariables,
} from "gql/graphql";
import { useRefreshToken } from "hooks";
import { useCallback, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { PATH } from "routes/constants";
import { useUserStore } from "stores";
import { useMutation } from "urql";

const PublicRouteGuard = () => {
  const [isMount, setIsMount] = useState(false);
  const { accessToken, signIn } = useUserStore();
  const { getRefreshToken, setRefreshToken } = useRefreshToken();
  // eslint-disable-next-line
  const [{ fetching, data, error }, requestRefreshTokenMutation] = useMutation<
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
        setIsMount(true);
      }
    } else {
      setIsMount(true);
    }
  }, [fetching, accessToken, getRefreshToken, requestRefreshTokenMutation, signIn, setRefreshToken, setIsMount]);

  useEffect(() => {
    requestTokens();
    // eslint-disable-next-line
  }, []);

  if (!isMount) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <LoadingModal loading={true} />
      </div>
    );
  }

  return !accessToken ? <Outlet /> : <Navigate to={PATH.HOME} replace />;
};

export default PublicRouteGuard;
