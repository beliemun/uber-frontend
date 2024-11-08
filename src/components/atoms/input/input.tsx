import { cn } from "common/utils";
import { Input as InputAntd, InputProps as InputAntdProps, InputRef } from "antd";
import { ForwardedRef, forwardRef, ForwardRefExoticComponent, RefAttributes } from "react";
import { ConfigProvider } from "./config-provider";
import Search, { SearchProps } from "./search";
import Password, { PasswordProps } from "./password";
import TextArea, { TextAreaProps } from "./textarea";
import OTP, { OTPProps } from "./opt";
import { OTPRef } from "antd/es/input/OTP";
import { Text } from "components/atoms";

export interface InputProps extends InputAntdProps {
  error?: string | undefined;
}

export interface InputComponentProps extends ForwardRefExoticComponent<InputProps & RefAttributes<InputRef>> {
  Search: ForwardRefExoticComponent<SearchProps & RefAttributes<InputRef>>;
  Password: ForwardRefExoticComponent<PasswordProps & RefAttributes<InputRef>>;
  TextArea: ForwardRefExoticComponent<TextAreaProps & RefAttributes<InputRef>>;
  OTP: ForwardRefExoticComponent<OTPProps & RefAttributes<OTPRef>>;
}

const Input = ({ style, className, error, autoComplete, ...rest }: InputProps, ref: ForwardedRef<InputRef>) => {
  return (
    <ConfigProvider>
      <InputAntd ref={ref} style={{ ...style }} className={cn(className)} {...rest} />
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

const InputComponent = forwardRef<InputRef, InputProps>(Input) as InputComponentProps;

InputComponent.Search = Search;
InputComponent.Password = Password;
InputComponent.TextArea = TextArea;
InputComponent.OTP = OTP;

export default InputComponent;
