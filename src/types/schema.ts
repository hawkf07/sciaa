import z from "zod";

export const createPostSchema = z.object({
  title: z.string(),
  body: z.string().optional(),
  votes: z.number().optional(),
  id: z.string().cuid(),
});
