import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { countryCode } from "@/utils/CountryCode";
import Inputs from "./Inputs";
import { FormHelperText, TextField } from "@mui/material";

const CountrySelect = ({ formik, isSmall = false }) => {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:items-center lg:justify-center gap-x-4 gap-y-4">
      <FormControl className="flex-1">
        <TextField
          select
          size={"small"}
          id="demo-simple-select-autowidth"
          label={" Your Country"}
          style={{ borderRadius: "10px", fontWeight: "400" }}
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
        </TextField>
        <FormHelperText className="text-red-600">
          {formik.touched.countryCode ? formik.errors.countryCode : ""}
        </FormHelperText>
      </FormControl>
      <div className="flex items-center gap-x-2 flex-1">
        <span
          className={`w-12  ${
            isSmall ? "h-[38px]" : "h-[50px]"
          }  px-2  rounded-lg ring-1 flex items-center justify-center  ${
            formik.values.countryCode.length !== 0
              ? "ring-blue-500 ring-2"
              : "ring-gray-400  "
          } text-sm transition-all ease-in-out duration-150`}
        >
          {formik.values.countryCode.length !== 0
            ? formik.values.countryCode
            : "+"}
        </span>
        <Inputs
          isSmall={isSmall}
          formik={formik}
          name={"phone"}
          label={"phone Number"}
        />
      </div>
    </div>
  );
};

export default CountrySelect;
