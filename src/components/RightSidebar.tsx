import Link from "next/link";
import { useRouter } from "next/router";
import type { FC } from "react";
import { Button } from "./Button";
import { Icon } from "@iconify/react";
const sidebarMenuItem = [
  {
    name: "Home",
    url: "/",
    active: false,
  },
  {
    name: "Topics",
    url: "/topics",
    active: false,
  },
  {
    name: "My Topics",
    url: "/topics/me",
    active: false,
  },

  {
    name: "My Answers",
    url: "/answers/me",
    active: false,
  },
];

export const RightSideBar: FC = () => {
  const router = useRouter();
  return (
    <aside className="w-96 rounded bg-gray-500/20  p-3">
      <header className="w-full p-1 text-gray-200">
        <Button variant="primary">
          <div className="inline-flex items-center justify-around gap-5">
            <span className="text-gray-800"> Create new Topic</span>
            <Icon className="text-gray-800" icon={"fa:plus"} />
          </div>
        </Button>
      </header>
      <div className="mt-5 flex w-full flex-col gap-3">
        {sidebarMenuItem.map((item) => (
          <div
            key={item.name}
            className={`cursor-pointer rounded p-3 text-gray-100 transition-all   hover:bg-gray-600/50 ${router.asPath === item.url ? "bg-gray-700" : ""
              }`}
          >
            <li>
              <Link href={item.url}>{item.name}</Link>
            </li>
          </div>
        ))}
      </div>
    </aside>
  );
};
