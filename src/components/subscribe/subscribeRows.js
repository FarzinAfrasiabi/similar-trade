import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { useState } from "react";
import { BiLogoTelegram } from "react-icons/bi";
import { HiOutlineStar, HiPlay } from "react-icons/hi";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
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
const SubScribeRows = ({ data, label }) => {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className="w-full flex flex-col gap-y-2 px-2">
      <div className="w-full hidden lg:flex items-center justify-between py-2 bg-gray-300 rounded-md text-sm px-6">
        <div className="flex-1">Signaler</div>
        <div className="flex-1">bot Mode </div>
        <div className="flex-1 pr-5">start time</div>
        <div className="flex-1 pr-5">End time</div>
        {/* <div className="flex-1"></div> */}
      </div>
      {data.map((item, index) => {
        return (
          <Accordion
            key={index + 1}
            // animate={CUSTOM_ANIMATION}
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
                  label === "Active" ? "bg-yellow-400" : "bg-red-400"
                } rounded-tl-xl`}
              ></span>

              <TableItems
                isCol={true}
                mainData={item.userName.user}
                otherData={item.userName.id}
              />
              <div className="hidden lg:block flex-1">
                <TableItems mainData={item.botMode} size="text-sm" />
              </div>
              <div className="hidden lg:block flex-1">
                <TableItems
                  isCol={true}
                  mainData={item.startTime.date}
                  otherData={item.startTime.time}
                />
              </div>

              <div className="hidden lg:block flex-1">
                <TableItems
                  isCol={true}
                  mainData={item.endTime.date}
                  otherData={item.endTime.time}
                />
              </div>
              <div className="block lg:hidden">
                <TableItems mainData={item.botMode} size="text-xs" />
              </div>
            </AccordionHeader>
            <AccordionBody
              className=" px-6 py-0 scale-100 relative rounded-b-xl"
              style={{}}
            >
              <span className="absolute left-0 w-2 h-full   bg-yellow-400 rounded-lb-xl"></span>
              <div className="flex flex-col lg:flex-row gap-y-4 lg:items-center justify-between  py-4 w-full">
                <div className="flex flex-col gap-y-2 md:flex-row border-b lg:border-b-0 w-full">
                  <div className="w-full flex items-center justify-between   gap-x-8">
                    <span className="flex-1 lg:flex-initial">Broker id :</span>
                    <TableItems mainData={item.BrokerId} />
                  </div>
                  <div className="w-full flex items-center justify-between  gap-x-8">
                    <span className="flex-1 lg:flex-initial gap-x-8">
                      Order :
                    </span>
                    <TableItems mainData={item.order} color="text-blue-600" />
                  </div>
                  <div className="w-full flex items-center justify-between  gap-x-8">
                    <span className="flex-1 lg:flex-initial gap-x-8">
                      Profit :
                    </span>
                    <TableItems
                      mainData={item.earnedProfit}
                      color="text-blue-600"
                    />
                  </div>
                </div>

                <div className="flex flex-col lg:hidden gap-y-2 border-b lg:border-b-0">
                  <div className="w-full flex items-center justify-between">
                    <span className="flex-1">start :</span>
                    <TableItems mainData={item.startTime.date} />
                  </div>
                  <div className="w-full flex items-center justify-between">
                    <span className="flex-1">End Time : </span>

                    <TableItems mainData={item.endTime.date} />
                  </div>
                </div>
                <div className="w-full flex items-center justify-center py-2">
                  <SubScribeAction />
                </div>
              </div>
            </AccordionBody>
          </Accordion>
        );
      })}
    </div>
  );
};

export default SubScribeRows;

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

function SubScribeAction() {
  return (
    <div className="flex items-center gap-x-4">
      <button className="w-7 h-7 ring-2 ring-gray-300 rounded-full flex items-center justify-center bg-white shadow-md hover:text-yellow-500">
        <HiOutlineStar />
      </button>
      <button className="w-7 h-7 ring-2 ring-gray-300 rounded-full flex items-center justify-center bg-white shadow-md hover:text-yellow-500">
        <HiPlay />
      </button>
      <button className="w-7 h-7 ring-2 ring-gray-300 rounded-full flex items-center justify-center bg-white shadow-md hover:text-yellow-500">
        <HiOutlineChatBubbleBottomCenterText />
      </button>
      <button className="w-7 h-7 ring-2 ring-gray-300 rounded-full flex items-center justify-center bg-white shadow-md text-blue-700">
        <BiLogoTelegram />
      </button>
    </div>
  );
}
