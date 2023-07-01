import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FormHelperText } from "@mui/material";
const Selected = ({ label, seleceted, formik, name }) => {
  // console.log(formik.touched[name] && Boolean(formik.errors[name]));
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        // id="demo-simple-select"
        name={name}
        label={label}
        style={{ borderRadius: "10px", fontWeight: "600" }}
        value={formik.values[name]}
        onChange={formik.handleChange}
        error={formik.touched[name] && Boolean(formik.errors[name])}
      >
        {seleceted.map((item, index) => {
          return (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText className="text-red-600">
        {formik.touched[name] ? formik.errors[name] : ""}
      </FormHelperText>
    </FormControl>
  );
};

export default Selected;
