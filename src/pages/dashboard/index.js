import { StatusApi } from "@/FakeApi/statusApi";
import dynamic from "next/dynamic";
import ProductOverview from "@/components/overview/productOverview";
import OrderStatus from "@/components/status/orderStatus";
import Layout from "@/container/layout";
import CustomTabs from "@/components/Tabs";
import WalletStatus from "@/components/status/walletstatus";
import MobileProducts from "@/components/overview/mobileProductsOverView";

//Trun Off SSR
const StackedChart = dynamic(
  () => import("./../../components/chart/StackedChart"),
  { ssr: false }
);

//temporary
const walletStatus = [
  {
    id: 1,
    header: "Total Trade",
    color: "bg-deep-purple-500",
    number: 241,
  },
  { id: 2, header: "Profit", color: "bg-blue-800", number: 61 },
  { id: 3, header: "Total Trade", color: "bg-red-600", number: 94 },
];

const DashboardPage = () => {
  return (
    <Layout>
      {/* mobile Products OverView */}
      <div className="block min-h-[200px] lg:hidden">
        <MobileProducts />
      </div>
      {/* product Over View */}
      <ProductOverview />

      {/* status Bar */}
      <div className="grid grid-cols-12 gap-4">
        {StatusApi.map((status, index) => {
          return <OrderStatus key={index} status={status} />;
        })}
      </div>
      {/* chart */}
      <div className=" grid grid-cols-12 bg-white rounded-2xl shadow-lg">
        <div className="col-span-12 lg:col-span-7  xl:col-span-8 h-[500px] order-last lg:order-1">
          <StackedChart />
        </div>
        <div className="col-span-12 lg:col-span-5 xl:col-span-4 py-4 lg:order-2 flex flex-col justify-between">
          <CustomTabs />
          <div className="flex items-center gap-4 container px-2 xl:px-8 w-full flex-wrap">
            {walletStatus.map((item) => (
              <WalletStatus key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
      {/* wallet Status */}
    </Layout>
  );
};

export default DashboardPage;
