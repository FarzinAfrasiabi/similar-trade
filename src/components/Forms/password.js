import { TextField } from "@mui/material";
import { Eye, EyeSlash } from "iconsax-react";
import { useState } from "react";
const Password = ({ label }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative flex items-center ">
      <TextField
        size="medium"
        // fullWidth
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
        label={label}
        variant="outlined"
        autoComplete="on"
      />
      <button onClick={() => setShowPassword(!showPassword)} type="button" className="absolute right-2">
        {showPassword ? (
          <EyeSlash size={16} className="text-gray-500" />
        ) : (
          <Eye size={16} className="text-gray-500" />
        )}
      </button>
    </div>
  );
};

export default Password;
