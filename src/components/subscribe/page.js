import OrderTab from "@/components/Tabs/OrderTab";
import SubScribeRows from "@/components/subscribe/subscribeRows";
import Layout from "@/container/layout";
import { Button, Input, TabPanel } from "@material-tailwind/react";
import { useState } from "react";
import MainTable from "../@section/table";
import TableRow from "../common/tableRow";
import { BiPlus } from "react-icons/bi";
import CustomModals from "../custom/customModal";
import SubDescTable from "../@section/subDesktopTable";

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

const TABLE_HEAD = [
  "user",
  "BotMode",
  "Start in",
  "Expire in ",
  "Broker",
  "Broker Id",
  "order",
  "Earned profit",
  "",
];

const SubscribePage = ({ isAdmin = false }) => {
  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState("");
  const [telegramUser, setTelegramUser] = useState([]);
  const submitHandle = (e) => {
    e.preventDefault();
    const formData = { username: value };
    setTelegramUser([...telegramUser, formData]);
    setValue("");
  };

  const removeTelegramUser = () => {
    const data = [...telegramUser];
    data.pop();
    setTelegramUser(data);
  };

  return (
    <Layout>
      <CustomModals
        openModal={openModal}
        handleClose={() => setOpenModal(false)}
        title={"telegram users"}
        size="xs"
      >
        <form
          onSubmit={submitHandle}
          className="flex flex-col gap-y-2 h-full justify-between px-4 w-full max-w-md"
        >
          <div className="flex-1  px-2 py-2 overflow-y-auto h-full max-h-[300px]">
            <div className="flex-1 py-1 px-1 flex flex-col gap-y-3 ">
              {telegramUser.length !== 0
                ? telegramUser.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full ring-1 ring-gray-400 rounded-xl flex items-center justify-between py-2 px-4 text-gray-500"
                      >
                        <span>@{item.username}</span>
                        <button
                          onClick={removeTelegramUser}
                          type="button"
                          className="w-5 h-5 flex items-center justify-center rounded-full ring-1 ring-gray-600"
                        >
                          <BiPlus className="text-2xl text-gray-600 rotate-45" />
                        </button>
                      </div>
                    );
                  })
                : "no telegram user please add "}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-y-2 items-center gap-x-2 pb-3 py-2 bg-white">
            <Input
              onChange={(e) => setValue(e.target.value)}
              className="font-normal"
              value={value}
              type="text"
              label="@telegramId"
            />
            <Button className="w-full md:w-fit" type="submit">Add</Button>
          </div>
        </form>
      </CustomModals>
      <div className="w-full h-full pt-8 p-2 pb-10">
        <OrderTab
          data={data}
          btnHeader={"telegram"}
          onClick={() => setOpenModal(true)}
          text={"telegram user"}
        >
          <TabPanel className="!p-0" value={"Active"}>
            <div className="hidden xl:block">
              <MainTable header={TABLE_HEAD}>
                {ACTIVE_TABLE_ROWS.map((row, index) => {
                  return (
                    <SubDescTable
                      row={row}
                      key={index}
                      onClick={() => setOpenModal(true)}
                      active
                    />
                  );
                })}
              </MainTable>
            </div>
            <div className="block  xl:hidden">
              <SubScribeRows
                data={ACTIVE_TABLE_ROWS}
                label={"Active"}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            </div>
          </TabPanel>
          <TabPanel className="!p-0" value={"Expired"}>
            <SubScribeRows
              data={ClOSED_TABLE_ROWS}
              label={"Expired"}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          </TabPanel>
        </OrderTab>
      </div>
    </Layout>
  );
};

export default SubscribePage;
