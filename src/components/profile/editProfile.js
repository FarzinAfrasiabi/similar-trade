import { Button, Input } from "@material-tailwind/react";
import { useFormik } from "formik";
import Image from "next/image";
import { useState } from "react";
import { HiCamera } from "react-icons/hi2";
import CountrySelect from "../Forms/CountrySelect";

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

const EditProfile = () => {
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
    // validationSchema: signInValidationSchema,
  });
  return (
    <div className="flex flex-col gap-y-2 bg-white rounded-md shadow-lg py-2">
      {/* header */}
      <div className="w-full h-16 flex items-center justify-between px-6 bg-hero-pattern bg-center bg-no-repeat bg-cover relative  rounded-t-xl">
        <h2 className="text-gray-100 text-xl">Profile</h2>
        <div className="absolute right-2 top-4 w-28 h-28  md:w-44 md:h-44 rounded-full bg-gray-300 flex items-center justify-center ">
          <Image
            src={"/images/avatar/PP1.png"}
            alt="profile"
            width={176}
            height={176}
            className="w-full h-full object-cover"
          />
          <button className="w-7 h-7  lg:w-10 lg:h-10 rounded-full bg-gray-200 absolute bottom-1 right-2 z-10 flex items-center justify-center">
            <HiCamera className="text-lg lg:text-2xl text-gray-800" />
          </button>
        </div>
      </div>
      {/* content  */}
      <form className="w-full flex flex-col gap-y-6 px-4  pt-4 h-full justify-between">
        <div className="flex flex-col gap-y-6 h-full ">
          <div className="flex flex-col w-[60%] gap-y-4">
            <Input
              size="lg"
              label="first name"
              className="w-[90%] md:w-[100%]"
              labelProps={{ className: "w-[90%] md:w-[100%]" }}
            />
            <Input
              size="lg"
              label="last Name"
              className="w-[90%] md:w-[100%]"
              labelProps={{ className: "w-[90%] md:w-[100%]" }}
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-y-4 gap-x-4 items-center w-full ">
            <Input size="lg" label="user name" />
            <Input size="lg" label="email" />
          </div>
          <div className="flex flex-col lg:flex-row gap-y-4 gap-x-4 items-center w-full ">
            {/* user select country components */}
            <CountrySelect
              formik={formik}
              onChnage={changeHandler}
              value={selectCountryId}
              isSmall={true}
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-y-4 gap-x-4 items-center w-full ">
            {/* user select country components */}
            <Input size="lg" label="telegram Id" />
            <Input size="lg" label="Change Password" type="password"  autoComplete="on"/>
          </div>
        </div>
        <div className="flex items-center justify-end pb-3 flex-1">
          <Button className="font-normal" type="button">
            Edit Profile
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;