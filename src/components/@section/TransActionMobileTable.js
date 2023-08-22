import { calcDate } from "@/utils/Date";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";

import { useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import ButtonACtions from "../actions/transAction";
import { HiEye, HiFolderArrowDown, HiPrinter } from "react-icons/hi2";
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
const TransactionMobileTable = ({ data, onClick }) => {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="w-full flex flex-col xl:hidden gap-y-2 px-2 pb-10">
      {data.map((row, index) => {
        return (
          <Accordion
            key={index + 1}
            open={open === index + 1}
            icon={<Icon id={index + 1} open={open} />}
            className="bg-white rounded-t-xl shadow"
          >
            <AccordionHeader
              onClick={() => handleOpen(index + 1)}
              className="  w-full flex items-center justify-between py-3   relative  text-base font-normal px-6"
            >
              <span
                className={`absolute left-0 w-1 h-full   ${
                  row.status === "unpaid"
                    ? "bg-orange-500"
                    : row.status === "progressing"
                    ? "bg-blue-500"
                    : row.status === "Decliend"
                    ? "bg-red-500"
                    : "bg-green-500"
                } rounded-full`}
              ></span>

              <TableItems mainData={row.paymentId} />
              <div className="flex items-center gap-x-2 ">
                <button
                  type="button"
                  className={`p-1 text-sm w-28 rounded-md font-medium ${
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
              </div>
            </AccordionHeader>
            <AccordionBody
              className=" px-6 py-0 scale-100 relative rounded-b-xl"
              style={{}}
            >
              <span
                className={`absolute left-0 w-1 h-full  rounded-full  ${
                  row.status === "unpaid"
                    ? "bg-orange-500"
                    : row.status === "progressing"
                    ? "bg-blue-500"
                    : row.status === "Decliend"
                    ? "bg-red-500"
                    : "bg-green-500"
                }`}
              ></span>
              <div className="flex flex-col  gap-y-4 lg:items-center justify-between  py-4 w-full">
                <div className="flex flex-col gap-y-2  border-b lg:border-b-0 w-full">
                  <div className="w-full flex items-center justify-between   gap-x-8">
                    <span className="flex-1 lg:flex-initial">type :</span>
                    <TableItems mainData={row.type} />
                  </div>
                  <div className="w-full flex items-center justify-between   gap-x-8">
                    <span className="flex-1 lg:flex-initial">amount :</span>
                    <TableItems mainData={row.amount} />
                  </div>
                  <div className="w-full flex items-center justify-between   gap-x-8">
                    <span className="flex-1 lg:flex-initial">method :</span>
                    <TableItems mainData={row.method} />
                  </div>
                  <div className="w-full flex items-center justify-between  gap-x-8">
                    <span className="flex-1 lg:flex-initial gap-x-8">
                      Start Time :
                    </span>
                    <TableItems
                      mainData={calcDate(row.startTime)}
                      color="text-blue-600"
                    />
                  </div>
                  <div className="w-full flex items-center justify-between  gap-x-8">
                    <span className="flex-1 lg:flex-initial gap-x-8">
                      Expire Time :
                    </span>
                    <TableItems
                      mainData={calcDate(row.expireTime)}
                      color="text-blue-600"
                    />
                  </div>
                </div>
              </div>
              <div className="flex pb-3  items-center gap-y-2 gap-x-3 justify-center">
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
                  <div className="">
                    <ButtonACtions>
                      <HiFolderArrowDown className="text-xl " />
                    </ButtonACtions>
                  </div>
                </div>
              </div>
            </AccordionBody>
          </Accordion>
        );
      })}
    </div>
  );
};

export default TransactionMobileTable;

function TableItems({
  mainData,
  otherData = "",
  isCol,
  color = "text-gray-800",
  size = "text-sm",
}) {
  return (
    <div className={`flex ${isCol ? "flex-col gap-y-1" : ""} flex-1 `}>
      <span className={`${color} ${size}`}>{mainData}</span>
      {isCol && <span className="text-sm text-gray-600 ">{otherData}</span>}
    </div>
  );
}

function SubScribeAction({ onClick }) {
  return (
    <div className="flex items-center gap-x-4">
      <div className="flex gap-x-2 justify-center">
        <button className=" text-center hover:text-blue-500">
          <BiEdit className="text-2xl" onClick={onClick} />
        </button>
        <button className="text-2xl text-center hover:text-red-500">
          <BiTrash className="text-2xl" />
        </button>
      </div>
    </div>
  );
}
