import HistoryTable from "@/components/history/historyTable";
import SignalOrder from "@/components/singnalOrder";
import TradingViewChart from "@/components/tradingViewChart";
import Layout from "@/container/layout";
import { ClOSED_TABLE_ROWS } from "@/utils/fakeTabsApi";
import {
  Input,
  Option,
  Select,
  Switch,
  Button,
} from "@material-tailwind/react";

const SendSgnalPage = () => {
  return (
    <Layout>
      <div className="w-full flex flex-col gap-y-4 xl:flex-row lg:gap-x-8 ">
        {/* trading view Chart */}
        <div className="xl:flex-grow flex flex-col gap-y-6">
          {/* trading chart  */}
          <div className="flex-1 bg-white rounded-xl shadow-md h-full max-h-[65vh] p-2 ">
            <TradingViewChart />
          </div>

          {/* trading tabale */}
          <div className=" xl:flex h-full max-h-[300px] overflow-auto ">
            <HistoryTable TABLE_ROWS={ClOSED_TABLE_ROWS} isScroll={true} />
          </div>
        </div>
        <div className="rounded-xl  flex flex-col gap-y-4 ">
          {/* shadow */}
          <SignalOrder>
            <div className="w-full flex items-center justify-between">
              <h1 className=" text-blue-500">Money Management </h1>
              <Switch id="auto-update" label="Auto" />
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
              <Input
                containerProps={{ className: "w-full lg:max-w-[170px] min-w-[0]" }}
                label="0.01 Lot per"
              />
              <Input
                containerProps={{ className: "w-full lg:max-w-[170px] min-w-[0]" }}
                label="Risk percentage"
              />
            </div>
          </SignalOrder>
          <SignalOrder>
            <div className="flex items-center justify-between">
              <h1 className="text-blue-500 ">New Order</h1>
              {/* icon */}
            </div>
            <form className="w-full flex  flex-col gap-y-3">
              <Select label="Order type">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select>
              <Input label="price" />
              <Input label="volume" />
              <Input label="Stop Loss" />
              <Input label="take profit" />
              <Select label="share method">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select>
              <div className="flex items-center w-full  gap-x-4">
                <Button className="bg-red-800 text-white flex-1 shadow-none hover:shadow-none font-sans font-normal">
                  Sell Stop
                </Button>
                <Button className="bg-blue-800 text-white flex-1 shadow-none hover:shadow-none font-sans font-normal">
                  Buy limit
                </Button>
              </div>
            </form>
          </SignalOrder>
          <SignalOrder>
            <div className="flex items-center justify-between">
              <h1 className="text-blue-500 ">Order Modify</h1>
              {/* icon */}
            </div>
            <form className="w-full flex  flex-col gap-y-3">
              <Input label="order id" />
              <Input label="volume" />
              <Input label="Stop Loss" />
              <Input label="take profit" />
              <div className="flex items-center w-full  gap-x-4">
                <Button className="bg-red-800 text-white flex-1 shadow-none hover:shadow-none font-sans font-normal">
                  Modify
                </Button>
                <Button className="bg-blue-800 text-white flex-1 shadow-none hover:shadow-none font-sans font-normal">
                  Close 222.222
                </Button>
              </div>
            </form>
          </SignalOrder>
        </div>
      </div>
    </Layout>
  );
};

export default SendSgnalPage;
