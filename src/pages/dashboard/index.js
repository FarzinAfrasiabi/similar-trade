import { StatusApi } from "@/FakeApi/statusApi";
import dynamic from "next/dynamic";
import ProductOverview from "@/components/overview/productOverview";
import OrderStatus from "@/components/status/orderStatus";
import Layout from "@/container/layout";
import CustomTabs from "@/components/Tabs";


//Trun Off SSR
const StackedChart = dynamic(
  () => import("./../../components/chart/StackedChart"),
  { ssr: false }
);

const DashboardPage = () => {
  return (
    <Layout>
      {/* product Over View */}
      <ProductOverview />
      {/* status Bar */}
      <div className="grid grid-cols-12 gap-4">
        {StatusApi.map((status, index) => {
          return <OrderStatus key={index} status={status} />;
        })}
      </div>
      {/* chart */}
      <div className=" grid grid-cols-12 bg-white rounded-2xl shadow-lg  gap-8">
        <div className="col-span-12 lg:col-span-8 h-[500px] order-last lg:order-1">
          <StackedChart />
        </div>
        <div className="col-span-12 lg:col-span-4 py-4 lg:order-2 flex flex-col justify-between">
          <CustomTabs />
          <div className="flex items-center gap-x-4 container px-4 xl:px-8 w-full">
            <div className="flex flex-col gap-y-1 bg-white shadow-md rounded-xl px-2 py-4 flex-1">
              <span className="text-gray-700 text-sm font-semibold">Total Trade</span>
              <div className="block w-full border-l-4 border-deep-purple-400 font-semibold rounded text-gray-800 px-4 text-2xl">201</div>
            </div>
           <div className="flex flex-col gap-y-1 bg-white shadow-md rounded-xl px-2 py-4 flex-1">
              <span className="text-gray-700 text-sm font-semibold">Total Trade</span>
              <div className="block w-full border-l-4 border-deep-purple-400 font-semibold rounded text-gray-800 px-4 text-2xl">201</div>
            </div>
           
           <div className="flex flex-col gap-y-1 bg-white shadow-md rounded-xl px-2 py-4 flex-1">
              <span className="text-gray-700 text-sm font-semibold">Total Trade</span>
              <div className="block w-full border-l-4 border-deep-purple-400 font-semibold rounded text-gray-800 px-4 text-2xl">201</div>
            </div>
           
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
