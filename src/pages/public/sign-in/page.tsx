import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Button, Input, Text, Title } from "components/atoms";
import { Form, FormItem } from "components/molecules";

import { Controller, useForm } from "react-hook-form";

interface SignInFormData {
  email: string;
  password: string;
}

const SignInPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();

  const onSubmit = (data: SignInFormData) => {
    console.log(data);
  };

  return (
    <article className="flex flex-col justify-center items-center w-full h-screen">
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

          <Button onClick={handleSubmit(onSubmit)} className="w-full">
            Sign In
          </Button>
        </Form>
      </Card>
    </article>
  );
};

export default SignInPage;
