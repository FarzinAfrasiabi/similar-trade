import Inputs from "@/components/Forms/Inputs";
import Links from "@/components/Forms/Links";
import Buttons from "@/components/Forms/button";
import RegisterLayout from "@/container/Register/RegisterLayout";
import { Checkbox } from "@mui/material";

const Login = () => {
  return (
    <RegisterLayout>
      <div className="p-4 md:max-w-sm lg:max-w-lg w-full flex flex-col gap-y-4">
        <h1 className="text-2xl lg:text-4xl text-slate-900">Login</h1>
        <form className="bg-white w-full p-4 flex flex-col gap-y-6 shadow-lg rounded-lg ">
          <Inputs label={"Youre Email / UserName"} />
          <Inputs type="password" label={"Password"} />
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center">
              {/* checkbox */}
              <Checkbox />
              <span className="text-sm">Rememeber Me</span>
            </div>
            <Links href={"/forgotpass"} text={"Forgot Password"} />
          </div>
          <div className="flex flex-col gap-y-4 pt-10 items-center">
            <Buttons type="submit">Login</Buttons>
            <div className="flex items-center text-sm gap-x-1">
              Not a memebr?
              <Links
                href={"/signin"}
                className="text-blue-600 text-sm hover:underline hover:underline-offset-2"
                text={"Register now"}
              />
            </div>
          </div>
        </form>
      </div>
    </RegisterLayout>
  );
};

export default Login;
/**
 *
 */
