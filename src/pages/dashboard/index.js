import EarningIcon from "@/components/icons/public/EarningIcon";
import ProfitIcon from "@/components/icons/public/ProfitIcon";
import DollarIcon from "@/components/icons/public/dollarIcon";
import WalletIcon from "@/components/icons/public/wallet";
import ProductOverview from "@/components/overview/productOverview";
import OrderStatus from "@/components/status/orderStatus";
import Layout from "@/container/layout";

const simpleStatusApi = [
  {
    title: "Current Balance",
    value: "63250.02",
    icon: () => (
      <DollarIcon className="fill-violet-400 group-hover:fill-violet-700" />
    ),
    isOrder: false,
  },
  {
    title: "Total Deposit",
    value: "65000.02",
    icon: () => (
      <WalletIcon className="fill-orange-400 group-hover:fill-orange-700" />
    ),
    isOrder: false,
  },
  {
    title: "Total Earnings",
    value: "63250.02",
    icon: () => (
      <EarningIcon className="fill-green-400 group-hover:fill-emerald-600" />
    ),
    isOrder: false,
  },
  {
    title: "Your Profit",
    value: "63250.02",
    icon: () => (
      <ProfitIcon className="fill-blue-400 group-hover:fill-blue-600" />
    ),
    isOrder: true,
    order: 9.22,
  },
];

const Dashboard = () => {
  return (
    <Layout>
      {/* Product Overview */}
      <ProductOverview />
      {/* Status  */}
      <div className="grid grid-cols-12 gap-4">
        {simpleStatusApi.map((status, index) => {
          return <OrderStatus key={index} status={status} />;
        })}
      </div>
    </Layout>
  );
};

export default Dashboard;
