import SubscribePage from "@/components/subscribe/page";
import CollapsibleTable from "@/components/table/CollapseTable";
import Layout from "@/container/layout";

const userId = () => {
  //* this page will generate
  return (
    <Layout>
      <div className="w-full px-2">
        <CollapsibleTable />
      </div>
    </Layout>
  );
};

export default userId;
