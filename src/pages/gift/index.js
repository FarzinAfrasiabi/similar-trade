import CustomModals from "@/components/custom/customModal";
import GiftTable from "@/components/table/giftTable";
import TicketTable from "@/components/table/ticketTable";
import Layout from "@/container/layout";
import {
  Button,
  Input,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";
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
  subject: "",
  relatedService: "",
  desc: "",
  department: "",
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
          <div className="flex-auto flex flex-col h-full gap-y-6">
            <Input
              type="text"
              label="Subject"
              name="subject"
              onChange={formik.handleChange}
            />
            <Select
              name="relatedService"
              onChange={(as) => formik.setFieldValue("relatedService", as)}
              label="Related Service"
            >
              <Option value="1">Service 1</Option>
              <Option value="2">Service 2</Option>
              <Option value="3">Service 3</Option>
            </Select>
            <Textarea
              name="desc"
              onChange={formik.handleChange}
              label="Description"
              className="h-52"
            />
          </div>
          <div className="flex flex-col gap-y-4 justify-between h-full">
            <Select
              name="department"
              onChange={(e) => formik.setFieldValue("department", e.target)}
              label="Department"
            >
              <Option value="1">Department 1</Option>
              <Option value="2">Departmnet 2</Option>
              <Option value="3">Department 3</Option>
            </Select>
            <div className="flex pt-4 flex-col gap-y-4 items-center text-blue-gray-600">
              <h2>Upload new Image</h2>
              <BiSolidCloudUpload className="text-3xl" />
              <h4 className="text-sm">upload file or drag and drop </h4>
              <h5 className="text-xs text-blue-gray-400">
                Png , jpeg up to 10MB
              </h5>
              <div className="flex items-center gap-x-4">
                {[1, 2, 3].map((_, i) => (
                  <div
                    key={i}
                    className="w-14 h-14 rounded-md ring-1 ring-blue-gray-500"
                  ></div>
                ))}
              </div>
              <Button className="font-normal tracking-wider" type="submit">
                Submit ticket
              </Button>
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
