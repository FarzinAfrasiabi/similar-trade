import PaymentAccountForm from "@/components/Forms/paymentAccountForm";
import InvoiceITem from "@/components/invoice/invoiceITem";
import InvoiceTotal from "@/components/invoice/invoiceTotal";
import Layout from "@/container/layout";
import { calcDate } from "@/utils/Date";
import { Button, Checkbox, Input, Typography } from "@material-tailwind/react";
import { useRouter } from "next/router";

const BuyPlanById = () => {
  const router = useRouter();
  const { query } = useRouter();
  return (
    <Layout>
      <div className="w-full flex flex-col gap-y-8">
        {/* invoice data */}
        <div className="w-full container flex flex-col gap-2 md:flex-row justify-between">
          <div className="flex-col gap-y-4">
            <h1 className="font-semibold">Hello , {query.name}</h1>
            <p className="text-sm text-gray-500 max-w-3xl px-2">
              Please find below a cost-breakdown for the recent work completed.
              Please make payment at your earliest convenience, and do not
              hesitate to contact me with any questions.
            </p>
          </div>
          {/* invoice Data */}
          <div className="flex flex-col gap-y-2 w-full max-w-xs text-gray-800">
            <h1 className="text-lg capitalize ">invoice</h1>
            <div className=" flex items-center gap-x-8 font-normal">
              {/* payment Date */}
              <span className="text-sm ">Payment Date : </span>
              <span className="text-sm text-gray-600">
                {calcDate(new Date().toISOString())}
              </span>
            </div>
            <div className=" flex items-center gap-x-8 font-normal">
              {/* payment Id */}
              <span className="text-sm ">Payment Id : </span>
              <span className="text-sm text-gray-600">#245611445674</span>
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
        <div className="w-full bg-white rounded-2xl shadow-md px-2 md:px-10 py-8">
          <div className="grid grid-cols-12 lg:gap-x-10 gap-y-6">
            {/* invoice */}
            <div className="col-span-12 lg:col-span-6 xl:col-span-4 flex flex-col gap-y-2 h-full justify-between min-h-[50vh]  ">
              <div className="flex flex-col ">
                {/* header */}
                <div className="w-full p-4 text-xs md:text-sm bg-[#E7E7E7] flex items-center justify-between rounded-lg">
                  <div className="flex items-center gap-x-6">
                    <span>#</span>
                    <span>Product</span>
                  </div>
                  <span className="pr-4">price</span>
                </div>
                {/* invoice item */}
                <div className="w-full flex flex-col gap-y-4 py-2">
                  {[1, 2, 3].map((item, index) => (
                    <InvoiceITem key={index} item={item} />
                  ))}
                </div>
                {/* invoice totla */}
                <InvoiceTotal />
              </div>
              {/* submit btn */}
              <div className="w-full ">
                <Button className="w-full bg-blue-700">
                  Enter account informations
                </Button>
              </div>
            </div>
            {/* account information form  */}
            <div className="col-span-12 lg:col-span-6 xl:col-span-4 flex flex-col gap-y-2 h-full justify-between  lg:px-8 lg:border-l-2 border-gray-300 ">
              <div className="flex flex-col ">
                {/* header */}
                <div className="w-full text-lg   text-center flex items-center justify-between rounded-lg">
                  Account informations
                </div>
                {/* account information form */}
                <PaymentAccountForm />
              </div>
              {/* submit btn */}
            </div>
            {/* payment method */}
            <div className="col-span-12 lg:col-span-12 xl:col-span-4 flex flex-col gap-y-2 h-full justify-between  lg:px-8 xl:border-l-2 border-gray-300 ">
              <div className="flex flex-col ">
                {/* header */}
                <div className="w-full text-lg   text-center flex items-center justify-between rounded-lg">
                  Payment Method
                </div>
                <div className="flex flex-col gap-y-4 pt-2">
                  {[1, 2, 3, 4, 5].map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full py-10 bg-white shadow-md ring-1 ring-gray-300 rounded-xl "
                      ></div>
                    );
                  })}
                </div>
              </div>
              {/* submit btn */}
              <div className="w-full ">
                <Button className="w-full bg-blue-700">Checkout</Button>
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
