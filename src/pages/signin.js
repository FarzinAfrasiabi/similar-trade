import CountrySelect from "@/components/Forms/CountrySelect";
import FormPopUp from "@/components/Forms/FormPopup";
import Inputs from "@/components/Forms/Inputs";
import Links from "@/components/Forms/Links";
import Selected from "@/components/Forms/Select";
import Buttons from "@/components/Forms/button";
import Password from "@/components/Forms/password";
import RegisterLayout from "@/container/Register/RegisterLayout";
import { countryCode } from "@/utils/CountryCode";
import { Checkbox } from "@mui/material";
import { useState } from "react";

const RegisterAsSelected = ["Signaler", "Signal Reciver"];
const Signin = () => {
  const [selectCountryId, setSelectCountryId] = useState("");
  const [openPrivacypopup, setOpenPrivacyPopup] = useState(false);
  const changeHandler = (event) => {
    setSelectCountryId(event.target.value);
  };
  return (
    <RegisterLayout>
      <div className="p-4 md:max-w-sm lg:max-w-lg w-full flex flex-col gap-y-4">
        <h1 className="text-2xl lg:text-4xl text-slate-900">Register</h1>
        {openPrivacypopup && (
          <FormPopUp onClick={() => setOpenPrivacyPopup(false)} />
        )}
        <form className="bg-white w-full p-4 flex flex-col gap-y-6 shadow-lg rounded-lg ">
          {/* Register as */}
          <div className="w-full">
            <Selected label={"Register as"} seleceted={RegisterAsSelected} />
          </div>
          {/* name and last name */}
          <div className="w-full flex items-center gap-x-4">
            <Inputs label={"First Name"} />
            <Inputs label={"Last Name"} />
          </div>
          {/* userName and email */}
          <div className="w-full flex items-center gap-x-4">
            <Inputs label={"UserName"} />
            <Inputs type="email" label={"Mail Address"} />
          </div>
          {/* country coode */}
          <div className="w-full flex items-center gap-x-4">
            <CountrySelect onChnage={changeHandler} value={selectCountryId} />
            {/* <Inputs label={"phone Number"} /> */}
          </div>
          {/* password */}
          <div className="flex flex-col gap-y-1">
            <div className="w-full flex items-center gap-x-4">
              <Password label={"Password"} />
              <Password label={"Confrim Password"} />
              {/* text */}
            </div>
            <span className="text-xs px-2 text-gray-400">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </span>
          </div>
          <div className="flex flex-col ite gap-y-6 pt-14">
            <div className="flex items-center ">
              <Checkbox />
              <span className="text-sm ">
                I aggre Square s <b className="text-blue-600">Cookie</b> and{" "}
                <b
                  onClick={() => setOpenPrivacyPopup(true)}
                  className="text-blue-600 cursor-pointer"
                >
                  Privacy Policy
                </b>
                .
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
