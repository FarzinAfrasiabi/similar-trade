import { calcDate } from "@/utils/Date";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";

import { useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { HiArrowRight } from "react-icons/hi2";

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
const OrderMobileTable = ({ data }) => {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="w-full flex flex-col xl:hidden gap-y-2 px-2 pb-10">
      {data.map((item, index) => {
        return (
          <Accordion
            key={index + 1}
            open={open === index + 1}
            icon={<Icon id={index + 1} open={open} />}
            className="bg-white rounded-t-xl shadow"
          >
            <AccordionHeader
              onClick={() => handleOpen(index + 1)}
              className="  w-full flex items-center justify-between py-2  relative  text-base font-normal px-6"
            >
              <span
                className={`absolute left-0 w-2 h-full   ${
                  item.type === "Sell" ? "bg-red-500" : "bg-blue-500"
                } ${open === index + 1 ? "rounded-t-full" : "rounded-full"}`}
              ></span>
              <div className="flex flex-col gap-y-2">
                <div className="flex items-center gap-x-2">
                  <TableItems mainData={item.symbol} />,
                  <span
                    className={`${
                      item.type === "Sell" ? "text-red-500" : "text-blue-500"
                    } font-semibold`}
                  >
                    {item.type === "Sell"
                      ? `Sell ${item.size}`
                      : `Buy${item.size}`}
                  </span>
                </div>
                <div className="flex items-center gap-x-2 text-gray-600">
                  <span className="text-sm">{item.price}</span>
                  <HiArrowRight className="" />
                  <span className="text-sm">{item.price2}</span>
                </div>
              </div>
              <div className="flex-1"></div>
              <div className="block lg:">
                <span
                  className={`font-medium ${
                    item.type === "Sell" ? "text-red-500" : "text-blue-500"
                  }`}
                >
                  {item.profit.up}
                </span>
              </div>
            </AccordionHeader>
            <AccordionBody
              className=" px-6 py-0 scale-100 relative rounded-b-xl"
              style={{}}
            >
              <span
                className={`absolute left-0 w-2 h-full  rounded-b-full ${
                  item.type === "Sell" ? "bg-red-500" : "bg-blue-500"
                }`}
              ></span>
              <div className="flex items-center gap-x-2 text-gray-800 font-medium pt-2">
                <span>{calcDate(item.time.date)}</span>
                <span>{calcDate(item.time.time)}</span>
              </div>
              <div className="flex flex-col gap-y-3 pt-4">
                <div className="flex items-center justify-between gap-x-10">
                  <div className="flex items-center flex-1 justify-between">
                    <span className="font-medium">SL : </span>
                    <span className="font-medium">{item.sl}</span>
                  </div>
                  <div className="flex flex-1 items-center justify-between ">
                    <span className="font-medium">Swap : </span>
                    <span className="font-medium">{item.swap}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-x-10">
                  <div className="flex items-center justify-between flex-1">
                    <span className="font-medium">Tp : </span>
                    <span className="font-medium">{item.tp}</span>
                  </div>
                  <div className="flex items-center justify-between flex-1">
                    <span className="font-medium">Texes : </span>
                    <span className="font-medium">{item.size}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-x-10">
                  <div className="flex items-center justify-between flex-1">
                    <span className="font-medium">Id : </span>
                    <span className="font-medium text-xs">{item.order.id}</span>
                  </div>
                  <div className="flex items-center  flex-1 justify-between">
                    <span className="font-medium text-xs">Com : </span>
                    <span className="font-medium ">{item.commission}</span>
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

export default OrderMobileTable;

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
