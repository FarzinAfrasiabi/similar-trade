import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";
import { Badge } from "@mui/material";

const MessageNotfication = () => {
  return (
    <Menu className="min-w-fit max-w-xs ">
      <MenuHandler>
        <IconButton variant="text" className="p-0 bg-transparent w-8 lg:w-10">
          <Badge
            variant="dot"
            color="error"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <ChatBubbleBottomCenterTextIcon
              className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600"
              strokeWidth={2}
            />
          </Badge>
        </IconButton>
      </MenuHandler>
      <MenuList className="space-y-2 p-2 max-w-xs w-full flex flex-col gap-y-2 overflow-hidden ">
        <div className="px-2 py-3 text-gray-800 font-semibold border-b-2 border-gray-400">
          Recent notification
        </div>
        {[1, 2, 3].map((_, index) => {
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
      </MenuList>
    </Menu>
  );
};

export default MessageNotfication;
