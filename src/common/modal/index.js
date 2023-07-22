import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Button } from "@mui/material";
const CustomModal = ({ children, open, handleOpen }) => {
  return (
    <div className="max-w-xs w-full mx-auto">
      <Dialog
        open={open}
        className="max-w-xs lg:max-w-xs xl:max-w-xs 2xl:max-w-xs w-full h-full max-h-[700px] "
      >
        <DialogHeader>Telegram Users</DialogHeader>
        <hr />
        <DialogBody className="w-full h-[83%] ">
          {children}
          <div className="px-4 py-4">
            <Button
              onClick={handleOpen}
              className="w-full text-center ring-2  "
              variant="text"
              size="sm"
            >
              Cancel
            </Button>
          </div>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default CustomModal;
