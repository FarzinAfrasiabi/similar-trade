import HedaerAction from "@/components/hedaerAction";
import BrandIcon from "@/components/icons/logo/brandLogo";
import ProfileIcon from "@/components/icons/navigation/profileIcon";
import ChatIcon from "@/components/icons/public/chatIcon";
import AlertIcon from "@/components/icons/public/notficationIcon";
import SearchIcon from "@/components/icons/public/searchIcon";
import { navigation } from "@/utils/navigation";
import { User } from "iconsax-react";
import Link from "next/link";
import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();
  return (
    <div className="flex h-screen overflow-hidden bg-[#FAFAFB]">
      {/* Desktop sidebar */}
      <aside className="z-20 hidden w-64 overflow-y-auto bg-white shadow-xl  md:block flex-shrink-0">
        <div className="flex flex-col py-3 h-full justify-between">
          {/* brand */}
          <div className="flex items-center px-6 gap-x-6 border-b-2 border-r-gray-300 pb-5">
            <BrandIcon />
            <span className="text-lg text-slate-700 font-semibold">similar Trade</span>
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
        <header className="z-10 py-3 bg-white w-full shadow">
          <div className="flex items-center justify-between h-full px-6 mx-auto w-full container ">
            {/* searchbar */}
            <div className="flex items-center justify-between max-w-lg w-full bg-gray-100 rounded-lg shadow-md px-6 text-slate-700">
              <input
                type="text"
                placeholder="search"
                className="border-none outline-none p-2 bg-transparent "
              />
              <span className="fill-[#92929D]">
                <SearchIcon />
              </span>
            </div>
            <div className="flex flex-1 items-center justify-end px-4  gap-x-4">
              <HedaerAction isNotfication={true}>
                <ChatIcon />
              </HedaerAction>
              <HedaerAction isNotfication={true}>
                <AlertIcon />
              </HedaerAction>
              {/* avatar profile */}
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-500">
                <User size={16} color="#fff" />
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default HomePage;

/**
 * <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path data-name="Combined Shape" d="M.513 20.2a4.5 4.5 0 0 1-.468-2C0 17.451 0 16.473 0 15.233V8.992C0 7.656 0 6.6.07 5.734a6.207 6.207 0 0 1 .6-2.4A6.07 6.07 0 0 1 3.336.667a6.207 6.207 0 0 1 2.4-.6C6.6 0 7.656 0 8.993 0h4.5C14.6 0 15.479 0 16.2.049a6.261 6.261 0 0 1 2.024.416 6.07 6.07 0 0 1 3.308 3.308 6.238 6.238 0 0 1 .419 2.027C22 6.52 22 7.4 22 8.511V8.6c0 1.113 0 1.991-.049 2.715a6.232 6.232 0 0 1-.416 2.025 6.066 6.066 0 0 1-3.308 3.308 6.235 6.235 0 0 1-2.024.416c-.724.049-1.6.049-2.715.049H10.3a4.881 4.881 0 0 0-.764.023 1.227 1.227 0 0 0-.573.287 4.71 4.71 0 0 0-.479.6l-.026.035-.019.026c-.735.979-1.315 1.752-1.794 2.315a4.475 4.475 0 0 1-1.579 1.325 3.643 3.643 0 0 1-1.4.279A3.686 3.686 0 0 1 .513 20.2ZM5.934 2.5a3.928 3.928 0 0 0-1.487.338 3.642 3.642 0 0 0-1.6 1.6 3.927 3.927 0 0 0-.338 1.487c-.063.768-.063 1.75-.063 3.111v6.154c0 1.35 0 2.21.041 2.858a5.394 5.394 0 0 0 .08.719 1.1 1.1 0 0 0 .053.19 1.228 1.228 0 0 0 1.049.6 1.21 1.21 0 0 0 .462-.091 1.032 1.032 0 0 0 .157-.122 5.4 5.4 0 0 0 .5-.528c.425-.5.97-1.225 1.725-2.231l.023-.031.023-.03.029-.041.011-.014a5.836 5.836 0 0 1 .742-.87 3.667 3.667 0 0 1 1.718-.859 5.879 5.879 0 0 1 1.159-.073h3.231c1.139 0 1.961 0 2.592-.043a4 4 0 0 0 1.256-.235 3.642 3.642 0 0 0 1.979-1.989 4.01 4.01 0 0 0 .235-1.256c.042-.615.044-1.385.044-2.591s0-1.976-.044-2.591a4 4 0 0 0-.235-1.256 3.638 3.638 0 0 0-1.984-1.984 4 4 0 0 0-1.256-.235c-.615-.042-1.385-.044-2.592-.044h-4.4c-1.36.001-2.344.001-3.111.064Zm8.734 6.049a1.222 1.222 0 1 1 1.222 1.228 1.221 1.221 0 0 1-1.223-1.222Zm-4.89 0A1.222 1.222 0 1 1 11 9.777a1.222 1.222 0 0 1-1.222-1.222Zm-4.888 0a1.222 1.222 0 1 1 1.222 1.228A1.221 1.221 0 0 1 4.89 8.555Z" fill="#92929d"/></svg>
 */
