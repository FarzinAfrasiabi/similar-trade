import Switch from "@mui/material/Switch";
import { HiDeviceTablet } from "react-icons/hi2";
import { RiGlobalLine } from "react-icons/ri";
const NotificationSetting = () => {
  return (
    <div className="w-full flex flex-col gap-y-6 rounded-xl shadow-lg bg-white pb-6">
      {/* header */}
      <div className="py-5 px-6 flex items-center border-b border-b-gray-400 ">
        <span className=" font-medium">Notification settings</span>
      </div>
      {/* content */}
      <div className="bg-[#F9FAFC] py-3 w-full flex items-center justify-between px-6 text-[#8F95B2]">
        <h1 className=" font-medium text-lg">Type</h1>
        <div className="flex items-center gap-x-10">
          <div className="flex flex-col items-center gap-y-1">
            <RiGlobalLine className="text-blue-gray-800 text-2xl" />
            <span className="text-sm">Browser</span>
          </div>
          <div className="flex flex-col items-center gap-y-1">
            <HiDeviceTablet  className="text-blue-gray-800 text-2xl"/>
            <span className="text-sm">Application</span>
          </div>
        </div>
      </div>
      {/* 1 */}
      <div className=" w-full flex items-center justify-between px-6">
        <h1 className="text-[#8F95B2] font-medium text-lg"> Open Order</h1>
        <div className="flex items-center gap-x-14">
          <Switch
            // checked={checked}
            onChange={(e) => console.log(e.target.checked)}
            inputProps={{ "aria-label": "controlled" }}
          />
          <Switch
            // checked={checked}
            onChange={(e) => console.log(e.target.checked)}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
      </div>

      {/* 2 */}
      <div className=" w-full flex items-center justify-between px-6">
        <h1 className="text-[#8F95B2] font-medium text-lg">Open Modify</h1>
        <div className="flex items-center gap-x-14">
          <Switch
            // checked={checked}
            onChange={(e) => console.log(e.target.checked)}
            inputProps={{ "aria-label": "controlled" }}
          />
          <Switch
            // checked={checked}
            onChange={(e) => console.log(e.target.checked)}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
      </div>
      {/* 3 */}
      <div className=" w-full flex items-center justify-between px-6">
        <h1 className="text-[#8F95B2] font-medium text-lg">Closed Order</h1>
        <div className="flex items-center gap-x-14">
          <Switch
            // checked={checked}
            onChange={(e) => console.log(e.target.checked)}
            inputProps={{ "aria-label": "controlled" }}
          />
          <Switch
            // checked={checked}
            onChange={(e) => console.log(e.target.checked)}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
      </div>
    </div>
  );
};

export default NotificationSetting;
