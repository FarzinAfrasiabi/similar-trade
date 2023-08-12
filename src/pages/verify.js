import VerifyCodeForm from "@/components/verify/verifyFrom";
import RegisterLayout from "@/container/Register/RegisterLayout";
import { Typography } from "@material-tailwind/react";

const VerifyPage = () => {
  return (
    <RegisterLayout>
      <div className="flex flex-col gap-y-5 rounded-lg shadow-md bg-white px-6 py-8 ">
        <div className="max-w-md flex flex-col gap-y-4">
          <Typography variant="h3" >
            Please check your email!
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            We have emailed a 6-digit confirmation code to acb@domain, please
            enter the code in below box to verify your email.
          </Typography>
        </div>
        <VerifyCodeForm />
      </div>
    </RegisterLayout>
  );
};

export default VerifyPage;
