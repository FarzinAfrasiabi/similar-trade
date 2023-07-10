import Layout from "@/container/layout";
import { useRouter } from "next/router";

const BuyPlanById = () => {
  const router = useRouter();
  return (
    <Layout>
      <div className="w-full flex flex-col gap-y-8">
        {/* invoice data */}
        <div className="w-full container flex  justify-between">
          <div className="">
            <h1 className="font-semibold">Hello , user Data</h1>
          </div>
          {/* invoice Data */}
          <div className="flex flex-col gap-y-2 w-full max-w-xs text-gray-800">
            <h1 className="text-lg capitalize ">invoice</h1>
            <div className=" flex items-center gap-x-8 font-normal">
              {/* payment Date */}
              <span className="text-sm ">Payment Date : </span>
              <span className="text-sm">{new Date().toLocaleDateString()}</span>
            </div>
            <div className=" flex items-center gap-x-8 font-normal">
              {/* payment Id */}
              <span className="text-sm ">Payment Id : </span>
              <span className="text-sm">#245611445674</span>
            </div>
            <div className=" flex items-center gap-x-8 font-normal">
              {/* payment Id */}
              <span className="text-sm ">Payment Status : </span>
              <span
                className={`px-2 py-1 bg-red-200 text-red-500 rounded-lg text-xs`}
              >
                unpaid
              </span>
            </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-2xl shadow-md px-10 py-8">
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-y-2">
              {/* header */}
              <div className="w-full p-4 text-sm bg-[#E7E7E7] flex items-center justify-between rounded-lg">
                <div className="flex items-center gap-x-6">
                  <span>#</span>
                  <span>Product</span>
                </div>
                <span className="pr-4">price</span>
              </div>
              {/* invoice item */}
              <div className="w-full flex flex-col gap-y-4 ">
                {[1, 2, 3].map((item, index) => (
                  <div
                    key={index}
                    className="w-full ring-2 ring-gray-300 flex items-center justify-between relative rounded-xl text-sm text-gray-800"
                  >
                    <div className="flex items-center gap-x-3 px-4 py-4 border-l-4 border-gray-300 rounded-t-lg rounded-b-lg">
                      <span>#{item}</span>
                      <span>Signaler subscription</span>
                    </div>
                    <div className="flex flex-col pr-4">
                      {item === 2 ? (
                        <div className="flex flex-col font-normal gap-y-1 items-center gap-x-4">
                          <span className="text-gray-700 text-sm">IRR 900</span>
                          <span className="text-xs line-through  text-gray-400">
                            IRR 999.999
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-x-2">
                          <span className="capitalize">IRR</span>
                          <span>999.9999</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BuyPlanById;

export async function getServerSideProps(ctx) {
  const { query } = ctx;
  // console.log(query.signalerId)
  return {
    props: {
      users: "",
    },
  };
}
