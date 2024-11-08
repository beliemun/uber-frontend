import { CSSProperties, DetailedHTMLProps, LabelHTMLAttributes } from "react";
import { Tooltip, Text } from "components/atoms";
import { TooltipPlacement } from "components/atoms/tooltip/types";
import { TextType } from "components/atoms/text/types";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { cn } from "common/utils";

interface FormItemProps extends DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
  style?: CSSProperties;
  className?: string;
  label: string;
  labelType?: TextType;
  labelWidth?: number;
  direction?: "horizontal" | "vertical";
  required?: boolean;
  maxWidth?: number;
  tooltipTitle?: string;
  tooltipTrigger?: "click" | "focus" | "hover";
  tooltipPlacement?: TooltipPlacement;
  extra?: string;
}

export const FormItem = ({
  style,
  className,
  htmlFor,
  label,
  labelType = "sm-regular",
  labelWidth = 130,
  direction = "horizontal",
  required,
  maxWidth = 640,
  tooltipTitle,
  tooltipTrigger = "hover",
  tooltipPlacement = "top",
  extra,
  children,
  ...rest
}: FormItemProps) => {
  return (
    <div
      style={{ ...style, maxWidth }}
      className={cn("flex gap-2", direction === "horizontal" ? "flex-row" : "flex-col", className)}
    >
      <label style={{ width: labelWidth }} className={cn("flex w-full items-center gap-1 shrink-0")} {...rest}>
        <Text type={labelType} className="overflow-label" color="description">
          {label}
        </Text>
        {required ? <Text style={{ color: "red", marginLeft: -3 }}>*</Text> : null}
        {tooltipTitle ? (
          <Tooltip title={tooltipTitle} trigger={tooltipTrigger} placement={tooltipPlacement}>
            <Text color="description">
              <QuestionCircleOutlined style={{ fontSize: 14 }} />
            </Text>
          </Tooltip>
        ) : null}
      </label>
      <div className="flex flex-col w-full gap-1">
        {children}
        {extra ? (
          <Text type="xs-regular" color="disabled" className="mx-1">
            {`• ${extra}`}
          </Text>
        ) : null}
      </div>
    </div>
  );
};
