import { createNextApiHandler } from "@trpc/server/adapters/next";
import { appRouter } from "@/server/routers/_app";
import { createTRPCContext } from "@/server/trpc";

// export API handler
// @see https://trpc.io/docs/api-handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
});
