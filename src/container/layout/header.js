import AvatarInf from "@/components/avatar";
import AlertNotfication from "@/components/notfication/AlertNotfication";
import MessageNotfication from "@/components/notfication/MessageNotfication";
// import { Button, Input } from "@material-tailwind/react";
import { BiSearch } from "react-icons/bi";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import CustomModals from "@/components/custom/customModal";
import { Input } from "@material-tailwind/react";
import Link from "next/link";
import { quickAccessNavigation } from "@/utils/navigation";
const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  // const router = useRouter();
  return (
    <>
      {openModal && (
        <CustomModals
          openModal={openModal}
          handleClose={() => setOpenModal(false)}
          title={"search and quick access"}
        >
          <div className="flex flex-col gap-y-5 py-5">
            <div className="w-full">
              <Input
                placeholder="search"
                icon={<BiSearch className="text-2xl text-gray-800 " />}
                className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-xl"
                labelProps={{ className: "hidden " }}
                color="gray"
              />
            </div>
            <hr />
            <div className="flex flex-col gap-y-2 gap-x-4 ">
              <h1>Quick access</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4">
                {quickAccessNavigation.map((item, index) => (
                  <Link
                    key={index}
                    href={item.path}
                    className="flex flex-col gap-y-4 ring-1 rounded-lg ring-gray-300 items-center py-6 group hover:bg-gray-200 transition-all ease-in-out duration-100"
                  >
                    <span className=" fill-gray-700 group-hover:fill-blue-500">{item.icon()}</span>
                    <span className="text-sm text-gray-600 group-hover:text-blue-500"> {item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </CustomModals>
      )}
      <header className="z-10 py-3 bg-white w-full shadow-xl px-4 ">
        <div className="hidden lg:flex items-center justify-between h-full px-6 mx-auto w-full container ">
          {/* searchbar */}
          <div className="flex items-center justify-between max-w-lg w-full  rounded-lg  px-6 text-slate-700">
            <Tooltip title={"Search and Quick Access"}>
              <button onClick={() => setOpenModal(true)}>
                <BiSearch className="text-2xl text-gray-800 " />
              </button>
            </Tooltip>
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
    </>
  );
};

export default Header;
