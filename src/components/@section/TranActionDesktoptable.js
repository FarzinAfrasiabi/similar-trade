import { calcDate } from "@/utils/Date";
import TableRow from "../common/tableRow";
import { HiEye, HiFolderArrowDown, HiPrinter } from "react-icons/hi2";

import ButtonACtions from "../actions/transAction";
import { useRouter } from "next/router";

const TransactionDesktopTable = ({ row, onClick }) => {
  const router = useRouter();

  return (
    <tr className="border-b relative">
      <TableRow>
        <span
          className={`absolute left-0 w-1 rounded-full h-full  top-0 ${
            row.status === "unpaid"
              ? "bg-orange-500"
              : row.status === "progressing"
              ? "bg-blue-500"
              : row.status === "Decliend"
              ? "bg-red-500"
              : "bg-green-500"
          }`}
        ></span>
        <span>{row.paymentId}</span>
      </TableRow>
      <TableRow>
        <span className="text-red-600">{row.type}</span>
      </TableRow>
      <TableRow>
        <div className="flex flex-col">
          <span className="text-sm">{calcDate(row.startTime)}</span>
          <span className="text-sm">{calcDate(row.expireTime)}</span>
        </div>
      </TableRow>
      <TableRow>
        <span className="text-sm">{row.amount}</span>
      </TableRow>
      <TableRow>
        <span className="text-red-600">{row.method}</span>
      </TableRow>
      <TableRow>
        <button
          type="button"
          className={`p-1 text-sm w-24 rounded-md font-medium ${
            row.status === "unpaid"
              ? "bg-orange-100 text-orange-700 hover:bg-orange-700 hover:text-white"
              : row.status === "progressing"
              ? "bg-blue-100 text-blue-600 hover:bg-blue-500 hover:text-white "
              : row.status === "Decliend"
              ? "bg-red-100 text-red-600 hover:bg-red-600 hover:text-white"
              : "bg-green-100 text-green-600 hover:bg-green-700 hover:text-white"
          }`}
        >
          {row.status}
        </button>
      </TableRow>

      <TableRow>
        <div className="flex flex-col xl:flex-row items-center gap-y-2 gap-x-3 justify-end">
          {row.status === "unpaid" && (
            <button className="py-2 px-2 rounded-xl text-sm ring-1 ring-gray-300 hover:bg-gray-600 hover:text-gray-200 transition-all ease-out duration-150">
              <span>Pay Invoice</span>
            </button>
          )}
          <div className="flex items-center gap-x-2">
            <ButtonACtions onClick={() => onClick(row)}>
              <HiEye className="text-xl" />
            </ButtonACtions>
            <ButtonACtions
              onClick={() => {
                router.push("/print/123");
                // onRow(row);
              }}
            >
              <HiPrinter className="text-xl" />
            </ButtonACtions>
            <div className="hidden xl:block">
              <ButtonACtions>
                <HiFolderArrowDown className="text-xl hidden lg:block" />
              </ButtonACtions>
            </div>
          </div>
        </div>
      </TableRow>
    </tr>
  );
};

export default TransactionDesktopTable;
