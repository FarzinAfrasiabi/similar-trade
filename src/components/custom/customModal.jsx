// import { Dialog, DialogContent, Modal } from "@mui/material";

import { DialogBody } from "@material-tailwind/react";
import { Dialog } from "@mui/material";
import { HiXMark } from "react-icons/hi2";

const CustomModals = ({
  children,
  title,
  openModal,
  handleClose,
  size = "sm",
}) => {
  return (
    <Dialog
      className=" overflow-hidden"
      fullWidth
      maxWidth={size}
      open={openModal}
    >
      <div
        className={`bg-white flex   py-3 px-3 relative border-b border-gray-400 font-medium  w-full`}
      >
        {/* header */}

        <div className="w-full flex-1 flex items-center justify-between pb-2 ">
          <div className="p-2 rounded-md ring-1 ring-gray-300 text-gray-800 text-sm">
            {title}
          </div>
          {/* close btn */}
        </div>
        <div className=" ">
          <button
            onClick={handleClose}
            className="bg-gray-100 rounded-md  p-1 hover:scale-125 transition-all ease-in-out duration-150"
          >
            <HiXMark className="text-xl text-gray-700" />
          </button>
        </div>
        {/* content */}
      </div>
      <div className="bg-white px-4 py-5 w-full flex flex-col gap-y-4 items-center  shadow-lg overflow-hidden">
        {children}
      </div>
    </Dialog>
  );
};

export default CustomModals;
