import { Card, CardBody, Typography } from "@material-tailwind/react";
import { HiOutlineStar } from "react-icons/hi";
import { HiOutlineChatBubbleBottomCenterText, HiPlay } from "react-icons/hi2";
import { BiLogoTelegram } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { array } from "yup";
const TABLE_HEAD = [
  "User",
  "Bot mode",
  "Start in",
  "Expire in",
  "Broker",
  "Broker ID",
  "Orders",
  "Win rate",
  "Earned profit",
  "Actions",
];

const TableWithAction = ({ TABLE_ROWS, isScroll = false, isAdmin = false }) => {
  const router = useRouter();
  console.log(router)
  const TABLE_HEAD_USER = [
    "User",
    "Bot mode",
    "Start in",
    "Expire in",
    "Broker",
    "Broker ID",
    "Orders",
    "WinRate",
    "Earned profit",
    "",
  ];
  const TABLE_HEAD_ADMIN = [
    "User",
    "Bot mode",
    "Start in",
    "Expire in",
    "Broker",
    "Broker ID",
    "Orders",
    "Earned profit",
    "",
  ];
  const [tableHead, setTableHead] = useState([]);
  useEffect(() => {
    const path = router.asPath.split("/")
    if (path[path.length - 1] === "admin") {
      setTableHead(TABLE_HEAD_ADMIN);
    } else {
      setTableHead(TABLE_HEAD_USER);
    }
  }, [router]);
  return (
    <Card className="w-full">
      <CardBody
        className={`h-full ${
          isScroll ? "max-h-[500px]" : "max-h-[82vh]"
        }  overflow-y-auto px-0`}
      >
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {tableHead.map((head, index) => (
                <th
                  key={index}
                  className={`border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 lg:p-2 xl:p-4 `}
                >
                  {
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  }
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              (
                {
                  userName,
                  botMode,
                  startTime,
                  endTime,
                  Broker,
                  BrokerId,
                  order,
                  earnedProfit,
                },
                index
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4 lg:p-2 xl:p-4"
                  : "p-4 lg:p-2 xl:p-4 border-b border-blue-gray-50";

                return (
                  <tr
                    key={index}
                    className={` border-l-8 border-[#FFCE73] rounded-md`}
                  >
                    {/* userName */}
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {userName.user}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal text-xs "
                        >
                          {userName.id}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {botMode}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      {/* start time */}
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {startTime.date}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {startTime.time}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      {/* start time */}
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {endTime.date}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {endTime.time}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className={``}>
                        {Broker}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className={``}>
                        {BrokerId}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small">{order}</Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small">{earnedProfit}</Typography>
                    </td>
                    <td className={""}>
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
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
};

export default TableWithAction;
