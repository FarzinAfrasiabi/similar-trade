import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
const MobileProducts = () => {
  return (
    <Carousel className="rounded-x bg-[#F5B544] p-3 lg:p-6 bg-opacity-20 lg:hidden">
      <div className="w-full rounded-lg ">
        <div className="w-full flex items-center justify-between">
          <div className="flex flex-col gap-y-6 max-w-md">
            <h1 className="text-slate-700 text-lg font-semibold">
              Your Product Overview
            </h1>
            <span className="text-sm text-slate-500 ">
              Check your product statistics daily. See sales, ratings, comments
              and updates here. You can edit and manage everything in the
              options panel. Get more sales with the a better marketing
              strategy.
            </span>
          </div>
          {/* overview image */}
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
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
    </Carousel>
  );
};

export default MobileProducts;
