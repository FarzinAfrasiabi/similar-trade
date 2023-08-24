import Inputs from "@/components/Forms/Inputs";
import Links from "@/components/Forms/Links";
import Buttons from "@/components/Forms/button";
import Password from "@/components/Forms/password";
import RegisterLayout from "@/container/Register/RegisterLayout";
import { Checkbox } from "@mui/material";
import { useFormik } from "formik";
import loginValidationSchema from "@/validation/loginValidation";
import Image from "next/image";
const initialValues = {
  email: "",
  password: "",
};
const Login = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: loginValidationSchema,
  });
  return (
    <RegisterLayout>
      <div className="p-4 md:max-w-sm lg:max-w-lg w-full flex flex-col gap-y-4">
      <div className="lg:hidden  w-full flex items-center justify-center">
          <Image
            src={"/images/forms/login.svg"}
            width={350}
            height={350}
            alt="verify_pic"
            className="max-w-sm object-contain"
          />
        </div>
        <h1 className="text-2xl lg:text-4xl text-slate-900 text-center lg:text-start">
          Login
        </h1>
        <p className="text-sm block lg:hidden text-gray-500 text-center">
          Just sign in if you have an account in here. Enjoy our Website
        </p>
        <form
          className="bg-white w-full p-4 flex flex-col gap-y-6 shadow-lg rounded-lg "
          onSubmit={formik.handleSubmit}
        >
          <Inputs
            formik={formik}
            name={"email"}
            label={"Youre Email / UserName"}
            isSmall
          />
          <Password
            formik={formik}
            name={"password"}
            label={"Enter Password"}
            isSmall
          />
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
