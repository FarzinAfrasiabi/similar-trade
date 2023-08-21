import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";
import { Badge, Tooltip } from "@mui/material";
import Link from "next/link";

const MessageNotfication = () => {
  return (
    <Link href={"/chats"}>
      <Tooltip title="Chat page">
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
      </Tooltip>
    </Link>
  );
};

export default MessageNotfication;
