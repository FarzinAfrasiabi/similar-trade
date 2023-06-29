import TextField from "@mui/material/TextField";
const Inputs = ({ label , type = "text" }) => {
  return (
    <TextField
      size="medium"
          fullWidth
          type={ type}
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
      id="outlined-basic"
      label={label}
      variant="outlined"
    />
  );
};

export default Inputs;
