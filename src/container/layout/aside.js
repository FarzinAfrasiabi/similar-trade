import DefaultAvatar from "@/components/avatar/defaultavatar";
import BrandIcon from "@/components/icons/logo/brandLogo";
import { navigation } from "@/utils/navigation";
import Link from "next/link";
import { useRouter } from "next/router";

const Aside = () => {
  const router = useRouter();
  return (
    <aside className="z-20 hidden lg:w-52 xl:w-64  bg-white shadow-xl  lg:block flex-shrink-0 ">
      <div className="flex flex-col py-4 h-full justify-between">
        {/* brand */}
        <div className="flex items-center px-6 gap-x-6 border-b  border-r-gray-300 pb-5">
          <BrandIcon />
          <span className="xl:text-lg text-slate-700 font-semibold">
            similar Trade
          </span>
        </div>
        {/* navigation */}
        <ul className="flex flex-col gap-y-5 mt-20">
          {navigation.map((nav, index) => {
            return (
              <Link
                href={nav.path}
                key={index}
                className="relative py-3 px-6 flex items-center gap-x-2 hover:bg-blue-50 rounded-r-lg cursor-pointer  group transition-all ease-out duration-200"
              >
                <span
                  className={`absolute inset-y-0 left-0 w-[5px] bg-[#0062FF] rounded-tr-full rounded-br-full font-semibold ${
                    router.asPath.startsWith(nav.path) ? "block" : "hidden"
                  }`}
                ></span>
                <div
                  className={`flex items-center gap-x-5 font-medium group-hover:text-blue-500 transition-all ease-out duration-200 ${
                    router.asPath.startsWith(nav.path)
                      ? "text-blue-500"
                      : "text-[#92929D]"
                  }`}
                >
                  <span
                    className={`${
                      router.asPath === nav.path
                        ? "fill-blue-500"
                        : "fill-gray-400 group-hover:fill-blue-500 transition-all ease-out duration-200"
                    } w-8`}
                  >
                    {nav.icon()}
                  </span>
                  <span className="">{nav.name}</span>
                </div>
              </Link>
            );
          })}
        </ul>
        {/* profile */}
        <div className="flex-1 w-full flex pb-6 px-4  items-end">
          <Link
            href={"/Profile/user/123"}
            className="p-3 rounded-2xl bg-gray-100 flex items-center gap-x-4 w-full hover:bg-gray-300 transition-all ease-in-out duration-200"
          >
            {/* Profile Avatar */}
            <DefaultAvatar />
            <div className="flex flex-col">
              {/* profile name  */}
              <span className="text-gray-800 overflow-auto text-ellipsis text-xs xl:text-sm font-medium">
                Farzin Afrasiabi
              </span>
              <span className="text-gray-500 text-xs">@farzinafrasiabi</span>
            </div>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
