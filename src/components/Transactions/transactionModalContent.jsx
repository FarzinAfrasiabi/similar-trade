import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import {
  HiOutlineClipboard,
  HiOutlineClipboardDocument,
} from "react-icons/hi2";

const TransActionsModalContent = ({ row, isStatus = false, type, icon }) => {
  return (
    <div className="py-4 px-2 border-b lg:even:border-l lg:odd:border-r border-gray-300 flex items-center gap-x-6">
      {/* icon */}
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 text-gray-800 cursor-pointer">
        {isStatus ? (
          <div className="w-5 h-5 rounded-full bg-gray-800"></div>
        ) : (
          icon
        )}
      </div>

      {/* title */}
      <div
        className={` flex ${
          isStatus ? "flex-row items-center gap-x-4" : "flex-col gap-y-1"
        } `}
      >
        <span className="text-sm text-gray-800">{type}</span>
        {isStatus ? (
          <button
            type="button"
            className={`px-2 py-1  text-sm  rounded-md  ${
              row === "unpaid"
                ? "bg-orange-100 text-orange-700"
                : row === "progressing"
                ? "bg-blue-100 text-blue-600 "
                : row === "Decliend"
                ? "bg-red-100 text-red-600 "
                : "bg-green-100 text-green-600"
            }`}
          >
            {row}
          </button>
        ) : type === "Transaction link" ? (
          <CopyToClipboard
            text={row}
            onCopy={() => toast.success("copy to clipboard")}
          >
            <button className="flex items-center gap-x-2 text-gray-600 text-xs">
              <span>{row}</span>
              <span>
                <HiOutlineClipboardDocument className="text-xl" />
              </span>
            </button>
          </CopyToClipboard>
        ) : (
          <span className="text-gray-600 text-xs">{row} </span>
        )}
      </div>
      {/* type */}
    </div>
  );
};

export default TransActionsModalContent;
