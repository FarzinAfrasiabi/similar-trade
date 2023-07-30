import EditProfile from "@/components/profile/editProfile";
import Layout from "@/container/layout";
import { Button, Input } from "@material-tailwind/react";

import { TextField } from "@mui/material";


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

const ProfileUserById = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-4 gap-x-6">
        {/* profile */}
        <EditProfile />
        {/* change Email or mobil */}
        <div className="flex flex-col gap-y-4">
          <div className="w-full flex flex-col gap-y-6 rounded-xl shadow-lg bg-white pb-6">
            {/* header */}
            <div className="py-5 px-6 flex items-center border-b border-b-gray-400 ">
              <span className=" font-medium">Change Email or Mobile</span>
            </div>
            {/* content */}
            <form className="flex flex-col gap-y-4 px-4">
              <div className="w-full flex items-center gap-x-5 ">
                <span className="text-sm w-full max-w-[150px]">
                  New Email address
                </span>
                <Input label="new email" size="small" sx={{ flex: "1 " }} />
              </div>
              <div className="w-full flex items-center gap-x-5 ">
                <span className="text-sm w-full max-w-[150px]">
                  New Mobile number
                </span>
                <Input label="new mobile" size="small" sx={{ flex: "1 " }} />
              </div>
              <div className="flex items-center justify-end">
                <Button className="font-normal">Save Change</Button>
              </div>
            </form>
          </div>
          <div className="w-full flex flex-col gap-y-6 rounded-xl shadow-lg bg-white pb-6">
            {/* header */}
            <div className="py-5 px-6 flex items-center border-b border-b-gray-400 ">
              <span className=" font-medium">Change Email or Mobile</span>
            </div>
            {/* content */}
            <form className="flex flex-col gap-y-4 px-4">
              <div className="w-full flex items-center gap-x-5 ">
                <span className="text-sm w-full max-w-[150px]">
                  Change password
                </span>
                <Input
                  label="current password"
                  type="password"
                  size="small"
                  sx={{ flex: "1 " }}
                />{" "}
              </div>
              <div className="w-full flex items-center gap-x-5 ">
                <span className="text-sm w-full max-w-[150px]">
                  New password
                </span>
                <Input
                  label="new password"
                  type="password"
                  size="small"
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
                  size="small"
                  sx={{ flex: "1 " }}
                />
              </div>
              <div className="flex items-center justify-end">
                <Button className="font-normal">Save Change</Button>
              </div>
            </form>
          </div>
        </div>
        {/* Notification  setting */}
      </div>
    </Layout>
  );
};

export default ProfileUserById;
