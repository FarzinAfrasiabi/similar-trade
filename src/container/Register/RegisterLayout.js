import PublicLogo from "@/components/icons/logo/PublicLogo";
import BrandIcon from "@/components/icons/logo/brandLogo";
import Link from "next/link";

const RegisterLayout = ({ children }) => {
  return (
    <div className="w-full  min-h-screen flex flex-col bg-[#FAFAFB] lg:overflow-hidden">
      <div className=" py-3 sticky top-0 z-50 backdrop-blur-xl blur-0 opacity-100 lg:hidden bg-white shadow-lg border-b border-gray-300">
        <div className="w-full flex items-center justify-center gap-x-3">
          {/* Brand */}
          <Link className="flex items-center gap-x-2" href={"/"}>
            <BrandIcon />
          <span className="text-slate-900">Similar Trade</span>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-12 flex-1  ">
        {/* mobile header */}

        <div className="lg:col-span-3  hidden lg:flex flex-col justify-between p-10  bg-blue-600 relative">
          <div className="flex flex-col mt-10  gap-y-8">
            <div className="flex items-center gap-x-2">
              <PublicLogo />
              <span className="text-white md:text-xl xl:text-3xl font-semibold">
                Similar Trade
              </span>
            </div>
            <div className="">
              <h1 className="md:text-xl lg:text-2xl xl:text-4xl tracking-wide text-white">
                The new generation of signal channel
              </h1>
            </div>
          </div>
          <div className="absolute hidden lg:block lg:flex-1 w-[100vw] -bottom-[22vw] -left-[9vw]  z-0 ">
            <div className="bg-[url(/images/logo/login_signup.svg)] bg-center w-[50vw]  h-[60vw] bg-contain bg-no-repeat  "></div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-9 z-10  ">
          <div className="w-full lg:h-screen flex items-center justify-center ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLayout;
