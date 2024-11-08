import { cn } from "common/utils";
import { InputRef } from "antd";
import SearchAtnd from "antd/es/input/Search";
import { SearchProps as SearchAntdProps } from "antd/lib/input";
import { ForwardedRef, forwardRef } from "react";
import { ConfigProvider } from "./config-provider";
import { Text } from "components/atoms";
import "./styles.css";

export interface SearchProps extends SearchAntdProps {
  error?: string | undefined;
}

const Search = ({ className, size = "middle", error, ...rest }: SearchProps, ref: ForwardedRef<InputRef>) => {
  return (
    <ConfigProvider>
      <SearchAtnd ref={ref} className={cn(size, className)} size={size} {...rest} />
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

export default forwardRef<InputRef, SearchProps>(Search);
