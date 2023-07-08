import SearchTrading from "@/components/search/searchTrader";
import Layout from "@/container/layout";
import { useRouter } from "next/router";
import { Avatar } from "@material-tailwind/react";
import HistoryProfile from "@/components/history/historyProfile";
import SignalerPlans from "@/components/plans/signalerPlans";
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
    desc: [
      { value: "Auto write signals in telegram" },
      { value: "View the signal as soon as it is sent" },
      { value: "View the signal as soon as it is sent" },
      { value: "View the signal as soon as it is sent" },
    ],
    price: 18,
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
    desc: [
      { value: "Auto write signals in telegram" },
      { value: "View the signal as soon as it is sent" },
      { value: "View the signal as soon as it is sent" },
      { value: "View the signal as soon as it is sent" },
    ],
    price: 60,
  },
];
const GetSignalById = () => {
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
            <div className="absolute left-4 top-8">
              <Avatar src="/images/avatar/face-2.jpg" size="xxl" />
            </div>
            {/* user and Id */}
            <div className="flex flex-col flex-1 items-center justify-center gap-y-2 text-sm">
              <span className="text-white text-lg capitalize">ahmad nur </span>
              <span className="text-white ">@matin</span>
            </div>
            {/* btn group */}
            <div className="flex items-center gap-x-4 flex-1 justify-end ">
              <button className=" px-4 py-2 text-sm bg-[#171725] bg-opacity-40 text-white ring-2 ring-white  rounded-lg">
                Signaler history
              </button>
              <button className="px-4 py-2 text-sm bg-[#171725] bg-opacity-40 text-white ring-2 ring-white  rounded-lg">
                Share signaler profile
              </button>
            </div>
          </div>
          {/* history data */}
          <div className="max-w-screen-xl container mx-auto p-2 px-4  ">
            <div className="w-full flex items-center justify-between">
              {history.map((history) => (
                <HistoryProfile key={history.title} {...history} />
              ))}
            </div>
          </div>
          <hr />
          <div className="mx-auto grid grid-cols-12 pt-4 mb-4 gap-3 px-4">
            {/* plans */}
            {plans.map((plan) => (
              <div
                key={plan.title}
                className="col-span-12 md:col-span-6 lg:col-span-3"
              >
                <SignalerPlans {...plan} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GetSignalById;

export async function getServerSideProps(ctx) {
  const { query } = ctx;
  console.log(query);
  return {
    props: {
      signalProfile: "",
    },
  };
}
