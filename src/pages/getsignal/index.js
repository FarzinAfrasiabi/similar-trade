import Buttons from "@/components/Forms/button";
import SearchTrading from "@/components/search/searchTrader";
import Layout from "@/container/layout";
import { Input, Button } from "@material-tailwind/react";
const GetsignalPage = () => {
  return (
    <Layout>
      {/* searcch box */}
      <div className="grid grid-cols-12 gap-4">
        <SearchTrading title={"forex trading"} />
        <SearchTrading title={"Crypto trading"} />
          </div>
          {/* training video  */}
          {/* if not searching  */}
          <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-6 bg-purple-700 rounded-lg shadow-lg h-48"></div>
              <div className="col-span-12 md:col-span-6 bg-purple-700 rounded-lg shadow-lg h-48"></div>
              <div className="col-span-12 md:col-span-6 bg-purple-700 rounded-lg shadow-lg h-48"></div>
              <div className="col-span-12 md:col-span-6 bg-purple-700 rounded-lg shadow-lg h-48"></div>
              <div className="col-span-12 md:col-span-6 bg-purple-700 rounded-lg shadow-lg h-48"></div>
              <div className="col-span-12 md:col-span-6 bg-purple-700 rounded-lg shadow-lg h-48"></div>
          </div>

    </Layout>
  );
};

export default GetsignalPage;
