import CustomModals from "@/components/custom/customModal";
import GiftTable from "@/components/table/giftTable";
import TicketTable from "@/components/table/ticketTable";
import Layout from "@/container/layout";
import { Button, MenuItem, Option, Select } from "@material-tailwind/react";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers";
function createData(
  DiscountCode,
  startIn,
  expireIn,
  Subscription,
  Commission,
  used,
  remain,
  Disposables,
  Subscribers,
  Status,
  Description
) {
  return {
    DiscountCode,
    startIn,
    expireIn,
    Subscription,
    Commission,
    used,
    remain,
    Disposables,
    Subscribers,
    Status,
    Description,
  };
}

const GIFT_DATA = [
  createData(
    "#ST-A5S66F1SAS",
    new Date().toISOString(),
    new Date().toISOString(),
    "10",
    "10",
    "999999999",
    "999999999",
    "Yes",
    "All",
    "active"
  ),
  createData(
    "#ST-A5S66F1SAS",
    new Date().toISOString(),
    new Date().toISOString(),
    "10",
    "10",
    "999999999",
    "999999999",
    "No",
    "All",
    "De active"
  ),
  createData(
    "#ST-A5S66F1SAS",
    new Date().toISOString(),
    new Date().toISOString(),
    "10",
    "10",
    "999999999",
    "999999999",
    "Yes",
    "All",
    "De active"
  ),
];

const initialValues = {
  discount: "",
  start: "",
  expire: "",
  disSub: "",
  disCom: "",
  numOfUse: "",
  disposables: "",
  desc: "",
};

const GiftPage = () => {
  const [newTicket, setNewTicket] = useState(false);
  const onSubmit = (values) => {
    console.log(values);
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  return (
    <Layout>
      <CustomModals
        title={"new Discount Code"}
        openModal={newTicket}
        handleClose={() => setNewTicket(false)}
        size="md"
      >
        <form
          className="flex flex-col gap-y-6 gap-x-4 lg:flex-row w-full  mt-6 h-full"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex w-full flex-col gap-y-6">
            <div className="flex w-full flex-col lg:flex-row flex-wrap gap-x-4 gap-y-4">
              <TextField
                label="Discount"
                className="flex-auto"
                size="small"
                sx={{ borderRadius: "20px" }}
                name="discount"
                onChange={formik.handleChange}
                value={formik.values.discount}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MobileDatePicker
                  className="flex-auto"
                  onChange={(newValue) => console.log(newValue)}
                  slotProps={{ textField: { size: "small" } }}
                  label="Start in"
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MobileDatePicker
                  className="flex-auto"
                  onChange={(newValue) => console.log(newValue)}
                  slotProps={{ textField: { size: "small" } }}
                  label="Expire in"
                />
              </LocalizationProvider>
            </div>
            <div className="flex flex-col lg:flex-row flex-wrap gap-x-4 gap-y-4">
              <TextField
                label="Discount for subscription "
                size="small"
                className="flex-auto"
                sx={{ borderRadius: "20px" }}
                name="disSub"
                onChange={formik.handleChange}
                value={formik.values.disSub}
              />
              <TextField
                label="Discount for Commission "
                size="small"
                className="flex-auto"
                sx={{ borderRadius: "20px" }}
                name="disCom"
                onChange={formik.handleChange}
                value={formik.values.disCom}
              />
              <TextField
                label="Number of uses"
                size="small"
                sx={{ borderRadius: "20px" }}
                className="flex-auto"
                name="numOfUse"
                onChange={formik.handleChange}
                value={formik.values.numOfUse}
              />
            </div>
            <div className="flex items-center gap-x-4">
              <TextField
                label="Disposables"
                size="small"
                select
                className="flex-auto w-full max-w-xs"
                sx={{ borderRadius: "20px" }}
                name="disposables"
                onChange={formik.handleChange}
                value={formik.values.disposables}
              >
                <MenuItem value={"yes"}>Yes</MenuItem>
                <MenuItem value={"No"}>No</MenuItem>
              </TextField>
              <div className="flex relative w-full flex-auto">
                <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                  <InputLabel sx={{lineHeight : '1'}}  htmlFor="outlined-adornment-password">
                    Subscribers
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    size="small"
                    label="Subscribers"
                    endAdornment={
                      <InputAdornment position="end">
                        <button type="button" className="text-sm px-4 bg-blue-500 rounded-md p-1 text-white">
                          select
                        </button>
                      </InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      "aria-label": "weight",
                    }}
                  />
                </FormControl>

                {/* <Button className="absolute right-0 ">Select</Button> */}
              </div>
            </div>
            <TextField
              label="Description"
              name="desc"
              onChange={formik.handleChange}
              value={formik.values.desc}
              multiline
              rows={5}
            />
            <div className="flex items-center justify-end">
              <Button className="font-normal">Save Changes</Button>
            </div>
          </div>
        </form>
      </CustomModals>
      <div className="w-full flex flex-col gap-y-4 px-5">
        <div className="w-full max-w-[280px]">
          <button
            onClick={() => setNewTicket(true)}
            className="py-2 px-6 w-full block text-center bg-white shadow-md rounded-lg text-blue-gray-600 hover:text-blue-500 transition-all ease-in-out duration-200"
          >
            New Discount Code
          </button>
        </div>
        <GiftTable rows={GIFT_DATA} />
      </div>
    </Layout>
  );
};

export default GiftPage;
