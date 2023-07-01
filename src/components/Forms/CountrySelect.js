import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { countryCode } from "@/utils/CountryCode";
import Inputs from "./Inputs";
import { FormHelperText } from "@mui/material";

const CountrySelect = ({ onChnage, value, formik }) => {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-4">
      <FormControl className="flex-1">
        <InputLabel id="demo-simple-select-autowidth-label">
          Your Country
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          label={" Your Country"}
          style={{ borderRadius: "10px", fontWeight: "600" }}
          name="countryCode"
          value={formik.values.countryCode}
          onChange={formik.handleChange}
          error={
            formik.touched.countryCode && Boolean(formik.errors.countryCode)
          }
        >
          {countryCode.map((code, index) => {
            return (
              <MenuItem
                className="flex items-center justify-evenly gap-x-6"
                key={index}
                value={`${code.dial_code}`}
              >
                <span className="flex-1">{code.name}</span>
              </MenuItem>
            );
          })}
        </Select>
        <FormHelperText className="text-red-600">
          {formik.touched.countryCode ? formik.errors.countryCode : ""}
        </FormHelperText>
      </FormControl>
      <div className="flex items-center gap-x-2 flex-1">
        <span
          className={`w-12 h-[54px] py-2 px-2  rounded-lg ring-1 flex items-center justify-center  ${
            formik.values.countryCode.length !== 0
              ? "ring-blue-500 ring-2"
              : "ring-gray-300  "
          } text-sm transition-all ease-in-out duration-150`}
        >
          {formik.values.countryCode.length !== 0
            ? formik.values.countryCode
            : "+"}
        </span>
        <Inputs formik={formik} name={"phone"} label={"phone Number"} />
      </div>
    </div>
  );
};

export default CountrySelect;
