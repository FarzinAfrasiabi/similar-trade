import TextField from "@mui/material/TextField";
const Inputs = ({ label, type = "text", name, formik  , isSmall = false}) => {
  return (
    <TextField
      size={isSmall ? 'small' : 'medium'}
      fullWidth
      type={type}
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
      name={name}
      
      value={formik.values[name]}
      onChange={formik.handleChange}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
    />
  );
};

export default Inputs;
