import "@/styles/globals.css";
import type { AppType } from "next/app";
import { trpc } from "@/utils/trpc";
import CommonLayout from "@/layouts/CommonLayout";

const MyApp: AppType = ({ Component, pageProps }) => (
  <CommonLayout>
    <Component {...pageProps} />
  </CommonLayout>
);

export default trpc.withTRPC(MyApp);
