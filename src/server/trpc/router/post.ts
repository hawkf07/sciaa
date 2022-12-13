import { z } from "zod";
import { createPostSchema } from "../../../types/schema";
import { router, publicProcedure, protectedProcedure } from "../trpc";

export const postRouter = router({
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      const data = await ctx.prisma.post.findMany();

      return data;
    } catch (e) {
      return e;
    }
  }),
  getById: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      try {
        const { id } = input;
        const dataById = await ctx.prisma.post.findFirst({
          where: {
            id,
          },
        });
        return dataById;
      } catch (e) {
        return e;
      }
    }),
  createPost: protectedProcedure
    .input(createPostSchema)
    .mutation(async ({ ctx, input }) => {
      const { title, body, id } = input;

      const createPost = await ctx.prisma.user.update({
        data: {
          Post: {
            create: {
              title,
              body,
            },
          },
        },
        where: {
          id,
        },
      });
      return createPost;
    }),
});
