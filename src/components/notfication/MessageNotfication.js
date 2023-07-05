import { ChatBubbleBottomCenterTextIcon  } from "@heroicons/react/24/outline";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { Badge } from "@mui/material";

const MessageNotfication = () => {
  return (
    <Menu>
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
      <MenuList className="space-y-2">
        {[1, 2, 3].map((_, index) => {
          return (
            <MenuItem key={index} className="flex items-center gap-x-2">
              <Avatar
                variant="circular"
                alt="candice wu"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              />
              <div className="flex flex-col gap-1">
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  <span className="font-medium text-blue-gray-900">Wu</span>{" "}
                  send you a message
                </Typography>
                <Typography
                  variant="small"
                  className="flex items-center gap-1 text-xs text-gray-600"
                >
                  {/* <ClockIcon className="h-3 w-3" /> */}
                  13 minutes ago
                </Typography>
              </div>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default MessageNotfication;
