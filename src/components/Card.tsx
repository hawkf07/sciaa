import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import z from "zod";

const CardScheme = z.object({
  imgUrl: z.string().url(),
  title: z.string(),
  hashtags: z.array(z.string()),
  description: z.string().optional(),
});

type Card = z.infer<typeof CardScheme>;

const Card: FC<Card> = ({ title, hashtags, description }) => {
  return (
    <article className="mx-5  w-full overflow-hidden rounded-lg bg-gray-600/50 text-gray-200 shadow sm:max-w-sm md:max-w-md lg:max-w-lg ">
      <Image
        className="w-full"
        src="https://via.placeholder.com/640x360"
        width={640}
        height={360}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <p className="text-base text-gray-200">{description}</p>
      </div>
      <div className="flex flex-wrap gap-3 px-6 py-4">
        {hashtags.map((hashtag) => {
          return (
            <Link
              className="mr-2 inline-block rounded-full bg-blue-300 px-3 py-1 text-sm font-semibold text-gray-800 transition-colors hover:bg-blue-200"
              href={`/hashtag`}
              key={hashtag}
            >
              {hashtag}
            </Link>
          );
        })}
      </div>
    </article>
  );
};
export { Card };
