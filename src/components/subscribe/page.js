import OrderTab from "@/components/Tabs/OrderTab";
import SubScribeRows from "@/components/subscribe/subscribeRows";
import Layout from "@/container/layout";
import { TabPanel } from "@material-tailwind/react";
import { useState } from "react";

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

const SubscribePage = ({ isAdmin = false }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Layout>
      <OrderTab
        data={data}
        btnHeader={"telegram"}
        onClick={() => setOpenModal(true)}
        text={"telegram user"}
        
      >
        <TabPanel value={"Active"}>
          <SubScribeRows data={ACTIVE_TABLE_ROWS} label={"Active"} openModal={openModal}
        setOpenModal={setOpenModal}/>
        </TabPanel>
        <TabPanel value={"Expired"}>
          <SubScribeRows data={ClOSED_TABLE_ROWS} label={"Expired"}  openModal={openModal}
        setOpenModal={setOpenModal}/>
        </TabPanel>
      </OrderTab>
    </Layout>
  );
};

export default SubscribePage;
