import OrderTab from "@/components/Tabs/OrderTab";
import HistoryTable from "@/components/history/historyTable";
import Layout from "@/container/layout";
import { TabPanel } from "@material-tailwind/react";

const ACTIVE_TABLE_ROWS = [
  {
    order: { id: "#123455778", signal: "Black Signal" },
    time: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    type: "Sell",
    size: "9999.99",
    symbol: "GBPUSD",
    price: "1.2656",
    sl: "1.2",
    tp: "1.2 ",
    profit: { up: "9999.999", down: "999" },
  },
  {
    order: { id: "#123455778", signal: "Black Signal" },
    time: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    type: "Buy",
    size: "9999.99",
    symbol: "GBPUSD",
    price: "1.2656",
    sl: "1.2",
    tp: "1.2 ",
    profit: { up: "9999.999", down: "999" },
  },
  {
    order: { id: "#123455778", signal: "Black Signal" },
    time: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    type: "Sell",
    size: "9999.99",
    symbol: "GBPUSD",
    price: "1.2656",
    sl: "1.2",
    tp: "1.2 ",
    profit: { up: "9999.999", down: "999" },
  },
  {
    order: { id: "#123455778", signal: "Black Signal" },
    time: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    type: "Sell",
    size: "9999.99",
    symbol: "GBPUSD",
    price: "1.2656",
    sl: "1.2",
    tp: "1.2 ",
    profit: { up: "9999.999", down: "999" },
  },
  {
    order: { id: "#123455778", signal: "Black Signal" },
    time: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    type: "Sell",
    size: "9999.99",
    symbol: "GBPUSD",
    price: "1.2656",
    sl: "1.2",
    tp: "1.2 ",
    profit: { up: "999.999", down: "999" },
  },
  {
    order: { id: "#123455778", signal: "Black Signal" },
    time: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    type: "Sell",
    size: "9999.99",
    symbol: "GBPUSD",
    price: "1.2656",
    sl: "1.2",
    tp: "1.2 ",
    profit: { up: "999.999", down: "999" },
  },
  {
    order: { id: "#123455778", signal: "Black Signal" },
    time: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    type: "Sell",
    size: "9999.99",
    symbol: "GBPUSD",
    price: "1.2656",
    sl: "1.2",
    tp: "1.2 ",
    profit: { up: "999.999", down: "999" },
  },
  {
    order: { id: "#123455778", signal: "Black Signal" },
    time: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    type: "BUY",
    size: "9999.99",
    symbol: "GBPUSD",
    price: "1.2656",
    sl: "1.2",
    tp: "1.2 ",
    profit: { up: "999.999", down: "999" },
  },
  {
    order: { id: "#123455778", signal: "Black Signal" },
    time: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    type: "Buy",
    size: "9999.99",
    symbol: "GBPUSD",
    price: "1.2656",
    sl: "1.2",
    tp: "1.2 ",
    profit: { up: "999.999", down: "999" },
  },
  {
    order: { id: "#123455778", signal: "Black Signal" },
    time: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    type: "Buy",
    size: "9999.99",
    symbol: "GBPUSD",
    price: "1.2656",
    sl: "1.2",
    tp: "1.2 ",
    profit: { up: "999.999", down: "999" },
  },
  {
    order: { id: "#123455778", signal: "Black Signal" },
    time: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    type: "Sell",
    size: "9999.99",
    symbol: "GBPUSD",
    price: "1.2656",
    sl: "1.2",
    tp: "1.2 ",
    profit: { up: "999.999", down: "999" },
  },
  {
    order: { id: "#123455778", signal: "Black Signal" },
    time: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    type: "Sell",
    size: "9999.99",
    symbol: "GBPUSD",
    price: "1.2656",
    sl: "1.2",
    tp: "1.2 ",
    profit: { up: "999.999", down: "999" },
  },
  {
    order: { id: "#123455778", signal: "Black Signal" },
    time: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    type: "Buy",
    size: "9999.99",
    symbol: "GBPUSD",
    price: "1.2656",
    sl: "1.2",
    tp: "1.2 ",
    profit: { up: "999.999", down: "999" },
  },
  {
    order: { id: "#123455778", signal: "Black Signal" },
    time: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    type: "Sell",
    size: "9999.99",
    symbol: "GBPUSD",
    price: "1.2656",
    sl: "1.2",
    tp: "1.2 ",
    profit: { up: "999.999", down: "999" },
  },
];
const ClOSED_TABLE_ROWS = [
  {
    order: { id: "#123455778", signal: "Black Signal" },
    time: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    type: "Sell",
    size: "9999.99",
    symbol: "GBPUSD",
    price: "1.2656",
    sl: "1.2",
    tp: "1.2 ",
    profit: { up: "9999.999", down: "999" },
  },
  {
    order: { id: "#123455778", signal: "Black Signal" },
    time: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    type: "Buy",
    size: "9999.99",
    symbol: "GBPUSD",
    price: "1.2656",
    sl: "1.2",
    tp: "1.2 ",
    profit: { up: "9999.999", down: "999" },
  },
  {
    order: { id: "#123455778", signal: "Black Signal" },
    time: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    type: "Sell",
    size: "9999.99",
    symbol: "GBPUSD",
    price: "1.2656",
    sl: "1.2",
    tp: "1.2 ",
    profit: { up: "9999.999", down: "999" },
  },
  {
    order: { id: "#123455778", signal: "Black Signal" },
    time: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    type: "Sell",
    size: "9999.99",
    symbol: "GBPUSD",
    price: "1.2656",
    sl: "1.2",
    tp: "1.2 ",
    profit: { up: "9999.999", down: "999" },
  },
  {
    order: { id: "#123455778", signal: "Black Signal" },
    time: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    type: "Sell",
    size: "9999.99",
    symbol: "GBPUSD",
    price: "1.2656",
    sl: "1.2",
    tp: "1.2 ",
    profit: { up: "999.999", down: "999" },
  },
  {
    order: { id: "#123455778", signal: "Black Signal" },
    time: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    type: "Sell",
    size: "9999.99",
    symbol: "GBPUSD",
    price: "1.2656",
    sl: "1.2",
    tp: "1.2 ",
    profit: { up: "999.999", down: "999" },
  },
  {
    order: { id: "#123455778", signal: "Black Signal" },
    time: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    type: "Sell",
    size: "9999.99",
    symbol: "GBPUSD",
    price: "1.2656",
    sl: "1.2",
    tp: "1.2 ",
    profit: { up: "999.999", down: "999" },
  },
];
const ALL_TABALE_ROWS = [...ACTIVE_TABLE_ROWS, ...ClOSED_TABLE_ROWS];
const data = [
  {
    label: "Active Order",
    value: "activeOrder",
  },
  {
    label: "Closed Order",
    value: "closeOrder",
  },
  {
    label: "All Orders",
    value: "allOrder",
  },
];
const GetOrderIdPage = () => {
  return (
    <Layout>
      {/* tabs on Hedaer */}
      <div className="w-full h-full xl:px-6 ">
        {/* tabs */}
        <OrderTab data = {data}>
          <TabPanel value={"activeOrder"}>
            <HistoryTable TABLE_ROWS={ACTIVE_TABLE_ROWS} />
          </TabPanel>
          <TabPanel value={"closeOrder"}>
            <HistoryTable TABLE_ROWS={ClOSED_TABLE_ROWS} />
          </TabPanel>
          <TabPanel value={"allOrder"}>
            <HistoryTable TABLE_ROWS={ALL_TABALE_ROWS} />
          </TabPanel>
        </OrderTab>
      </div>
    </Layout>
  );
};

export default GetOrderIdPage;
