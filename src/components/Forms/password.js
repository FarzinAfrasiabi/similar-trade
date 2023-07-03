import { TextField } from "@mui/material";
// import { Eye, EyeSlash } from "iconsax-react";
import { useState } from "react";
const Password = ({ label, name, formik }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative flex items-center ">
      <TextField
        size="medium"
        fullWidth
        type={showPassword ? "text" : "password"}
        InputLabelProps={{
          sx: {
            fontSize: "16px",
          },
        }}
        InputProps={{
          sx: {
            borderRadius: "10px",
          },
        }}
        name={name}
        label={label}
        variant="outlined"
        autoComplete="on"
        value={formik.values[name]}
        onChange={formik.handleChange}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        helperText={formik.touched[name] && formik.errors[name]}
      />
      <button
        onClick={() => setShowPassword(!showPassword)}
        type="button"
        className={`absolute right-2 ${formik.touched[name] ? "top-5" : ""} `}
      >
        {showPassword ? (
          {/* <EyeSlash size={16} className="text-gray-500" /> */}
        ) : (
          {/* <Eye size={16} className="text-gray-500" /> */}
        )}
      </button>
    </div>
  );
};

export default Password;
