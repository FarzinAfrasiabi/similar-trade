import CountrySelect from "@/components/Forms/CountrySelect";
import FormPopUp from "@/components/Forms/FormPopup";
import Inputs from "@/components/Forms/Inputs";
import Links from "@/components/Forms/Links";
import Selected from "@/components/Forms/Select";
import Buttons from "@/components/Forms/button";
import Password from "@/components/Forms/password";
import RegisterLayout from "@/container/Register/RegisterLayout";
import { useState } from "react";
import { useFormik } from "formik";
import signInValidationSchema from "@/validation/formValidation";
import CheckBoxes from "@/components/Forms/checkbox";
import Image from "next/image";

const initialValues = {
  RegisterAs: "",
  name: "",
  lastName: "",
  userName: "",
  email: "",
  countryCode: "",
  phone: "",
  password: "",
  confirmPassword: "",
  AcceptSquare: false,
};

const RegisterAsSelected = ["Signaler", "Signal Reciver"];
const Signin = () => {
  const [selectCountryId, setSelectCountryId] = useState("");
  const [openPrivacypopup, setOpenPrivacyPopup] = useState(false);
  const changeHandler = (event) => {
    setSelectCountryId(event.target.value);
  };

  const onSubmit = (values) => {
    console.log(values);
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: signInValidationSchema,
  });

  return (
    <RegisterLayout>
      <div className="p-4 md:max-w-xl lg:max-w-lg w-full flex flex-col gap-y-4">
        <div className="lg:hidden  w-full flex items-center justify-center">
          <Image
            src={"/images/forms/register.svg"}
            width={350}
            height={350}
            alt="verify_pic"
            className="max-w-sm object-contain"
          />
        </div>
        <h1 className="text-2xl lg:text-4xl text-slate-900">Register</h1>
        <p className="text-sm block lg:hidden text-gray-500 text-center">
          Let’s Sign up first for enter into SimilarTrade Website
        </p>
        {openPrivacypopup && (
          <FormPopUp onClick={() => setOpenPrivacyPopup(false)} />
        )}
        <form
          className="bg-white w-full p-4 flex flex-col gap-y-6 shadow-lg rounded-lg "
          onSubmit={formik.handleSubmit}
        >
          {/* Register as */}
          <div className="w-full">
            <Selected
              formik={formik}
              name="RegisterAs"
              label={"Register as"}
              seleceted={RegisterAsSelected}
            />
          </div>
          {/* name and last name */}
          <div className="w-full flex flex-col lg:flex-row items-center gap-4">
            <Inputs name="name" formik={formik} label={"First Name"} />
            <Inputs name={"lastName"} formik={formik} label={"Last Name"} />
          </div>
          {/* userName and email */}
          <div className="w-full flex flex-col lg:flex-row items-center gap-4">
            <Inputs name={"userName"} formik={formik} label={"UserName"} />
            <Inputs
              name={"email"}
              formik={formik}
              type="email"
              label={"Mail Address"}
            />
          </div>
          {/* country coode */}
          <CountrySelect
            formik={formik}
            onChnage={changeHandler}
            value={selectCountryId}
          />
          {/* password */}
          <div className="flex flex-col gap-y-1">
            <div className="w-full flex flex-col lg:flex-row lg:items-center gap-4">
              <Password name={"password"} formik={formik} label={"Password"} />
              <Password
                name={"confirmPassword"}
                formik={formik}
                label={"Confrim Password"}
              />
              {/* text */}
            </div>
            <span className="text-xs px-2 text-gray-400">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </span>
          </div>
          <div className="flex flex-col ite gap-y-6 pt-14">
            <div className="flex items-center ">
              <CheckBoxes name={"AcceptSquare"} formik={formik} />
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
