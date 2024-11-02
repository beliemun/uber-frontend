import { InputRef, PasswordProps as PasswordAntdProps } from "antd/es/input";
import { ForwardedRef, forwardRef } from "react";
import { ConfigProvider } from "./config-provider";
import PasswordAntd from "antd/es/input/Password";
import { cn } from "lib/utils";
import { Text } from "components/atoms";
import "./styles.css";

export interface PasswordProps extends PasswordAntdProps {
  error?: string | undefined;
}

const Password = (
  { className, size = "middle", error, ...rest }: PasswordProps,
  ref: ForwardedRef<InputRef>
) => {
  return (
    <ConfigProvider>
      <PasswordAntd ref={ref} className={cn(size, className)} size={size} {...rest} />
      <div className="flex flex-col space-y-1 mt-1 ml-1">
        {error ? (
          <Text type="sm-regular" color="red">
            {"• " + error}
          </Text>
        ) : null}
      </div>
    </ConfigProvider>
  );
};

export default forwardRef<InputRef, PasswordProps>(Password);
