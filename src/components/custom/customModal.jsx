// import { Dialog, DialogContent, Modal } from "@mui/material";

import { Dialog, DialogBody } from "@material-tailwind/react";
import { HiXMark } from "react-icons/hi2";

const CustomModals = ({
  children,
  title,
  openModal,
  handleClose,
  size = "sm",
}) => {
  return (
    <Dialog className="" size={size} open={openModal}>
      <div className={`bg-white rounded-lg shadow-lg py-3 px-3 `}>
        {/* header */}
        <div className="w-full flex items-center justify-between pb-2 border-b border-gray-400 font-medium">
          <div className="p-2 rounded-md ring-1 ring-gray-300 text-gray-800 text-sm">
            {title}
          </div>
          {/* close btn */}
          <div className="w-full flex items-end justify-end absolute -top-1 left-2">
            <button
              onClick={handleClose}
              className="bg-white rounded-md shadow-lg p-1 hover:scale-125 hover:rotate-180 transition-all ease-in-out duration-150"
            >
              <HiXMark className="text-lg text-gray-900" />
            </button>
          </div>
        </div>
        {/* content */}
      </div>
      <DialogBody className="bg-white  shadow-lg">{children}</DialogBody>
    </Dialog>
  );
};

export default CustomModals;
