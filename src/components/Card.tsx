import Image from "next/image";
import { FC } from "react";

const Card: FC = () => {
  return (
    <div className="max-w-sm overflow-hidden rounded-lg shadow-lg">
      <Image
        className="w-full"
        src="https://via.placeholder.com/640x360"
        width={640}
        height={360}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">The Coldest Sunset</div>
        <p className="text-base text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          molestie accumsan arcu vel scelerisque. Nullam ac enim tortor.
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          #photography
        </span>
        <span className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          #travel
        </span>
        <span className="inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          #winter
        </span>
      </div>
    </div>
  );
};
export { Card };
