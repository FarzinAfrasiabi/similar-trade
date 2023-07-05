import HedaerAction from "@/components/hedaerAction";
import ChatIcon from "@/components/icons/public/chatIcon";
import AlertIcon from "@/components/icons/public/notficationIcon";
import SearchIcon from "@/components/icons/public/searchIcon";

const Header = () => {
  return (
    <header className="z-10 py-3 bg-white w-full shadow">
      <div className="flex items-center justify-between h-full px-6 mx-auto w-full container ">
        {/* searchbar */}
        {/* <div className="flex items-center justify-between max-w-lg w-full bg-gray-100 rounded-lg shadow-md px-6 text-slate-700">
          <input
            type="text"
            placeholder="search"
            className="border-none outline-none p-2 bg-transparent "
          />
          <span className="fill-[#92929D]">
            <SearchIcon />
          </span>
        </div> */}
        <div className="flex flex-1 items-center justify-end px-4  gap-x-4">
          <HedaerAction isNotfication={true}>
            <ChatIcon />
          </HedaerAction>
          <HedaerAction isNotfication={true}>
            <AlertIcon />
          </HedaerAction>
          {/* avatar profile */}
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-500">
            {/* <User size={16} color="#fff" /> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
