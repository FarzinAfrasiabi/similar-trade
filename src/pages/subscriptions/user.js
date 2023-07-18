import OrderTab from "@/components/Tabs/OrderTab";
import HistoryTable from "@/components/history/historyTable";
import TableWithAction from "@/components/table/tableWithAction";
import Layout from "@/container/layout";
import { TabPanel } from "@material-tailwind/react";
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
const Subscribeuser = () => {
  return (
    <Layout>
      {/* tabs on Hedaer */}
      <div className="w-full h-full xl:px-6 ">
        {/* tabs */}
        <OrderTab data={data}>
          <TabPanel value={"Active"}>
            <TableWithAction isAdmin={true} TABLE_ROWS={ACTIVE_TABLE_ROWS} />
          </TabPanel>
          <TabPanel value={"Expired"}>
            <TableWithAction isAdmin={true} TABLE_ROWS={ClOSED_TABLE_ROWS} />
          </TabPanel>
        </OrderTab>
      </div>
    </Layout>
  );
};

export default Subscribeuser;
