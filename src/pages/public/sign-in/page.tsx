import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Card, Input, Message, Title } from "components/atoms";
import { Form, FormItem } from "components/molecules";
import { SignInDocument, SignInInput, SignInMutation, SignInMutationVariables } from "gql/graphql";
import { Helmet } from "react-helmet-async";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "stores";
import { useMutation } from "urql";

const SignInPage = () => {
  const [messageApi, contextHolder] = Message.useMessage();
  const { signIn, accessToken, setAccessToken } = useUserStore();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignInInput>({
    mode: "onChange",
    defaultValues: {
      email: "test1@test.com",
      password: "1234",
    },
  });

  const [{ fetching }, signInMutation] = useMutation<SignInMutation, SignInMutationVariables>(SignInDocument);

  const onSubmit = async (input: SignInInput) => {
    if (fetching) {
      return;
    }
    try {
      const { data } = await signInMutation({ input });
      const {
        signIn: { ok, error, token },
      } = data as SignInMutation;
      if (error) {
        messageApi.open({ type: "error", content: error });
      }
      if (ok && token) {
        setAccessToken(token);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (e) {}
  };

  return (
    <article className="flex flex-col justify-center items-center w-full h-screen">
      {contextHolder}
      <Helmet>
        <title>Sign In</title>
      </Helmet>
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
            onClick={() => {
              signIn("1234");
            }}
          >
            Sign In
          </Button>
        </Form>
      </Card>
    </article>
  );
};

export default SignInPage;
