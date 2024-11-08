import { cn } from "common/utils";
import { CheckboxOptionType, Radio as RadioAntd, RadioProps as RadioAntdProps } from "antd";
import "./styles.css";

import { ForwardedRef, forwardRef, ForwardRefExoticComponent, RefAttributes } from "react";
import { RadioRef } from "antd/lib/radio";
import RadioGroup, { RadioGroupProps } from "./radio-group";

export interface RadioProps extends RadioAntdProps {}

export type RadioOption = string | number | CheckboxOptionType<any>;

export interface RadioComponentProps extends ForwardRefExoticComponent<RadioProps & RefAttributes<RadioRef>> {
  Group: ForwardRefExoticComponent<RadioGroupProps & RefAttributes<HTMLDivElement>>;
}

const Radio = ({ className, ...rest }: RadioProps, ref: ForwardedRef<RadioRef>) => {
  return <RadioAntd ref={ref} className={cn(className)} {...rest} />;
};

const RadioComponent = forwardRef<RadioRef, RadioProps>(Radio) as RadioComponentProps;

RadioComponent.Group = RadioGroup;

export default RadioComponent;
