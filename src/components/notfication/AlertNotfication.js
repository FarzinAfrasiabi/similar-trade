import { BellIcon } from "@heroicons/react/24/outline";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
  Avatar,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ClockIcon } from "@heroicons/react/24/outline";
import { Badge } from "@mui/material";
import DefaultAvatar from "../avatar/defaultavatar";

const AlertNotfication = () => {
  const userLogin = false;
  return (
    <Menu >
      <MenuHandler>
        <IconButton variant="text" className="bg-transparent w-8 lg:w-10">
          <Badge
            variant="dot"
            color="error"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <BellIcon
              className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600"
              strokeWidth={2}
            />
          </Badge>
        </IconButton>
      </MenuHandler>

      <MenuList className="space-y-2">
        <MenuItem>
          <div className="px-2 py-3 text-gray-800 font-semibold border-b-2 border-gray-400">
            Recent notification
          </div>
        </MenuItem>
        <div className="space-y-3 px-2 pt-2 pb-4 h-full max-h-[400px] overflow-y-auto">
          {[1, 2, 3 ,4,3,5,5,].map((_, index) => {
            return (
              <MenuItem
                key={index}
                className="flex items-center gap-x-2 border-l-4 border-[#FFCE73] px-6 py-4 ring-1 ring-gray-400"
              >
                <div className="flex flex-col gap-y pr-2 border-r-2 ">
                  <span className="text-gray-800">09:00 Am</span>
                  <span className="text-xs text-gray-500">45 min ago</span>
                </div>
                <div className="flex-1 flex-col gap-y-2">
                  <span className="text-gray-800">Glenn Greer</span>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 text-xs">Commented on</span>
                    <span className="text-gray-700 text-xs">Commented on</span>
                  </div>
                </div>
              </MenuItem>
            );
          })}
        </div>
        <MenuItem className="border-t border-gray-300">
          <Button fullWidth>Read All Notification</Button>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AlertNotfication;
