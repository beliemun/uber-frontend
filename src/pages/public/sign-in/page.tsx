import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Form } from "antd";
import { Button, Input, Title } from "components/atoms";

import { Controller, useForm } from "react-hook-form";

const SignInPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <article className="flex flex-col justify-center items-center w-full h-screen">
      <Card>
        <Title className="w-full text-center pb-2">Sign In</Title>
        <Form onFinish={handleSubmit(onSubmit)}>
          <Form.Item
            label="Email"
            validateStatus={errors.email ? "error" : ""}
            help={errors.email ? "This field is required." : ""}
          >
            <Controller
              name="email"
              control={control}
              defaultValue=""
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
                />
              )}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            validateStatus={errors.password ? "error" : ""}
            help={errors.password ? "This field is required." : ""}
          >
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: "This field is required." }}
              render={({ field }) => (
                <Input.Password
                  {...field}
                  size="large"
                  addonBefore={<LockOutlined />}
                  placeholder="여기에 비밀번호 입력"
                  autoComplete="password"
                />
              )}
            />
          </Form.Item>

          <Button onClick={handleSubmit(onSubmit)} className="w-full">
            Sign In
          </Button>
        </Form>
      </Card>
    </article>
  );
};

export default SignInPage;
