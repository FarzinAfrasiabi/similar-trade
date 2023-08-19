import { BellIcon } from "@heroicons/react/24/outline";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { ClockIcon } from "@heroicons/react/24/outline";
import { Badge } from "@mui/material";
import DefaultAvatar from "../avatar/defaultavatar";

const AlertNotfication = () => {
  const userLogin = false;
  return (
    <Menu>
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
        {[1, 2, 3].map((_, index) => {
          return (
            <MenuItem key={index} className="flex items-center gap-x-2">
              {userLogin ? (
                <Avatar
                  variant="circular"
                  alt="candice wu"
                  src="/images/avatar/face-2.jpg"
                />
              ) : (
                <DefaultAvatar />
              )}
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
                  <ClockIcon className="h-3 w-3" />
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

export default AlertNotfication;
