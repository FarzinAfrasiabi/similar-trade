import { Button, Input } from "@material-tailwind/react";
import Image from "next/image";
import { HiCamera } from "react-icons/hi2";

const EditProfile = () => {
  return (
    <div className="flex flex-col gap-y-2 bg-white rounded-md shadow-lg  ">
      {/* header */}
      <div className="w-full h-16 flex items-center justify-between px-6 bg-hero-pattern bg-center bg-no-repeat bg-cover relative  rounded-t-xl">
        <h2 className="text-gray-100 text-xl">Profile</h2>
        <div className="absolute right-2 top-4  w-44 h-44 rounded-full bg-gray-300 flex items-center justify-center">
          <Image
            src={"/images/avatar/PP1.png"}
            alt="profile"
            width={176}
            height={176}
            className="w-full h-full object-cover"
          />
          <button className="w-10 h-10 rounded-full bg-gray-200 absolute bottom-1 right-2 z-10 flex items-center justify-center">
            <HiCamera className="text-2xl text-gray-800" />
          </button>
        </div>
      </div>
      {/* content  */}
      <form className="w-full flex flex-col gap-y-6 px-4 pt-4 h-full justify-between">
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col w-[60%] gap-y-4">
            <Input label="first name" />
            <Input label="last Name" />
          </div>
          <div className="flex gap-x-4 items-center w-full ">
            <Input label="user name" />
            <Input label="email" />
          </div>
          <div className="flex gap-x-4 items-center w-full ">
            {/* user select country components */}
            <Input label="select country" />
            <Input label="phone" type="tel" />
          </div>
          <div className="flex gap-x-4 items-center w-full ">
            {/* user select country components */}
            <Input label="telegram Id" />
            <Input label="Change Password" type="password" />
          </div>
        </div>
        <div className="flex items-center justify-end pt-6 flex-1">
          <Button className="font-normal" type="button">
            Edit Profile
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
