import Link from "next/link";
import { useRouter } from "next/router";

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

export const LeftSidebar = () => {
  const router = useRouter();
  return (
    <aside className="w-96 rounded bg-gray-500/20  p-3 ">
      <div className="static">
        <header className="w-full p-1 text-gray-200">
          <h1 className="text-2xl">Menu</h1>
        </header>
        <div className="flex w-full flex-col gap-3">
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
      </div>
    </aside>
  );
};
