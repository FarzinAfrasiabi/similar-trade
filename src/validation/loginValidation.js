import * as Yup from "yup";
const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .matches(/^(?!.*@[^,]*,)/)
    .required(),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z0-9]/, "Password can only contain Latin letters."),
});

export default loginValidationSchema;
