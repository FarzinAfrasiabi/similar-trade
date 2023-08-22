import { calcDate } from "@/utils/Date";
import TableRow from "../common/tableRow";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import toast from "react-hot-toast";

const ServerDesktopTable = ({ row, active = false }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <tr className="border-b relative">
      <TableRow>
        <span
          className={`absolute left-0 w-1 rounded-full h-full  top-0 ${
            active ? "bg-yellow-600" : "bg-red-500"
          }`}
        ></span>
        <span>{row.serverId}</span>
      </TableRow>
      <TableRow>
        <span>{row.IpAddress}</span>
      </TableRow>
      <TableRow>
        <span className="text-sm">{row.userName}</span>
      </TableRow>
      <TableRow>
        <div className="flex flex-col">
          <span>{row.signaler.user}</span>
          <span>{row.signaler.userId}</span>
        </div>
      </TableRow>
      <TableRow>
        <span className="text-sm">{calcDate(row.startTime)}</span>
      </TableRow>
      <TableRow>
        <span className="text-sm">{calcDate(row.startTime)}</span>
      </TableRow>
      <TableRow>
        <span className="space-x-2">
          {showPassword ? (
            <CopyToClipboard
              text={"A12154ar234wef"}
              onCopy={() => {
                toast.success("Copied to clipBoard");
                setTimeout(() => {
                  setShowPassword(false);
                }, 2000);
              }}
            >
              <button className="p-2 px-2 rounded-lg shadow-md text-xs bg-gray-300 text-center ">
                <span className="flex items-center gap-x-2 ">
                  A12154ar234wef{" "}
                  <HiOutlineClipboardDocument className="text-xl text-gray-700" />
                </span>
              </button>
            </CopyToClipboard>
          ) : (
            <button
              type="button"
              className="p-2  px-6 rounded-lg shadow-md text-sm bg-gray-300  text-center "
              onClick={() => setShowPassword(true)}
            >
              Password
            </button>
          )}

          <button
            type="button"
            className="p-2 px-6 rounded-lg shadow-md text-sm bg-gray-300"
          >
            VNS
          </button>
        </span>
      </TableRow>
    </tr>
  );
};

export default ServerDesktopTable;
