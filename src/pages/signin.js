import Inputs from "@/components/Forms/Inputs";
import Links from "@/components/Forms/Links";
import Selected from "@/components/Forms/Select";
import Buttons from "@/components/Forms/button";
import RegisterLayout from "@/container/Register/RegisterLayout";
import { Checkbox } from "@mui/material";

const RegisterAsSelected = ["Signaler", "Signal Reciver"];
const CountryAsSelected = ["Usa", "Uk ", "Germany"];
const Signin = () => {
  return (
    <RegisterLayout>
      <div className="p-4 md:max-w-sm lg:max-w-lg w-full flex flex-col gap-y-4">
        <h1 className="text-2xl lg:text-4xl text-slate-900">Register</h1>
        <form className="bg-white w-full p-4 flex flex-col gap-y-6 shadow-lg rounded-lg ">
          {/* Register as */}
          <div className="w-full">
            <Selected label={"Register as"} seleceted={RegisterAsSelected} />
          </div>
          <div className="w-full flex items-center gap-x-4">
            <Inputs label={"First Name"} />
            <Inputs label={"Last Name"} />
          </div>
          <div className="w-full flex items-center gap-x-4">
            <Inputs label={"UserName"} />
            <Inputs label={"Mail Address"} />
          </div>
          <div className="w-full flex items-center gap-x-4">
            <Selected label={"Your Country"} seleceted={CountryAsSelected} />
            <Inputs label={"phone Number"} />
          </div>
          <div className="flex flex-col gap-y-1">
            <div className="w-full flex items-center gap-x-4">
              <Inputs
                type="password"
                label={"Password"}
                seleceted={CountryAsSelected}
              />
              <Inputs type="password" label={"Confrim Password"} />
              {/* text */}
            </div>
            <span className="text-xs px-2 text-gray-400">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </span>
          </div>
          <div className="flex flex-col ite gap-y-6 pt-14">
            <div className="flex items-center gap-x-2">
              <Checkbox />
              <span className="text-sm ">
                I aggre Square s Cookie and Privacy Policy.
              </span>
            </div>
            <Buttons type="submit">Register</Buttons>
            <div className="flex items-center text-center w-full justify-center text-sm gap-x-1">
              Already have an account?
              <Links
                href={"/login"}
                className="text-blue-600 text-sm hover:underline hover:underline-offset-2"
                text={"Login"}
              />
            </div>
          </div>
        </form>
      </div>
    </RegisterLayout>
  );
};

export default Signin;
