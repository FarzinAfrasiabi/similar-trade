import BrandIcon from "@/components/icons/logo/brandLogo";
import { navigation } from "@/utils/navigation";
import Link from "next/link";
import { useRouter } from "next/router";

const Aside = () => {
  const router = useRouter();

  return (
    <aside className="z-20 hidden lg:w-52 xl:w-64 overflow-y-auto bg-white shadow-xl  lg:block flex-shrink-0">
      <div className="flex flex-col py-4 h-full justify-between">
        {/* brand */}
        <div className="flex items-center px-6 gap-x-6 border-b  border-r-gray-300 pb-5">
          <BrandIcon />
          <span className="text-lg text-slate-700 font-semibold">
            similar Trade
          </span>
        </div>
        {/* navigation */}
        <ul className="flex flex-col gap-y-5 mt-20">
          {navigation.map((nav, index) => {
            return (
              <li key={index} className="relative py-2 px-6">
                <span
                  className={`absolute inset-y-0 left-0 w-[5px] bg-[#0062FF] rounded-tr-full rounded-br-full ${
                    router.asPath === nav.path ? "block" : "hidden"
                  }`}
                ></span>
                <Link
                  className={`flex items-center gap-x-5  ${
                    router.asPath === nav.path
                      ? "text-[#0062FF]"
                      : "text-slate-600"
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
                  <span className="font-semibold">{nav.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        {/* profile */}
        <div className="flex-1 w-full flex pb-6 px-4  items-end">
          <div className="p-3 rounded-2xl bg-gray-300 flex items-center gap-x-4 w-full">
            {/* Profile Avatar */}
            <div className="w-10 cursor-pointer h-10 flex items-center justify-center bg-gray-800 rounded-full"></div>
            <div className="flex flex-col">
              {/* profile name  */}
              <span className="text-slate-800">Farzin Afrasiabi</span>
              <span className="text-slate-500 text-sm">@farzinafrasiabi</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
