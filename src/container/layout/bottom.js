import { mobileNavigation } from "@/utils/navigation";
import Link from "next/link";
import { useRouter } from "next/router";

const BottomNavigation = () => {
    const router = useRouter();
  return (
    <nav className="fixed bottom-0 w-full lg:hidden bg-[#E7E7E7] rounded-t-2xl  z-50">
      <ul className="w-full flex items-center  justify-between">
        {mobileNavigation.map((nav, index) => (
          <li key={index} className="relative py-3 px-4">
            <span
              className={`absolute h-[3px] left-2 bottom-0 w-10 bg-[#0062FF] rounded-tr-full rounded-full ${
                router.asPath === nav.path ? "block" : "hidden"
              }`}
            ></span>
            <Link
              className={`flex items-center gap-x-5  ${
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
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNavigation;
