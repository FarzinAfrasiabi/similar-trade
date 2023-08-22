import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import { countryCode } from "@/utils/CountryCode";
import Inputs from "./Inputs";
import { FormHelperText, TextField } from "@mui/material";
import { Badge, Input, Option, Select } from "@material-tailwind/react";

const CountrySelect2 = ({ formik, isSmall = false }) => {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:items-center lg:justify-center gap-x-4 gap-y-4">
      <div className="flex-1">
        <Select
          label={" Your Country"}
          name="countryCode"
          size="lg"
          value={formik.values.countryCode}
          onChange={(e) => formik.setFieldValue("countryCode", e)}
          error={
            formik.touched.countryCode && Boolean(formik.errors.countryCode)
          }
        >
          {countryCode.map((code, index) => {
            return (
              <Option
                className="flex items-center justify-evenly gap-x-6"
                key={index}
                value={`${code.dial_code}`}
              >
                <span className="flex-1">{code.name}</span>
              </Option>
            );
          })}
        </Select>
        <span className="text-red-600">
          {formik.touched.countryCode ? formik.errors.countryCode : ""}
        </span>
      </div>
      <div className="flex items-center gap-x-2 flex-1">
        <span
          className={`w-12  h-10 px-2  rounded-lg ring-1 flex items-center justify-center  ${
            formik.values.countryCode.length !== 0
              ? "ring-blue-500 ring-2"
              : "ring-gray-400  "
          } text-sm transition-all ease-in-out duration-150`}
        >
          {formik.values.countryCode.length !== 0
            ? formik.values.countryCode
            : "+"}
        </span>
        <Input
          size="lg"
          {...formik.getFieldProps("phone")}
          name={"phone"}
          label={"phone Number"}
        />
      </div>
    </div>
  );
};

export default CountrySelect2;
