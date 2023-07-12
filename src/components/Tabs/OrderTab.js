import { Tabs, TabsHeader, TabsBody, Tab } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
const data = [
  {
    label: "Active Order",
    value: "activeOrder",
  },
  {
    label: "Closed Order",
    value: "closeOrder",
  },
  {
    label: "All Orders",
    value: "allOrder",
  },
];
const OrderTab = ({ children }) => {
  const [copied, setCopoied] = useState(false);
  const router = useRouter();
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`;
  const coppyHandler = () => {
    setCopoied(true);
    setTimeout(() => {
      setCopoied(false);
    }, 1000);
  };
  return (
    <Tabs value="activeOrder">
      <div className="w-full flex items-center justify-between">
      <div className="flex flex-col lg:flex-row gap-y-2 items-center gap-x-10">
        <TabsHeader className="w-[88vw] lg:w-96  flex-1">
          {data.map(({ label, value }) => (
            <Tab key={value} value={value} className="text-sm">
              {label}
            </Tab>
          ))}
        </TabsHeader>
        {/* share btn */}
        <CopyToClipboard text={url} onCopy={coppyHandler}>
          <button
            type="button"
            className={`px-6 py-2 ${copied ? 'text-green-400' : 'text-[#2772F0]'} bg-white rounded-xl text-sm shadow-md transition-all ease-out duration-150` }
          >
            {copied ? "coppy to clipBoard" : "Share trade history "}
          </button>
        </CopyToClipboard>
      </div>
      </div>
      <TabsBody
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        {children}
      </TabsBody>
    </Tabs>
  );
};

export default OrderTab;
