import { useFormik } from "formik";
import Inputs from "./Inputs";
import Buttons from "./button";
import * as Yup from "yup";
const initialValues = {
  newPassword: "",
  newPassword2: "",
};
const RegisterSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required("Please enter a password")
    .min(12, "Password too short")
    .matches(/[a-z]+/, "One lowercase character")
    .matches(/[A-Z]+/, "One uppercase character")
    .matches(/[@$!%*#?&]+/, "One special character")
    .matches(/\d+/, "One number"),
  newPassword2: Yup.string()
    .required()
    .oneOf([Yup.ref("password1")], "Passwords does not match"),
});
const ResetPassFrom = () => {
  const onSubmit = (values) => {
    console.log("run");
    console.log(values);
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: RegisterSchema,
  });
  return (
    <form className="px-4 w-full" onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-y-4">
        <Inputs
          type="password"
          label={"new Password"}
          formik={formik}
          name={"newPassword"}
          isSmall
        />
        <Inputs
          type="password"
          label={"Confirm new Password"}
          formik={formik}
          name={"newPassword2"}
          isSmall
        />
      </div>
      <Buttons type="submit">Set New Password</Buttons>
    </form>
  );
};

export default ResetPassFrom;
