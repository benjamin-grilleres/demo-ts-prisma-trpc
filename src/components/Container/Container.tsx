import { ReactNode } from "react";
import cn from "classnames";
import { cssModulesClasses } from "@/utils/styles";
import styles from "./Container.module.scss";

type ContainerPropsType = {
  children: ReactNode;
  className: string;
};

const Container = ({ children, className }: ContainerPropsType) => {
  const clss = cssModulesClasses(styles);
  const classes = {
    root: cn(clss("prefix-container"), className),
  };

  return <div className={classes.root}>{children}</div>;
};

export default Container;
