import { CSSProperties, forwardRef, LegacyRef, ReactNode, useEffect, useState } from "react";
import { TextColor, TextStyle, TextType } from "./types";
import { cn } from "common/utils";
import { ColorType } from "common/colors";
import { theme } from "antd";
import { textColorStyles } from "./styles";

export interface TextProps {
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
  type?: TextType;
  color?: TextColor | ColorType;
  onClick?: () => void;
}

const Text = (
  { children, style, className, type = "base-normal", color = "default", ...rest }: TextProps,
  ref: LegacyRef<HTMLSpanElement>
) => {
  const [textColor, setTextColor] = useState<string>("default");
  const {
    token: { colorText, colorTextDescription, colorTextDisabled, colorBgBase },
  } = theme.useToken();

  useEffect(() => {
    if (color === "default") {
      setTextColor(colorText);
    } else if (color === "description") {
      setTextColor(colorTextDescription);
    } else if (color === "disabled") {
      setTextColor(colorTextDisabled);
    } else if (color === "invert") {
      setTextColor(colorBgBase);
    }
  }, [color, colorText, colorTextDescription, colorTextDisabled, colorBgBase]);

  return (
    <span
      ref={ref}
      style={{ color: textColor, ...style }}
      className={cn(TextStyle[type], textColorStyles({ color }), className)}
      {...rest}
    >
      {children}
    </span>
  );
};

export default forwardRef(Text);
