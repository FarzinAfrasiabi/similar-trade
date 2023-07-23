import { mobileNavigation } from "@/utils/navigation";
import Link from "next/link";
import { useRouter } from "next/router";

const BottomNavigation = () => {
  const router = useRouter();
  return (
    <nav className="fixed bottom-0 w-full lg:hidden z-50 pb-2 px-4">
      <ul className="w-full  bg-[#E7E7E7]  rounded-2xl  flex items-center  justify-between py-1">
        {mobileNavigation.map((nav, index) => (
          <li
            key={index}
            className="relative flex flex-col items-center py-2 px-4"
          >
            <span
              className={`absolute h-[3px]  bottom-0 w-10 bg-[#0062FF] rounded-tr-full rounded-full ${
                router.asPath === nav.path ? "block" : "hidden"
              }`}
            ></span>
            <Link
              className={`flex flex-col gap-y-1 items-center gap-x-5  ${
                router.asPath === nav.path ? "text-[#0062FF]" : "text-slate-600"
              }`}
              href={nav.path}
            >
              <span
                className={`${
                  router.asPath === nav.path
                    ? "fill-[#0062FF]"
                    : "fill-gray-400"
                }`}
              >
                {nav.icon()}
              </span>
              {router.asPath === nav.path && (
                <span className="text-xs flex-auto">{nav.name}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNavigation;
