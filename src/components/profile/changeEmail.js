import { Button, Input } from "@material-tailwind/react";

const ChangeEmail = () => {
  return (
    <>
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
              <Input label="new email" size="md" sx={{ flex: "1 " }} />
            </div>
            <div className="w-full flex items-center gap-x-5 ">
              <span className="text-sm w-full max-w-[150px]">
                New Mobile number
              </span>
              <Input label="new mobile" size="md" sx={{ flex: "1 " }} />
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
                autoComplete="on"
                size="md"
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
                sx={{ flex: "1 " }}
              />
            </div>
            <div className="flex items-center justify-end">
              <Button className="font-normal">Save Change</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChangeEmail;
