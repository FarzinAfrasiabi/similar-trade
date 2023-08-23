import Layout from "@/container/layout";
import { Input, Option, Select } from "@material-tailwind/react";
import { MenuItem, Switch } from "@mui/material";

const Commission = [
  "1:10",
  "1:50",
  "1:100",
  "1:200",
  "1:300",
  "1:400",
  "1:500",
  "1:1000",
];

const SubscribePrice = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-16">
        <SubScriptionForm />
        <SubScriptionForm />
      </div>
    </Layout>
  );
};

export default SubscribePrice;

function HeaderSub({ title }) {
  return (
    <div className="py-4 px-6 flex items-center justify-between border-b border-b-gray-300">
      <span className="text-lg font-bold">{title}</span>
      {/* handle change with id */}
      <Switch />
    </div>
  );
}

function SubScriptionForm() {
  return (
    <div className=" bg-white rounded-xl shadow-md text-gray-800">
      {/* header */}
      <HeaderSub title="Free Subscription" />
      <div className="flex flex-col gap-y-4 px-6 py-4 border-b border-b-gray-300">
        <div className="flex flex-col lg:flex-row gap-y-4 gap-x-4 ">
          <Select
            onChange={(e) => console.log(e)}
            label="Subscription period"
            // defaultValue={"month"}
          >
            <Option value="month">Month</Option>
            <Option value="1" disabled>{""}</Option>
          </Select>
          <Input label="Number of the Week" />
        </div>
        <div className="flex flex-col lg:flex-row gap-y-4 gap-x-4 ">
          <Input label="Subscription amount (IRR)" />
          <Input label="Subscription amount (USD)" />
        </div>
      </div>
      <HeaderSub title={"Commission from profit"} />
      <div className="flex flex-col gap-y-4 px-6 py-4 border-b border-b-gray-300">
        <div className="flex flex-col lg:flex-row gap-y-4 gap-x-4 ">
          <Select label="Commission period">
            <Option value="week">Week</Option>
            <Option value="month">month</Option>
          </Select>
          <Input label="Commission percentage (%)" />
        </div>
        <div className="flex flex-col lg:flex-row gap-y-4 gap-x-4 ">
          <Select label="Allowed delay time (day)">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <Option key={index} value={`${item}`}>
                {item}
              </Option>
            ))}
          </Select>
        </div>
      </div>
      <HeaderSub title={"Minimum account balance"} />
      <div className="flex flex-col gap-y-4 px-6 py-4 border-b border-b-gray-300">
        <div className="flex flex-col lg:flex-row gap-y-4 gap-x-4 ">
          <Input label="Minimum account balance (USD,EUR,GBP)" />
        </div>
      </div>
      <HeaderSub title={"Minimum account levrage"} />
      <div className="flex flex-col gap-y-4 px-6 py-4 border-b border-b-gray-300">
        <div className="flex flex-col lg:flex-row gap-y-4 gap-x-4 ">
          <Select label="Commission period">
            {Commission.map((item, index) => (
              <Option value={`${item}`} key={index}>
                {item}
              </Option>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
}
