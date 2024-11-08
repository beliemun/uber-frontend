import { cn } from "common/utils";
import { Radio as RadioAntd, RadioGroupProps as RadioGroupAntdProps } from "antd";
import { ForwardedRef, forwardRef } from "react";

export interface RadioGroupProps extends RadioGroupAntdProps {}

const RadioGroup = ({ className, ...rest }: RadioGroupProps, ref: ForwardedRef<HTMLDivElement>) => {
  return <RadioAntd.Group ref={ref} className={cn(className)} {...rest}></RadioAntd.Group>;
};

export default forwardRef<HTMLDivElement, RadioGroupProps>(RadioGroup);
