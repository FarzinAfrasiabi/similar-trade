import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Avatar,
  Typography,
} from "@material-tailwind/react";
const AvatarInf = () => {
  return (
    <Popover>
      <PopoverHandler>
        <Button variant="text" className="p-0">
          <Avatar size="sm" alt="profile" src="/images/avatar/face-2.jpg" />
        </Button>
      </PopoverHandler>
      <PopoverContent className="max-w-[18rem] lg:max-w-[20rem]">
        <div className="mb-2 px-8 flex items-center justify-between gap-4">
          <Avatar
            size="xs"
            variant="circular"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            alt="candice wu"
          />
          <Button
            variant="gradient"
            color="blue"
            size="sm"
            className="font-medium capitalize"
          >
            Follow
          </Button>
        </div>
        <Typography
          variant="h6"
          color="blue-gray"
          className="mb-2 flex items-center gap-2 font-medium"
        >
          <span>Candice Wu</span> •{" "}
          <a href="#" className="text-sm text-blue-gray-700">
            @canwu
          </a>
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          Frontend Developer • Major interest in Web Development: motivated to
          achieve measurable results, to deepen my knowledge and improve my
          skills.
        </Typography>
        <div className="mt-6 flex items-center gap-8 border-t border-blue-gray-50 pt-4">
          <Typography
            variant="small"
            color="gray"
            className="flex items-center gap-1 text-xs font-normal"
          >
            United Kingdom
          </Typography>
          <Typography
            as="a"
            href="#"
            variant="small"
            color="gray"
            className="flex items-center gap-1 text-xs font-normal"
          >
            Material Tailwind
          </Typography>
        </div>
      </PopoverContent>

    </Popover>
  );
};

export default AvatarInf;
