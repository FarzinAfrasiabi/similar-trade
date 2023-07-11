import OrderTab from "@/components/Tabs/OrderTab";
import HistoryTable from "@/components/history/historyTable";
import Layout from "@/container/layout";


const OrderPage = () => {
    return ( 
        <Layout>
            {/* tabs on Hedaer */}
            <div className="w-full h-full px-6 ">
                {/* tabs */}
                <OrderTab>
                    <HistoryTable />
                </OrderTab>
            </div>
        </Layout>
     );
}
 
export default OrderPage;