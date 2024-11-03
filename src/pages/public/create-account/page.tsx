import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Input, Message, Radio, Title } from "components/atoms";
import { Form, FormItem } from "components/molecules";
import {
  CreateAccountDocument,
  CreateAccountInput,
  CreateAccountMutation,
  CreateAccountMutationVariables,
  UserRole,
} from "gql/graphql";
import { cn } from "lib/utils";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "urql";
import { roleOptions } from "./data";

const CreateAccountPage = () => {
  const [messageApi, contextHolder] = Message.useMessage();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAccountInput>();
  const [{ fetching }, createAccountMutation] = useMutation<
    CreateAccountMutation,
    CreateAccountMutationVariables
  >(CreateAccountDocument);

  const onSubmit = async (input: CreateAccountInput) => {
    if (fetching) {
      return;
    }
    try {
      const { data } = await createAccountMutation({ input });
      const {
        createAccount: { ok, error },
      } = data as CreateAccountMutation;
      if (error) {
        messageApi.open({ type: "error", content: error });
      }
      if (ok) {
        console.log("ok");
      }
    } catch {}
  };

  return (
    <article className="flex flex-col justify-center items-center w-full h-screen">
      {contextHolder}
      <Card>
        <Title className="w-full text-center pb-2">Create Account</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormItem label="email" required>
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
          <FormItem label="name" required>
            <Controller
              name="name"
              defaultValue="test1"
              control={control}
              rules={{
                required: "This field is required.",
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  size="large"
                  addonBefore={<UserOutlined />}
                  placeholder="여기에 이름을 입력"
                  autoComplete="name"
                  error={errors.name?.message}
                  status={errors.name?.message ? "error" : undefined}
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
          <FormItem label="role" required>
            <Controller
              name="role"
              control={control}
              defaultValue={UserRole.Client}
              rules={{ required: "This field is required." }}
              render={({ field }) => (
                <Radio.Group
                  {...field}
                  className={cn("felx felx-col gap-2")}
                  options={roleOptions}
                />
              )}
            />
          </FormItem>
          <Button type="submit" className="w-full" fullWidth loading={fetching}>
            Create Account
          </Button>
        </Form>
      </Card>
    </article>
  );
};

export default CreateAccountPage;
