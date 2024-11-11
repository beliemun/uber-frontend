import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Card, Input, Message, Title } from "components/atoms";
import { Form, FormItem } from "components/molecules";
import { SignInDocument, SignInInput, SignInMutation, SignInMutationVariables } from "gql/graphql";
import { useRefreshToken } from "hooks";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Controller, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserStore } from "stores";
import { useMutation } from "urql";

const SignInPage = () => {
  const [messageApi, contextHolder] = Message.useMessage();
  const { signIn } = useUserStore();
  const navigate = useNavigate();
  const location = useLocation();
  const { setRefreshToken } = useRefreshToken();
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignInInput>({
    mode: "onChange",
    defaultValues: {
      email: location.state?.email ?? "",
    },
  });

  const [{ fetching }, signInMutation] = useMutation<SignInMutation, SignInMutationVariables>(SignInDocument);

  const onSubmit = async (input: SignInInput) => {
    if (fetching) {
      return;
    }
    try {
      setIsLoading(true);
      const { data } = await signInMutation({ input });
      const {
        signIn: { ok, error, accessToken, refreshToken },
      } = data as SignInMutation;
      if (error) {
        messageApi.open({ type: "error", content: error });
      }
      if (ok && accessToken && refreshToken) {
        signIn(accessToken);
        setRefreshToken(refreshToken);
        navigate("/");
      }
    } catch {
    } finally {
      setIsLoading(false);
    }
  };

  const handleNavigate = () => navigate("/create-account");

  useEffect(() => {
    if (location.state?.email) {
      messageApi.open({
        type: "success",
        content: `Created Account successfully, Please sign in by '${location.state?.email}'.`,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("isLoading:", isLoading);

  return (
    <article className="flex flex-col justify-center items-center w-full h-screen">
      {contextHolder}
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <div className="absolute top-10 left-10 z-50">
        <Button onClick={() => setIsLoading((prev) => !prev)}>Button</Button>
      </div>
      <Card>
        <Title className="w-full text-center pb-2">Sign In</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormItem label="Email" required>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "This field is required.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Please enter a valid email address.",
                },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  type="email"
                  size="large"
                  addonBefore={<MailOutlined />}
                  placeholder="여기에 이메일을 입력"
                  autoComplete="email"
                  error={errors.email?.message}
                  status={errors.email?.message ? "error" : undefined}
                />
              )}
            />
          </FormItem>
          <FormItem label="Password" required>
            <Controller
              name="password"
              control={control}
              rules={{
                required: "This field is required.",
                minLength: { message: "It should be longer than 4 characters.", value: 4 },
              }}
              render={({ field }) => (
                <Input.Password
                  {...field}
                  size="large"
                  addonBefore={<LockOutlined />}
                  placeholder="여기에 비밀번호 입력"
                  autoComplete="password"
                  error={errors.password?.message}
                  status={errors.password?.message ? "error" : undefined}
                />
              )}
            />
          </FormItem>
          <Button
            type="submit"
            className="w-full"
            fullWidth
            loading={fetching}
            disabled={!isValid}
            onClick={handleSubmit(onSubmit)}
          >
            Sign In
          </Button>
        </Form>
      </Card>
      <Button buttonStyle="ghost" className="mt-4" onClick={handleNavigate}>
        Create Account
      </Button>
    </article>
  );
};

export default SignInPage;
