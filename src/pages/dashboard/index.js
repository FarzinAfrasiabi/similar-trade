import { StatusApi } from "@/FakeApi/statusApi";
import ProductOverview from "@/components/overview/productOverview";
import OrderStatus from "@/components/status/orderStatus";
import Layout from "@/container/layout";

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
      {/* <StickChart /> */}
    </Layout>
  );
};

export default DashboardPage;
