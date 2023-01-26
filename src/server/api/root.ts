import { createTRPCRouter } from "./trpc";
import { itemRouter } from "./routers/itemRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  itemRouter: itemRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
