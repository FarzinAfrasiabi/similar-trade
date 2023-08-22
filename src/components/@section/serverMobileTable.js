import { calcDate } from "@/utils/Date";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";

import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import { BiEdit, BiTrash } from "react-icons/bi";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
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
const ServerMobileTable = ({ data, active = false }) => {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full flex flex-col xl:hidden gap-y-2 px-2 pb-10">
      {data.map((item, index) => {
        return (
          <Accordion
            key={index + 1}
            open={open === index + 1}
            icon={<Icon id={index + 1} open={open} />}
            className="bg-white  shadow "
          >
            <AccordionHeader
              onClick={() => handleOpen(index + 1)}
              className="  w-full flex items-center justify-between py-4  relative  text-base font-normal px-6"
            >
              <span
                className={`absolute left-0 w-1 h-full   ${
                  active ? "bg-yellow-600" : "bg-red-500"
                } rounded-full`}
              ></span>

              <TableItems isCol={true} mainData={item.userName} />
              <div className="flex items-center gap-x-2">
                <div className="block flex-1 pr-1 border-r border-r-gray-400">
                  <TableItems mainData={item.serverId} size="text-sm" />
                </div>
              </div>
            </AccordionHeader>
            <AccordionBody
              className=" px-6 py-0 scale-100 relative rounded-b-xl"
              style={{}}
            >
              <span
                className={`absolute left-0 w-1 h-full  rounded-full ${
                  active ? "bg-yellow-600" : "bg-red-500"
                }`}
              ></span>
              <div className="flex flex-col  gap-y-4 lg:items-center justify-between  py-4 w-full">
                <div className="flex flex-col gap-y-2  border-b lg:border-b-0 w-full">
                  <div className="w-full flex items-center justify-between   gap-x-8">
                    <span className="flex-1 lg:flex-initial">Ip Address :</span>
                    <TableItems
                      mainData={item.IpAddress}
                    //   otherData={item.signaler.userId}
                      color="text-blue-600"
                    />
                  </div>
                  <div className="w-full flex items-center justify-between   gap-x-8">
                    <span className="flex-1 lg:flex-initial">signaller :</span>
                    <TableItems
                      mainData={item.signaler.user}
                      otherData={item.signaler.userId}
                      color="text-blue-600"
                    />
                  </div>
                  <div className="w-full flex items-center justify-between   gap-x-8">
                    <span className="flex-1 lg:flex-initial">Start Time :</span>
                    <TableItems mainData={calcDate(item.startTime)} />
                  </div>
                  <div className="w-full flex items-center justify-between   gap-x-8">
                    <span className="flex-1 lg:flex-initial">
                      Expire Time :
                    </span>
                    <TableItems mainData={calcDate(item.expireTime)} />
                  </div>
                </div>

                <div className="w-full flex items-center justify-center py-2">
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
                </div>
              </div>
            </AccordionBody>
          </Accordion>
        );
      })}
    </div>
  );
};

export default ServerMobileTable;

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
