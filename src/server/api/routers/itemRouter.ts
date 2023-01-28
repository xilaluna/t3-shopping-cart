import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const itemRouter = createTRPCRouter({
  addItem: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(({ input, ctx }) => {
      return ctx.prisma.item.create({
        data: { name: input.name, checked: false },
      });
    }),
  getItems: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.item.findMany();
  }),
});
