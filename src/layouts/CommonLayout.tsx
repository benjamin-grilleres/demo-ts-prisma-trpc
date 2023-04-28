import { Header } from "@/components/Header";
import { ReactNode } from "react";

type CommonLayoutPropsType = {
  children: ReactNode;
};

const CommonLayout = ({ children }: CommonLayoutPropsType) => (
  <>
    <Header />
    {children}
  </>
);

export default CommonLayout;
