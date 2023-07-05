import HedaerAction from "@/components/hedaerAction";
import ChatIcon from "@/components/icons/public/chatIcon";
import AlertIcon from "@/components/icons/public/notficationIcon";
import SearchIcon from "@/components/icons/public/searchIcon";
import { useRouter } from "next/router";
import { Avatar } from "@material-tailwind/react";
import AvatarInf from "@/components/avatar";
const Header = () => {
  const router = useRouter();
  return (
    <header className="z-10 py-3 bg-white w-full shadow">
      <div className="hidden lg:flex items-center justify-between h-full px-6 mx-auto w-full container ">
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
          <AvatarInf />
        </div>
      </div>
      {/* mobile and tablet header */}
      <div className="flex items-center justify-between px-3 lg:hidden">
        {/* mobile not icon */}
        <div className="flex items-center">
          <HedaerAction isNotfication={true}>
            <ChatIcon />
          </HedaerAction>
          <HedaerAction isNotfication={true}>
            <AlertIcon   />
          </HedaerAction>
        </div>
        {/* router  */}
        <span className="text-gray-900 font-semibold">{router.asPath.split("/")[1]}</span>
        {/* avatar */}
        <AvatarInf />
      </div>
    </header>
  );
};

export default Header;
