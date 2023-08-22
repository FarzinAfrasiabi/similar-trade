import AvatarInf from "@/components/avatar";
import AlertNotfication from "@/components/notfication/AlertNotfication";
import MessageNotfication from "@/components/notfication/MessageNotfication";
import { BiSearch } from "react-icons/bi";
import { Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import CustomModals from "@/components/custom/customModal";
import { Input } from "@material-tailwind/react";
import Link from "next/link";
import { navigation } from "@/utils/navigation";
import { IconName, PiSelectionSlashBold } from "react-icons/pi";
const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    if (searchValue.length !== 0) {
      const body = document.body;
      body.addEventListener("click", () => {
        setSearchValue("");
        setSearchResult([]);
      });
    }
  }, [searchValue]);
  //* actions
  const searchHandler = (e) => {
    setSearchValue(e.target.value);
    const res = navigation.filter((v) =>
      v.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResult(res);
  };
  return (
    <>
     
      <header className="z-30 py-[0.89rem] bg-gray-50 w-full shadow-md px-4 ">
        <div className="hidden lg:flex items-center justify-between h-full px-6 mx-auto w-full container ">
          {/* searchbar */}
          <div className="flex items-center justify-between max-w-lg w-full  rounded-lg  px-6 text-slate-700">
            <div className="w-full flex flex-col gap-y-4 relative">
              <Input
                placeholder="search"
                icon={<BiSearch className="text-2xl text-gray-800  " />}
                className="!border z-40  !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-xl"
                labelProps={{ className: "hidden " }}
                color="gray"
                onChange={searchHandler}
                value={searchValue}
              />
              <div
                className={`w-full absolute  top-12 z-10   px-2 ${
                  searchValue.length !== 0
                    ? "h-full opacity-100   duration-150 delay-300 "
                    : "h-0 opacity-0 blur-0 duration-100"
                } transition-all ease-in-out `}
              >
                <div className={`flex flex-col gap-y-3 bg-white rounded-xl ring-2 ring-gray-300 p-4 ${searchValue.length === 0 ? 'h-0' : 'h-fit'}`}>
                  <h4 className={`text-blue-500 text-sm px-4 font-medium pb-3  ${searchValue.length === 0 ? 'h-0' : 'h-fit'}`}>
                    {" "}
                    Result :
                  </h4>
                  {searchValue.length !== 0 && searchResult.length !== 0 ? (
                    <div className="grid grid-cols-3 gap-x-2 gap-y-2">
                      {searchResult.map((item, i) => (
                        <Link
                          key={i}
                          href={item.path}
                          className="flex flex-col gap-y-4 ring-1 rounded-lg ring-gray-300 items-center py-6 group hover:bg-gray-200 transition-all ease-in-out duration-100"
                        >
                          <span className=" fill-gray-700 group-hover:fill-blue-500">
                            {item.icon()}
                          </span>
                          <span className="text-sm text-gray-600 group-hover:text-blue-500">
                            {" "}
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className={`flex w-full items-center justify-center flex-col  gap-y-2 ${searchValue.length === 0 ? 'h-0' : 'h-fit'}`}>
                      <PiSelectionSlashBold className="text-8xl text-gray-800" />
                      <span className="font-semibold text-lg">
                        no result for {`"${searchValue}"`}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
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
          <div>
            <AvatarInf />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
