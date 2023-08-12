import Inputs from "@/components/Forms/Inputs";
import Buttons from "@/components/Forms/button";
import RegisterLayout from "@/container/Register/RegisterLayout";
import { useFormik } from "formik";
const initialValues = {
  forgotPass: "",
};

const Forgot = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  const formik = useFormik({ initialValues, onSubmit });

  return (
    <RegisterLayout>
      <div className="p-4 md:max-w-sm lg:max-w-lg w-full flex flex-col gap-y-4">
        <h1 className="text-2xl lg:text-4xl text-slate-900">Forgot Password</h1>
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white w-full p-4 flex flex-col gap-y-6 shadow-lg rounded-lg "
        >
          <div className="w-full">
            <Inputs name={"forgotPass"}  formik={formik} label={"Enter Email or Phone"} />
          </div>
          <Buttons type="submit">Recover Password</Buttons>
        </form>
      </div>
    </RegisterLayout>
  );
};

export default Forgot;
