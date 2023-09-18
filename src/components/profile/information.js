import { Button, Input, Option, Select } from "@material-tailwind/react";
import { useFormik } from "formik";

const initialValues = {
  brokerName: "",
  brokerLink: "",
  type: "",
  currency: "",
  name: "",
  number: "",
  version: "",
};

const InformationAccount = () => {
  const onSubmit = (values) => console.log(values);

  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  return (
    <div className="flex flex-col gap-y-4 rounded-xl shadow-lg bg-white">
      <div className="w-full flex flex-col justify-between gap-y-6  pb-6 h-full">
        {/* header */}
        <div className="py-5 px-6 flex items-center border-b border-b-gray-400 ">
          <span className=" font-medium">Account informations</span>
        </div>
        {/* content */}
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-between h-full gap-y-4 px-4"
        >
          <Input
            type="text"
            label="Broker name"
            {...formik.getFieldProps("brokerName")}
          />
          <Input
            type="text"
            label="Broker site link"
            {...formik.getFieldProps("brokerLink")}
          />
          <Input
            type="text"
            label="Account type"
            {...formik.getFieldProps("type")}
          />
          <Input
            type="text"
            label="Account currency "
            {...formik.getFieldProps("currency")}
          />
          <Input
            type="text"
            label="Account name"
            {...formik.getFieldProps("name")}
          />
          <Input
            type="text"
            label="Account number"
            {...formik.getFieldProps("number")}
          />
          <Select
            label="Metatrader version"
            onChange={(e) => formik.setFieldValue("version", e)}
          >
            <Option value="1">value_1</Option>
            <Option value="2">value_2</Option>
            <Option value="3">value_3</Option>
          </Select>
          <div className="flex items-center justify-end">
            <Button className="font-normal" size="sm" type="submit">
              Edit information
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InformationAccount;
