import SearchIcon from "@/components/icons/public/searchIcon";
import { useRouter } from "next/router";
import AvatarInf from "@/components/avatar";
import AlertNotfication from "@/components/notfication/AlertNotfication";
import MessageNotfication from "@/components/notfication/MessageNotfication";
const Header = () => {
  const router = useRouter();
  return (
    <header className="z-10 py-3 bg-white w-full shadow px-4 ">
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
        <div className="flex flex-1 items-center justify-end gap-x-2 px-4">
          <MessageNotfication />
          <AlertNotfication />
          <AvatarInf />
        </div>
      </div>
      {/* mobile and tablet header */}
      <div className="flex items-center justify-between  lg:hidden relative">
        {/* mobile not icon */}
        <div className="flex items-center gap-1 z-20">
          <MessageNotfication />
          <AlertNotfication />
        </div>

        {/* router  */}
        {/* <p className="text-gray-900 font-semibold text-center flex-1 absolute w-full flex items-center justify-center ">
          {router.pathname !== "/404" && router.pathname.split("/")[1]}
        </p> */}
        {/* avatar */}
        <div>
          <AvatarInf />
        </div>
      </div>
    </header>
  );
};

export default Header;
