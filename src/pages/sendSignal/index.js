import SendSignalMobileTable from "@/components/@section/SendSignalMobileTable";
import MainTable from "@/components/@section/table";
import CheckBoxes from "@/components/Forms/checkbox";
import TableRow from "@/components/common/tableRow";
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
  Checkbox,
} from "@material-tailwind/react";
import { useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";

const TABLE_HEAD = [
  "Order",
  "Time",
  "Type",
  "Size",
  "symbol",
  "Price",
  "S/L",
  "T/P",
  "Time",
  "Price",
  "swap",
  "commission",
  "profit",
  "Modify",
];

const SendSgnalPage = () => {
  const [receiverLot, setReceiverLot] = useState(0);
  const [activeReceiverBtn, setActiveReceiverBtn] = useState("auto");
  const [order, setOrder] = useState({ id: "", volume: "", sl: "", tp: "" });

  const orderTypeEditHandler = (row) => {
    setOrder({ id: row.order.id, volume: row.size, sl: row.sl, tp: row.tp });
    const modify = document.getElementById("modify");
    modify.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      <div className="w-full flex flex-col gap-y-4 2xl:flex-row lg:gap-x-8 ">
        {/* trading view Chart */}
        <div className="xl:flex-grow flex flex-col gap-y-6">
          {/* trading chart  */}
          <div className="flex-1 bg-white rounded-xl shadow-md h-full max-h-[65vh] p-2 ">
            <TradingViewChart />
          </div>

          {/* trading tabale */}
          {/* trading table desktop */}
          <div className="hidden xl:block h-full max-h-[500px] overflow-auto ">
            <MainTable header={TABLE_HEAD}>
              {ClOSED_TABLE_ROWS.map((row, index) => {
                return (
                  <tr key={index} className="border-b relative">
                    <TableRow>
                      <span
                        className={`absolute left-0 w-1 rounded-full h-full  top-0 ${
                          row.type === "Sell" ? "bg-red-500" : "bg-blue-500"
                        }`}
                      ></span>
                      <div className="flex flex-col w-full  px-2 ">
                        <span>{row.order.id}</span>
                        <span>{row.order.signal}</span>
                      </div>
                    </TableRow>
                    <TableRow>
                      <div className="flex flex-col">
                        <span>{row.time.date}</span>
                        <span>{row.time.time}</span>
                      </div>
                    </TableRow>
                    <TableRow>
                      <span className="text-sm">{row.type}</span>
                    </TableRow>
                    <TableRow>
                      <span className="text-sm">{row.size}</span>
                    </TableRow>
                    <TableRow>
                      <span className="text-sm">{row.symbol}</span>
                    </TableRow>
                    <TableRow>
                      <span className="text-sm">{row.price}</span>
                    </TableRow>
                    <TableRow>
                      <span className="text-sm">{row.sl}</span>
                    </TableRow>
                    <TableRow>
                      <span className="text-sm">{row.tp}</span>
                    </TableRow>
                    <TableRow>
                      <div className="flex flex-col">
                        <span>{row.time2.date}</span>
                        <span>{row.time2.time}</span>
                      </div>
                    </TableRow>
                    <TableRow>
                      <span className="text-sm">{row.price2}</span>
                    </TableRow>
                    <TableRow>
                      <span className="text-sm">{row.swap}</span>
                    </TableRow>
                    <TableRow>
                      <span className="text-sm">{row.commission}</span>
                    </TableRow>
                    <TableRow>
                      <div
                        className={`flex flex-col ${
                          row.type === "Sell"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        <span>{row.profit.up}</span>
                        <span>{row.profit.down}</span>
                      </div>
                    </TableRow>
                    <TableRow>
                      <div className="flex gap-x-2 justify-center">
                        <button className=" text-center hover:text-blue-500">
                          <BiEdit
                            className="text-2xl"
                            onClick={() => orderTypeEditHandler(row)}
                          />
                        </button>
                        <button className="text-2xl text-center hover:text-red-500">
                          <BiTrash className="text-2xl" />
                        </button>
                      </div>
                    </TableRow>
                  </tr>
                );
              })}
            </MainTable>
          </div>
          {/* trading table mobile */}
          <div>
            <SendSignalMobileTable
              data={ClOSED_TABLE_ROWS}
              onClick={orderTypeEditHandler}
            />
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
                containerProps={{
                  className: "w-full lg:max-w-[170px] min-w-[0]",
                }}
                label="0.01 Lot per"
              />
              <Input
                containerProps={{
                  className: "w-full lg:max-w-[170px] min-w-[0]",
                }}
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
                <Option>All User</Option>
                <Option>Free</Option>
                <Option>V.I.P</Option>
                <Option>Stared User</Option>
              </Select>
              <Input label="price" />
              <Input label="My Lot" />
              <Input label="Stop Loss" />
              <Input label="take profit" />
              <Select label="User Receiver">
                <Option>All User</Option>
                <Option>Free</Option>
                <Option>V.I.P</Option>
                <Option>Stared User</Option>
              </Select>
              <div className="flex flex-col  gap-y-2">
                <div className="flex items-center gap-x-2">
                  <span className="text-sm text-gray-800 px-2 ">
                    Receiver Lot :{" "}
                  </span>
                  <div className="flex items-center justify-center gap-x-2 flex-auto">
                    <Button
                      onClick={() => setReceiverLot(0)}
                      size="sm"
                      variant={receiverLot === 0 ? "filled" : "outlined"}
                    >
                      Auto
                    </Button>
                    <Button
                      onClick={() => setReceiverLot(1)}
                      size="sm"
                      variant={receiverLot === 1 ? "filled" : "outlined"}
                    >
                      Balance
                    </Button>
                  </div>
                </div>
                {/* auto */}
                <div
                  className={` items-center gap-x-2 justify-center ${
                    receiverLot === 0 ? "flex" : "hidden"
                  }`}
                >
                  {["auto", "1/2", "1/3", "1/4"].map((item, index) => (
                    <ReceiverLotActiveBtn
                      key={index}
                      item={item}
                      onClick={(id) => setActiveReceiverBtn(id)}
                      select={activeReceiverBtn}
                    />
                  ))}
                </div>
                {/* balance */}
                <div
                  className={`${
                    receiverLot === 1 ? "flex" : "hidden"
                  } items-center gap-x-2`}
                >
                  <span className="text-sm flex-1 w-28 px-2">
                    0.01 Lost Per :
                  </span>
                  <Input
                    type="number"
                    size="md"
                    containerProps={{ className: "!w-20 !xl:w-28" }}
                    label="0.01 Lost Per"
                  />
                </div>
                <div className="flex items-center py-3">
                  <Input type="number" label="Minimum Balance" />
                </div>
              </div>
              {/* <Select label="">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select> */}
              <div className="flex flex-col">
                <Checkbox label="Expire : Allowed open time difference" />
                <Checkbox label="Slippage : Allowed open Price difference" />
              </div>

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
            <form id="modify" className="w-full flex  flex-col gap-y-3">
              <Input
                onChange={(e) => console.log(e.target.value)}
                label="order id"
                value={order.id}
              />
              <Input
                onChange={(e) => console.log(e.target.value)}
                label="volume"
                value={order.volume}
              />
              <Input
                onChange={(e) => console.log(e.target.value)}
                label="Stop Loss"
                value={order.sl}
              />
              <Input
                onChange={(e) => console.log(e.target.value)}
                label="take profit"
                value={order.tp}
              />
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

function ReceiverLotActiveBtn({ item, index, onClick, select }) {
  return (
    <Button
      size="sm"
      variant={select === item ? "filled" : "outlined"}
      onClick={() => onClick(item)}
    >
      {item}
    </Button>
  );
}
