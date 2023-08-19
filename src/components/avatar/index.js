import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import {
  Cog6ToothIcon,
  PowerIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { useRouter } from "next/router";

import { BiUser } from "react-icons/bi";

const profileMenuItems = [
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
    path: "/Profile/admin/123",
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
    path: "/help",
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];
export default function AvatarInf() {
  const router = useRouter();
  const isUserLogin = false;
  return (
    <Menu>
      <MenuHandler>
        {isUserLogin ? (
          <Avatar
            variant="circular"
            alt="candice wu"
            className="cursor-pointer"
            src="/images/avatar/face-2.jpg"
            size="sm"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center cursor-pointer">
            <BiUser className="text-2xl text-gray-700" />
          </div>
        )}
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, path }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-400" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="div"
                onClick={() => router.push(path ? path : "/")}
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
