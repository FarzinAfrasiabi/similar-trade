import * as React from "react";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel } from "@mui/material";

const CheckBoxes = ({ name, formik }) => {
  return (
    <FormControl
      required
      //   error={error}
      component="fieldset"
      sx={{ m: 1 }}
      variant="outlined"
    >
      <FormControlLabel
        control={
          <Checkbox
            value={formik.values[name]}
            onChange={formik.handleChange}
            name={name}
            error={formik.touched[name] && Boolean(formik.errors[name])}
          />
        }
        label = {<CheckboxLabel />}
      />

      <FormHelperText className="text-red-600">
        {formik.touched[name] ? formik.errors[name] : ""}
      </FormHelperText>
    </FormControl>
  );
};

export default CheckBoxes;

const CheckboxLabel = () => {
  return (
    <span className="text-xs lg:text-sm ">
      I aggre Square s <b className="text-blue-600">Cookie</b> and{" "}
      <b
        onClick={() => setOpenPrivacyPopup(true)}
        className="text-blue-600 cursor-pointer"
      >
        Privacy Policy
      </b>
      .
    </span>
  );
};
