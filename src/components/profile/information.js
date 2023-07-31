import { Button, Input } from "@material-tailwind/react";

const InformationAccount = () => {
  return (
    <div className="flex flex-col gap-y-4 rounded-xl shadow-lg bg-white">
      <div className="w-full flex flex-col justify-between gap-y-6  pb-6 h-full">
        {/* header */}
        <div className="py-5 px-6 flex items-center border-b border-b-gray-400 ">
          <span className=" font-medium">Account informations</span>
        </div>
        {/* content */}
        <form className="flex flex-col justify-between h-full gap-y-4 px-4">
          <Input type="text" label="Broker name" />
          <Input type="text" label="Broker site link" />
          <Input type="text" label="Account type" />
          <Input type="text" label="Account currencye" />
          <Input type="text" label="Account name" />
          <Input type="text" label="Account number" />
          <Input type="text" label="Metatrader version" />
          <div className="flex items-center justify-end">
            <Button className="font-normal">Edit information</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InformationAccount;
