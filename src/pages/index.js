import BrandIcon from "@/components/icons/logo/brandLogo";
import { navigation } from "@/utils/navigation";
import Link from "next/link";
import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();
  return (
    <div className="flex h-screen overflow-hidden bg-[#FAFAFB]">
      {/* Desktop sidebar */}
      <aside className="z-20 hidden w-64 overflow-y-auto bg-white shadow-xl  md:block flex-shrink-0">
        <div className="flex flex-col py-4 h-full justify-between">
          {/* brand */}
          <div className="flex items-center justify-center gap-x-2 border-b-2 border-r-gray-300 pb-4">
            <BrandIcon />
            <span className="text-lg text-slate-900">similar Trade</span>
          </div>
          {/* navigation */}
          <ul className="flex flex-col gap-y-3">
            {navigation.map((nav, index) => {
              return (
                <li key={index} className="relative py-2 px-6">
                  <span
                    className={`absolute inset-y-0 left-0 w-[5px] bg-blue-600 rounded-tr-full rounded-br-full ${
                      router.asPath === nav.path ? "block" : "hidden"
                    }`}
                  ></span>
                  <Link
                    className={`flex items-center gap-x-2  ${
                      router.asPath === nav.path
                        ? "text-sky-600"
                        : "text-slate-600"
                    }`}
                    href={nav.path}
                  >
                    <span></span>
                    <span>{nav.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* profile */}
          <div className="flex-1 w-full flex px-4  items-end">
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
      <div className="flex flex-1 flex-col w-full">
        {/* header */}
        <header className="z-10 py-3 bg-white w-full shadow-md">
            <div className="flex items-center justify-between h-full px-6 mx-auto w-full">
              {/* searchbar */}
              <div className="flex items-center justify-between max-w-lg w-full bg-slate-200 rounded-lg shadow-md px-6 text-slate-700">
                <input type="text" placeholder="search" className="border-none outline-none p-2 bg-transparent " />
                <span>Search icon</span>
              </div>
              <div className="flex flex-1 items-center justify-end px-4 gap-x-6">
                <button className="p-2">chat</button>
                <button className="p-2">chat</button>
                <button className="p-2">chat</button>
              </div>
            </div>
        </header>
      </div>
    </div>
  );
};

export default HomePage;
