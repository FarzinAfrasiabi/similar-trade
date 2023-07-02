import Image from "next/image";
import Buttons from "../public/button";

const ProductOverview = () => {
  return (
    <div className="w-full rounded-lg bg-[#F5B544] p-3 lg:p-6 bg-opacity-20">
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col gap-y-6 max-w-md">
          <h1 className="text-slate-700 text-lg font-semibold">
            Your Product Overview
          </h1>
          <span className="text-sm text-slate-500 ">
            Check your product statistics daily. See sales, ratings, comments
            and updates here. You can edit and manage everything in the options
            panel. Get more sales with the a better marketing strategy.
          </span>
          <div className="flex items-center gap-x-4">
            <Buttons isRounded={true}>Sales Analytics</Buttons>
            <Buttons isRounded={true}>Marketing options</Buttons>
          </div>
        </div>
        {/* overview image */}
        <div className="flex items-center relative">
          <Image
            src={"/images/main/Products_overview.svg"}
            width={230}
            height={200}
            alt="overview_picture"
            priority={true}
            placeholder="empty"
            fill={false}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
