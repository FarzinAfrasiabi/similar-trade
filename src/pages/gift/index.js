import CustomModals from "@/components/custom/customModal";
import GiftTable from "@/components/table/giftTable";
import TicketTable from "@/components/table/ticketTable";
import Layout from "@/container/layout";
import {
  Button,
  Input,
  MenuItem,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";
import { TextField, TextareaAutosize } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { BiSolidCloudUpload } from "react-icons/bi";

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
      >
        <form
          className="flex flex-col gap-y-2 gap-x-4 lg:flex-row  mt-6 h-full"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col lg:flex-row flex-wrap gap-x-4 gap-y-4">
              <TextField
                label="Discount"
                size="small"
                sx={{ borderRadius: "20px" }}
                name="discount"
                onChange={formik.handleChange}
                value={formik.values.discount}
              />
              <TextField
                label="Start in"
                size="small"
                sx={{ borderRadius: "20px" }}
                name="start"
                onChange={formik.handleChange}
                value={formik.values.start}
              />
              <TextField
                label="Expire in"
                size="small"
                sx={{ borderRadius: "20px" }}
                name="expire"
                onChange={formik.handleChange}
                value={formik.values.expire}
              />
            </div>
            <div className="flex flex-col lg:flex-row flex-wrap gap-x-4 gap-y-4">
              <TextField
                label="Discount for subscription "
                size="small"
                sx={{ borderRadius: "20px" }}
                name="disSub"
                onChange={formik.handleChange}
                value={formik.values.disSub}
              />
              <TextField
                label="Discount for Commission "
                size="small"
                sx={{ borderRadius: "20px" }}
                name="disCom"
                onChange={formik.handleChange}
                value={formik.values.disCom}
              />
              <TextField
                label="Number of uses"
                size="small"
                sx={{ borderRadius: "20px" }}
                name="numOfUse"
                onChange={formik.handleChange}
                value={formik.values.numOfUse}
              />
            </div>
            <div className="flex flex-col lg:flex-row flex-wrap gap-x-4 gap-y-4">
              <TextField
                label="Disposables"
                size="small"
                select
                fullWidth
                sx={{ borderRadius: "20px" }}
                name="disposables"
                onChange={formik.handleChange}
                value={formik.values.disposables}
              >
                <MenuItem value={"yes"}>Yes</MenuItem>
                <MenuItem value={"No"}>No</MenuItem>
              </TextField>
            </div>
            <TextField
              label="Description"
              name="desc"
              onChange={formik.handleChange}
              value={formik.values.desc}
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
