import { Button, Input } from "@material-tailwind/react";
import { useFormik } from "formik";

const ChangeEmail = () => {
  return (
    <>
      <NewEmail />
      <ChangePassword />
    </>
  );
};

export default ChangeEmail;

const NewEmail = () => {
  const initialValues = {
    newMail: "",
    newPhone: "",
    mobileConfirm: "",
  };
  const onSubmit = (values) => console.log(values);
  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  return (
    <div className="w-full flex flex-col gap-y-6 rounded-xl shadow-lg bg-white pb-6">
      {/* header */}
      <div className="py-5 px-6 flex items-center border-b border-b-gray-400 ">
        <span className=" font-medium">Change Email or Mobile</span>
      </div>
      {/* content */}
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-y-4 px-4"
      >
        <div className="w-full flex items-center gap-x-5 ">
          <span className="text-sm w-full max-w-[150px]">
            New Email address
          </span>
          <Input
            label="new email"
            size="md"
            {...formik.getFieldProps("newMail")}
          />
        </div>
        <div className="w-full flex items-center gap-x-5 ">
          <span className="text-sm w-full max-w-[150px]">
            New Mobile number
          </span>
          <Input
            label="new mobile"
            size="md"
            {...formik.getFieldProps("newPhone")}
          />
        </div>
        <div className="w-full flex items-center gap-x-5">
          <span className="text-sm w-full max-w-[150px]">Confirm Mobile</span>
          <div className="relative flex w-full ">
            <Input
              type="text"
              label="confirm Mobile"
              className="pr-20"
              {...formik.getFieldProps("mobileConfirm")}
              maxLength={11}
            />
            <Button
              size="sm"
              color={"blue"}
              // disabled={!email}
              className="!absolute right-1 top-1 rounded lg:px-2 lg:text-xs xl:px-6 "
            >
              Confirm
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <Button type="submit" size="sm" className="font-normal">
            Save Change
          </Button>
        </div>
      </form>
    </div>
  );
};

const ChangePassword = () => {
  const initialValues = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };
  const onSubmit = (values) => console.log(values);
  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  return (
    <div className="w-full flex flex-col gap-y-6 rounded-xl shadow-lg bg-white pb-6">
      {/* header */}
      <div className="py-5 px-6 flex items-center border-b border-b-gray-400 ">
        <span className=" font-medium">Change password</span>
      </div>
      {/* content */}
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-y-4 px-4"
      >
        <div className="w-full flex items-center gap-x-5 ">
          <span className="text-sm w-full max-w-[150px]">Change password</span>
          <Input
            label="current password"
            type="password"
            autoComplete="on"
            size="md"
            {...formik.getFieldProps("currentPassword")}
            sx={{ flex: "1 " }}
          />{" "}
        </div>
        <div className="w-full flex items-center gap-x-5 ">
          <span className="text-sm w-full max-w-[150px]">New password</span>
          <Input
            label="new password"
            type="password"
            autoComplete="on"
            size="md"
            {...formik.getFieldProps("newPassword")}
            sx={{ flex: "1 " }}
          />
        </div>
        <div className="w-full flex items-center gap-x-5 ">
          <span className="text-sm w-full max-w-[150px]">
            Confirm new password
          </span>
          <Input
            label="confirm new password"
            type="password"
            autoComplete="on"
            size="md"
            {...formik.getFieldProps("confirmPassword")}
            sx={{ flex: "1 " }}
          />
        </div>
        <div className="flex items-center justify-end">
          <Button type="submit" size="sm" className="font-normal">
            Save Change
          </Button>
        </div>
      </form>
    </div>
  );
};
