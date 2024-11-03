import { Text, Title } from "components/atoms";
import { cn } from "lib/utils";
import { CSSProperties, DetailedHTMLProps, FormHTMLAttributes } from "react";

interface FormProps
  extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  style?: CSSProperties;
  className?: string;
  title?: string;
  description?: string;
  gap?: number;
}

export const Form = ({
  style,
  className,
  title,
  description,
  children,
  gap = 20,
  ...rest
}: FormProps) => {
  return (
    <form style={{ gap, ...style }} className={cn("flex flex-col w-full", className)} {...rest}>
      <div className={"flex flex-col w-full gap-1 mb-1"}>
        <Title type="h6-semibold">{title}</Title>
        <Text type="sm-regular" color="description">
          {description}
        </Text>
      </div>
      {children}
    </form>
  );
};
