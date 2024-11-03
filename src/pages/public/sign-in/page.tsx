import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Card, Input, Message, Title } from "components/atoms";
import { Form, FormItem } from "components/molecules";
import { SignInDocument, SignInInput, SignInMutation, SignInMutationVariables } from "gql/graphql";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "urql";

const SignInPage = () => {
  const [messageApi, contextHolder] = Message.useMessage();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<SignInInput>();
  const [{ fetching }, signInMutation] = useMutation<SignInMutation, SignInMutationVariables>(
    SignInDocument
  );

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
      if (ok) {
        console.log("token:", token);
      }
    } catch (e) {}
  };

  return (
    <article className="flex flex-col justify-center items-center w-full h-screen">
      {contextHolder}
      <Card>
        <Title className="w-full text-center pb-2">Sign In</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormItem label="Email" required>
            <Controller
              name="email"
              defaultValue="test1@test.com"
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
              defaultValue="1234"
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
          <Button type="submit" className="w-full" fullWidth loading={fetching}>
            Sign In
          </Button>
        </Form>
      </Card>
    </article>
  );
};

export default SignInPage;
