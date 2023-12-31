import VerifyCodeForm from "@/components/verify/verifyFrom";
import RegisterLayout from "@/container/Register/RegisterLayout";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi2";

const VerifyPage = () => {
  return (
    <RegisterLayout>
      <div className="flex flex-col  lg:items-start pt-10 pb-20 px-4 lg:pt-0 gap-y-8 lg:gap-y-2">
        <div className="lg:hidden  w-full flex items-center justify-center">
          <Image
            src={"/images/forms/otp_1.svg"}
            width={300}
            height={300}
            alt="verify_pic"
            className="max-w-sm object-contain"
          />
        </div>
        <Typography className="p-4 text-left" variant="h2">
          Verify
        </Typography>

        <div className="flex flex-col gap-y-5 rounded-lg shadow-md bg-white px-6 py-8 ">
          <div className="flex items-center ">
            <Link
              href={"/login"}
              className="flex items-center justify-center gap-x-2 group py-2 px-4 text-blue-500 text-sm hover:bg-blue-50  hover:text-blue-500 transition-all ease-in duration-200 rounded-lg"
            >
              <HiArrowLeft className="group-hover:-translate-x-1 text-sm transition-all ease-out duration-100" />
              Back
            </Link>
          </div>
          <div className="max-w-md flex flex-col gap-y-4">
            <Typography variant="h3">Please check your email!</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              We have emailed a 6-digit confirmation code to acb@domain, please
              enter the code in below box to verify your email.
            </Typography>
          </div>
          <VerifyCodeForm />
        </div>
      </div>
    </RegisterLayout>
  );
};

export default VerifyPage;
