import ResetPassFrom from "@/components/Forms/resetPass";
import VerifyCodeForm from "@/components/verify/verifyFrom";
import RegisterLayout from "@/container/Register/RegisterLayout";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi2";

const ResetPass = () => {
  return (
    <RegisterLayout>
      <div className="flex flex-col  pt-10 pb-20 px-4 lg:pt-0 gap-y-8 lg:gap-y-2 w-full max-w-lg">
        <div className="lg:hidden  w-full flex items-center justify-center">
          <Image
            src={"/images/forms/reset_pass.svg"}
            width={250}
            height={250}
            alt="verify_pic"
            className="max-w-sm object-contain"
          />
        </div>
        <Typography className="p-4 text-left" variant="h4">
          New Password
        </Typography>

        <div className="flex flex-col gap-y-5 rounded-lg shadow-md bg-white px-6 py-8 max-w-lg w-full">
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
            {/* <Typography variant="h3">Please check your email!</Typography> */}
            <Typography sx={{ color: "text.secondary" }}>
              Please Enter the new Password
            </Typography>
          </div>
          <ResetPassFrom />
        </div>
      </div>
    </RegisterLayout>
  );
};

export default ResetPass;
