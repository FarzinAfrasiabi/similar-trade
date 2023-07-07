import { Button, Input } from "@material-tailwind/react";

const SearchTrading = ({ title, onSubmit }) => {
  return (
    <div className="col-span-12 md:col-span-6 bg-white shadow-lg rounded-xl flex flex-col justify-between p-6 min-h-[200px] h-full">
      {/* header */}
      <div className="text-lg text-gray-800 capitalize font-bold">{title}</div>
      <div className="flex flex-col gap-y-2">
        <span className="text-gray-600 text-sm">
          Enter signaler ID (eg : A1b2c3d)
        </span>
        <form>
          <div className="flex flex-col md:flex-row items-center gap-x-4">
            <span className="text-gray-800 font-semibold ">Signaler ID : </span>
            <div className="flex-1">
              <Input label="signaler ID" />
            </div>
            <div>
              <Button className="bg-[#0062FF]">searcch</Button>
            </div>
            {/* <Input label="Signaler ID" /> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchTrading;
