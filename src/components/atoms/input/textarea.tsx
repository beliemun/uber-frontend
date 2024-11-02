import { cn } from "lib/utils";
import { InputRef } from "antd";
import TextAreaAntd, { TextAreaProps as TextAreaAtndProps } from "antd/es/input/TextArea";
import { ForwardedRef, forwardRef } from "react";
import { ConfigProvider } from "./config-provider";
import { Text } from "components/atoms";

export interface TextAreaProps extends TextAreaAtndProps {
  error?: string[] | undefined;
}

const TextArea = ({ className, error, ...rest }: TextAreaProps, ref: ForwardedRef<InputRef>) => {
  return (
    <ConfigProvider>
      <TextAreaAntd ref={ref} className={cn(className)} {...rest} />
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

export default forwardRef<InputRef, TextAreaProps>(TextArea);
