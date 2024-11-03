import { CSSProperties, ReactNode, useEffect, useState } from "react";
import { TitleColor, TitleStyle, TitleType } from "./types";
import { cn } from "lib/utils";
import { ColorType } from "lib/colors";
import { theme } from "antd";
import { titleColorStyles } from "./styles";

export interface TitleProps {
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
  type?: TitleType;
  color?: TitleColor | ColorType;
  as?: keyof HTMLElementTagNameMap;
  onClick?: () => void;
}

export const Title = ({
  children,
  style,
  className,
  type = "h6-semibold",
  color = "default",
  as,
  ...rest
}: TitleProps) => {
  const [titleColor, setTitleColor] = useState<string>("default");
  const {
    token: { colorText, colorTextDescription, colorTextDisabled },
  } = theme.useToken();
  const headings = ["h1", "h2", "h3", "h4", "h5", "h6"];
  let Component: keyof JSX.IntrinsicElements = "h1";
  if (headings.includes(String(type).slice(0, 2))) {
    Component = String(type).slice(0, 2) as keyof JSX.IntrinsicElements;
  }

  useEffect(() => {
    if (color === "default") {
      setTitleColor(colorText);
    } else if (color === "description") {
      setTitleColor(colorTextDescription);
    } else if (color === "disabled") {
      setTitleColor(colorTextDisabled);
    }
  }, [color, colorText, colorTextDescription, colorTextDisabled]);

  return (
    <Component
      style={{ ...style, color: titleColor }}
      className={cn(TitleStyle[type], titleColorStyles({ color }), className)}
      {...rest}
    >
      {children}
    </Component>
  );
};
