import OrderTab from "@/components/Tabs/OrderTab";
import HistoryTable from "@/components/history/historyTable";
import Layout from "@/container/layout";
import { TabPanel } from "@material-tailwind/react";

/**
 * const tableRows = [
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
    time2: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    price2: "1.24565",
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
    time2: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    price2: "1.24565",
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
    time2: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    price2: "1.24565",
    profit: { up: "9999.999", down: "999" },
  },
];
 */

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
    time2: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    price2: "1.24565",
    swap: "999.99",
    commission: "999.99",
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
    time2: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    price2: "1.24565",
    swap: "999.99",
    commission: "999.99",
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
    time2: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    price2: "1.24565",
    swap: "999.99",
    commission: "999.99",
    profit: { up: "9999.999", down: "999" },
  },
  {
    order: { id: "#123455778", signal: "Black Signal" },
    time: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    type: "SEll",
    size: "9999.99",
    symbol: "GBPUSD",
    price: "1.2656",
    sl: "1.2",
    tp: "1.2 ",
    time2: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    price2: "1.24565",
    swap: "999.99",
    commission: "999.99",
    profit: { up: "9999.999", down: "999" },
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
    time2: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    price2: "1.24565",
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
    time2: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    price2: "1.24565",
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
    time2: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    price2: "1.24565",
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
    time2: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    price2: "1.24565",
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
    time2: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    price2: "1.24565",
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
    time2: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    price2: "1.24565",
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
    time2: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleDateString(),
    },
    price2: "1.24565",
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
      <div className="w-full h-full xl:p-6 ">
        {/* tabs */}
        <OrderTab data={data}>
          <TabPanel className="p-0" value={"activeOrder"}>
            <HistoryTable TABLE_ROWS={ACTIVE_TABLE_ROWS} />
          </TabPanel>
          <TabPanel className="p-0" value={"closeOrder"}>
            <HistoryTable TABLE_ROWS={ClOSED_TABLE_ROWS} />
          </TabPanel>
          <TabPanel className="p-0" value={"allOrder"}>
            <HistoryTable TABLE_ROWS={ALL_TABALE_ROWS} />
          </TabPanel>
        </OrderTab>
      </div>
    </Layout>
  );
};

export default GetOrderIdPage;
