import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Button, Input } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SearchTrading = ({ title, onSubmit }) => {
  const [value, setValue] = useState("");
  const [disable, setDisable] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const { query } = router;
    if (query.getSignalById) {
      setDisable(true);
      setValue(query.getSignalById)
    }
  }, [router]);
  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  const submitHandler = (e) => {
    console.log("clicked");
    e.preventDefault();
    router.push(`/getsignal/${value}`);
  };
  return (
    <div className="col-span-12 lg:col-span-6 bg-white shadow-lg rounded-xl flex flex-col justify-between p-6 min-h-[200px] h-full">
      {/* header */}
      <div className="text-lg text-gray-800 capitalize font-bold">{title}</div>
      <div className="flex flex-col gap-y-2">
        <span className="text-gray-600 text-sm">
          Enter signaler ID (eg : A1b2c3d)
        </span>
        <form onSubmit={submitHandler}>
          <div className="flex flex-col md:flex-row  md:items-center gap-x-2">
            {/* <span className="text-gray-800 font-semibold text-xs xl:text-sm">ID : </span> */}
            <div className="flex-1">
              <Input
                value={value}
                onChange={changeHandler}
                label="signaler ID"
                disabled={ disable}
              />
            </div>
            <div>
              <Button disabled={disable } type="submit" className="bg-[#0062FF] w-full">
                <MagnifyingGlassIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchTrading;
