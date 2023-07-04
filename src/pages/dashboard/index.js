import { StatusApi } from "@/FakeApi/statusApi";
import dynamic from "next/dynamic";
import ProductOverview from "@/components/overview/productOverview";
import OrderStatus from "@/components/status/orderStatus";
import Layout from "@/container/layout";

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
      <div className=" grid grid-cols-12 bg-white rounded-2xl shadow-lg ">
        <div className="col-span-12 lg:col-span-8 h-[500px]">
          <StackedChart />
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
