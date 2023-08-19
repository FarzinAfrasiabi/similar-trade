import { Dialog, Modal } from "@mui/material";
import { HiXMark } from "react-icons/hi2";

const CustomModals = ({
  children,
  title,
  openModal,
  handleClose,
  size = "sm",
}) => {
  return (
    <Modal className="!min-w-[600px]" open={openModal}>
      <div
        className={` absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg py-3 px-3 ${
          size === "sm" ? "min-w-full" : "!min-w-[650px]"
        } `}
      >
        {/* header */}
        <div className="w-full flex items-center justify-between pb-2 border-b border-gray-400">
          <div className="p-2 rounded-md ring-1 ring-gray-300 text-gray-600 text-sm">
            {title}
          </div>
          {/* close btn */}
          <div className="w-full flex items-end justify-end absolute -top-1 left-2">
            <button
              onClick={handleClose}
              className="bg-white rounded-md shadow-lg p-1 hover:scale-125 hover:rotate-180 transition-all ease-in-out duration-150"
            >
              <HiXMark />
            </button>
          </div>
        </div>
        {/* content */}
        {children}
      </div>
    </Modal>
  );
};

export default CustomModals;
