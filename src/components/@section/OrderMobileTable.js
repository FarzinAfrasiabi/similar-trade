import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";

import { useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";

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
                } rounded-full`}
              ></span>

              <TableItems
                isCol={true}
                mainData={item.order.id}
                otherData={item.order.signal}
              />
              <div className="flex items-center gap-x-2">
                <div className="block flex-1 pr-1 border-r border-r-gray-400">
                  <TableItems mainData={item.type} size="text-sm" />
                </div>

                <div className="block pr-1 border-r border-r-gray-400">
                  <TableItems mainData={item.symbol} size="text-xs" />
                </div>
              </div>
              <div className="block lg:hidden">
                <TableItems mainData={item.price} size="text-xs" />
              </div>
            </AccordionHeader>
            <AccordionBody
              className=" px-6 py-0 scale-100 relative rounded-b-xl"
              style={{}}
            >
              <span
                className={`absolute left-0 w-2 h-full  rounded-full ${
                  item.type === "Sell" ? "bg-red-500" : "bg-blue-500"
                }`}
              ></span>
              <div className="flex flex-col  gap-y-4 lg:items-center justify-between  py-4 w-full">
                <div className="flex flex-col gap-y-2  border-b lg:border-b-0 w-full">
                  <div className="w-full flex items-center justify-between   gap-x-8">
                    <span className="flex-1 lg:flex-initial">size :</span>
                    <TableItems mainData={item.size} />
                  </div>
                  <div className="w-full flex items-center justify-between   gap-x-8">
                    <span className="flex-1 lg:flex-initial">Sl :</span>
                    <TableItems mainData={item.sl} />
                  </div>
                  <div className="w-full flex items-center justify-between   gap-x-8">
                    <span className="flex-1 lg:flex-initial">tp :</span>
                    <TableItems mainData={item.tp} />
                  </div>

                  <div className="w-full flex items-center justify-between  gap-x-8">
                    <span className="flex-1 lg:flex-initial gap-x-8">
                      Profit :
                    </span>
                    <TableItems
                      mainData={item.profit.up}
                      otherData={item.order.down}
                      color="text-blue-600"
                    />
                  </div>
                </div>

                <div className="flex flex-col lg:hidden gap-y-2 border-b lg:border-b-0">
                  <div className="w-full flex items-center justify-between">
                    <span className="flex-1">start :</span>
                    <TableItems
                      mainData={item.time.date}
                      otherData={item.time.time}
                    />
                  </div>
                  <div className="w-full flex items-center justify-between">
                    <span className="flex-1">Close :</span>
                    <TableItems
                      mainData={item.time2.date}
                      otherData={item.time2.time}
                    />
                  </div>
                </div>
                {/* <div className="w-full flex items-center justify-center py-2">
                  <SubScribeAction onClick={() => onClick(item)} />
                </div> */}
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
