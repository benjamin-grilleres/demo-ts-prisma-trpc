import { ReactNode } from "react";
import cn from "classnames";
import styles from "./Title.module.scss";
import { cssModulesClasses } from "@/utils/styles";

type TitlePropTypes = {
  children: ReactNode;
  className: string;
  is: keyof JSX.IntrinsicElements;
  regular?: boolean;
  semiBold?: boolean;
  font?: string;
  underline?: boolean;
  center?: boolean;
  xxl?: boolean;
  xl?: boolean;
  lg?: boolean;
  md?: boolean;
  sm?: boolean;
};

const Title = ({
  children,
  className,
  is,
  regular = false,
  semiBold = false,
  font = "display",
  underline = false,
  center = false,
  xxl = false,
  xl = false,
  lg = false,
  md = false,
  sm = false,
  ...props
}: TitlePropTypes) => {
  const clss = cssModulesClasses(styles);
  const classes = cn(
    className,
    clss(
      cn("prefix-title", `--font-${font}`, {
        "--regular": regular,
        "--semi-bold": semiBold,
        "--underline": underline,
        "--center": center,
        "--xxl": xxl,
        "--xl": xl,
        "--lg": lg,
        "--md": md,
        "--sm": sm,
      })
    )
  );

  const TitleTag = is;

  return (
    <TitleTag className={classes} {...props}>
      {children}
    </TitleTag>
  );
};

export default Title;
