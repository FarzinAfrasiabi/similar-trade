import OrderTab from "@/components/Tabs/OrderTab";
import HistoryTable from "@/components/history/historyTable";
import TableWithAction from "@/components/table/tableWithAction";
import Layout from "@/container/layout";
import { FingerPrintIcon } from "@heroicons/react/24/outline";
import { TabPanel } from "@material-tailwind/react";
import { BiLogoTelegram } from "react-icons/bi";
import { HiOutlineStar, HiPlay } from "react-icons/hi";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
/** userName,
                  botMode,
                  startTime,
                  endTime,
                  Broker,
                  BrokerId,
                  order,
                  earnedProfit, */
const ACTIVE_TABLE_ROWS = [
  {
    userName: { user: "Farzin Afrasiabi", id: "@farzinafrasiabi" },
    botMode: "Auto signal copier",
    startTime: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    endTime: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    Broker: "#Forex Time",
    BrokerId: "#22424100112311",
    order: "9999999",
    earnedProfit: "9999999999.999",
  },
  {
    userName: { user: "Farzin Afrasiabi", id: "@farzinafrasiabi" },
    botMode: "Auto signal copier",
    startTime: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    endTime: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    Broker: "#Forex Time",
    BrokerId: "#22424100112311",
    order: "9999999",
    earnedProfit: "9999999999.999",
  },
  {
    userName: { user: "Farzin Afrasiabi", id: "@farzinafrasiabi" },
    botMode: "Auto signal copier",
    startTime: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    endTime: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    Broker: "#Forex Time",
    BrokerId: "#22424100112311",
    order: "9999999",
    earnedProfit: "9999999999.999",
  },
  {
    userName: { user: "Farzin Afrasiabi", id: "@farzinafrasiabi" },
    botMode: "Auto signal copier",
    startTime: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    endTime: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    Broker: "#Forex Time",
    BrokerId: "#22424100112311",
    order: "9999999",
    earnedProfit: "9999999999.999",
  },
  {
    userName: { user: "Farzin Afrasiabi", id: "@farzinafrasiabi" },
    botMode: "Auto signal copier",
    startTime: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    endTime: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    Broker: "#Forex Time",
    BrokerId: "#22424100112311",
    order: "9999999",
    earnedProfit: "9999999999.999",
  },
  {
    userName: { user: "Farzin Afrasiabi", id: "@farzinafrasiabi" },
    botMode: "Auto signal copier",
    startTime: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    endTime: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    Broker: "#Forex Time",
    BrokerId: "#22424100112311",
    order: "9999999",
    earnedProfit: "9999999999.999",
  },
  {
    userName: { user: "Farzin Afrasiabi", id: "@farzinafrasiabi" },
    botMode: "Auto signal copier",
    startTime: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    endTime: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    Broker: "#Forex Time",
    BrokerId: "#22424100112311",
    order: "9999999",
    earnedProfit: "9999999999.999",
  },
  {
    userName: { user: "Farzin Afrasiabi", id: "@farzinafrasiabi" },
    botMode: "Auto signal copier",
    startTime: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    endTime: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    Broker: "#Forex Time",
    BrokerId: "#22424100112311",
    order: "9999999",
    earnedProfit: "9999999999.999",
  },
];
const ClOSED_TABLE_ROWS = [
  {
    userName: { user: "Farzin Afrasiabi", id: "@farzinafrasiabi" },
    botMode: "Auto signal copier",
    startTime: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    endTime: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    Broker: "#Forex Time",
    BrokerId: "#22424100112311",
    order: "9999999",
    earnedProfit: "9999999999.999",
  },
];
const data = [
  {
    label: "Active",
    value: "Active",
  },
  {
    label: "Expired",
    value: "Expired",
  },
];
const SubscribeId = () => {
  return (
    <Layout>
      {/* tabs on Hedaer */}
      <div className=" w-full h-full px-5">
        {/* tabs */}
        <OrderTab data={data}>
          {/* <TableWithAction isAdmin={true} TABLE_ROWS={ACTIVE_TABLE_ROWS} /> */}
          <div className="flex flex-col gap-y-2">
            {ACTIVE_TABLE_ROWS.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full py-2 px-4 flex items-center  bg-white rounded-xl shadow-md relative overflow-y-scroll gap-x-20"
                >
                  <span className="absolute left-0 w-2 h-full bg-yellow-400 rounded-l-xl"></span>
                  {/* userName */}
                  <TableItems
                    isCol={true}
                    mainData={item.userName.user}
                    otherData={item.userName.id}
                  />
                  <TableItems mainData={item.botMode} />
                  <TableItems
                    isCol={true}
                    mainData={item.startTime.date}
                    otherData={item.startTime.time}
                  />
                  <TableItems
                    isCol={true}
                    mainData={item.endTime.date}
                    otherData={item.endTime.time}
                  />
                  <TableItems mainData={item.Broker} />
                  <TableItems mainData={item.BrokerId} />
                  <TableItems mainData={item.order} />
                  <TableItems mainData={item.earnedProfit} />
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
                </div>
              );
            })}
          </div>
          <TabPanel value={"Active"}></TabPanel>
          <TabPanel value={"Expired"}>
            {/* <TableWithAction isAdmin={true} TABLE_ROWS={ClOSED_TABLE_ROWS} /> */}
          </TabPanel>
        </OrderTab>
      </div>
    </Layout>
  );
};

export default SubscribeId;
function TableItems({ mainData, otherData = "", isCol }) {
  return (
    <div className={`flex ${isCol ? "flex-col gap-y-1" : ""} flex-1 `}>
      <span className=" text-gray-800 ">{mainData}</span>
      {isCol && <span className="text-sm text-gray-600 ">{otherData}</span>}
    </div>
  );
}
