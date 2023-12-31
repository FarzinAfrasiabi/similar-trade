import SearchTrading from "@/components/search/searchTrader";
import Layout from "@/container/layout";
import { useRouter } from "next/router";
import { Avatar } from "@material-tailwind/react";
import HistoryProfile from "@/components/history/historyProfile";
import SignalerPlans from "@/components/plans/signalerPlans";
import { useState } from "react";
import HistoryTable from "@/components/history/historyTable";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Processor } from "postcss";
import toast from "react-hot-toast";
import DefaultAvatar from "@/components/avatar/defaultavatar";

const history = [
  { title: "Subscribers", desc: "10,925" },
  { title: "Weekly profit", desc: "10% - 15%" },
  { title: "Trade per week", desc: "10,925" },
  { title: "Subscribers", desc: "10 - 12" },
  { title: "All Trades", desc: "300" },
  { title: "Started", desc: new Date().toLocaleDateString() },
  { title: "Levrage", desc: "1:200" },
];

const plans = [
  {
    title: "Telegram bot",
    desc: [
      { value: "Auto write signals in telegram" },
      { value: "View the signal as soon as it is sent" },
      { value: "View the signal as soon as it is sent" },
      { value: "View the signal as soon as it is sent" },
    ],
    price: 0,
  },
  {
    title: "Free Auto Signal copier",
    gift: "+ Signaller Fee",
    desc: [
      { value: "Auto write signals in telegram" },
      { value: "View the signal as soon as it is sent" },
      { value: "View the signal as soon as it is sent" },
      { value: "View the signal as soon as it is sent" },
    ],
    price: 18,
    offPrice: 10,
  },
  {
    title: "V.I.P Telegram Bot",
    desc: [
      { value: "Auto write signals in telegram" },
      { value: "View the signal as soon as it is sent" },
      { value: "View the signal as soon as it is sent" },
      { value: "View the signal as soon as it is sent" },
    ],
    price: 0,
  },
  {
    title: "V.I.P Auto Signal copier",
    gift: "+ Signaller Fee",
    desc: [
      { value: "Auto write signals in telegram" },
      { value: "View the signal as soon as it is sent" },
      { value: "View the signal as soon as it is sent" },
      { value: "View the signal as soon as it is sent" },
    ],
    price: 60,
    offPrice: 30,
  },
];
const tableRows = [
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
const GetSignalById = () => {
  const [showHistory, setShowHistory] = useState(false);
  const router = useRouter();
  const userLogin = true;
  return (
    <Layout>
      <div className="grid grid-cols-12 gap-4">
        <SearchTrading title={"forex trading"} />
        <SearchTrading title={"Crypto trading"} />
        {/* profile */}
        <div className="col-span-12 bg-white shadow-xl rounded-2xl">
          {/* profile header */}
          <div className="w-full px-4 py-4 bg-cover bg-no-repeat bg-center bg-hero-pattern rounded-t-2xl flex items-center justify-evenly relative">
            {/* avatar */}
            <div className="absolute left-4 top-4">
              {userLogin ? (
                <Avatar src="/images/avatar/face-2.jpg" size="xxl" />
              ) : (
                <DefaultAvatar size="lg" />
              )}
            </div>
            {/* user and Id */}
            <div className="flex flex-col flex-1 items-center justify-center gap-y-2 text-sm">
              <span className="text-white text-lg capitalize">ahmad nur </span>
              <span className="text-white ">@matin</span>
            </div>
            {/* btn group */}
            <div className=" items-center gap-x-4 flex-1 justify-end hidden lg:flex">
              <button
                onClick={() => setShowHistory(!showHistory)}
                className=" px-4 py-2 w-[150px] text-sm bg-[#171725] bg-opacity-40 text-white ring-2 ring-white  rounded-lg"
              >
                {showHistory ? "Buy PLan" : "Show history"}
              </button>
              <CopyToClipboard
                text={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
                onCopy={() => toast.success("Profile copied to clipboard ")}
              >
                <button className="px-4 py-2  text-sm bg-[#171725] bg-opacity-40 text-white ring-2 ring-white  rounded-lg">
                  Share signaler profile
                </button>
              </CopyToClipboard>
            </div>
          </div>
          {/* history data */}
          <div className="max-w-screen-xl 2xl:max-w-screen-lg container mx-auto mt-16 md:mt-14 xl:mt-8 2xl:mt-0 py-2 px-4   ">
            <div className="w-full flex overflow-auto py-4  items-center justify-between">
              {history.map((history, i) => (
                <HistoryProfile key={i} {...history} />
              ))}
            </div>
          </div>
          <div className=" gap-y-2 flex-1  flex flex-col lg:hidden px-4">
            <button
              onClick={() => setShowHistory(!showHistory)}
              className=" px-4 py-2 text-sm bg-[#171725] bg-opacity-40 text-white ring-2 ring-white  rounded-lg"
            >
              Signaler history
            </button>
            <CopyToClipboard
              text={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
              onCopy={() => toast.success("Profile copied to clipboard ")}
            >
              <button className="px-4 py-2 text-sm bg-[#171725] bg-opacity-40 text-white ring-2 ring-white  rounded-lg">
                Share signaler profile
              </button>
            </CopyToClipboard>
          </div>
          <hr />
          {showHistory ? (
            <HistoryTable TABLE_ROWS={tableRows} isScroll={true} />
          ) : (
            <div>
              <h1 className="text-xl font-bold text-gray-800 text-center w-full py-2 pt-4">
                {`plan's`}
              </h1>
              <div className="mx-auto grid grid-cols-12 pt-4 mb-4 gap-3 px-4">
                {/* plans */}
                {plans.map((plan, i) => (
                  <div
                    key={i}
                    className="col-span-12 md:col-span-6 xl:col-span-3 2xl:col-span-3"
                  >
                    <SignalerPlans id={router.query.getSignalById} {...plan} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default GetSignalById;

export async function getServerSideProps(ctx) {
  const { query } = ctx;

  return {
    props: {
      signalProfile: "",
    },
  };
}
