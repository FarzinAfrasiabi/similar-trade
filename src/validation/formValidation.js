import * as Yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = Yup.object().shape({
  RegisterAs: Yup.string().required("please select Register"),
  name: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .max(40)
    .required(),
  lastName: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid laset name")
    .max(60)
    .required(),
  userName: Yup.string().matches(
    /^[A-Za-z0-9\ _\#\.]*$/,
    "Please enter valid user name"
  ),
  email: Yup.string()
    .email()
    .matches(/^(?!.*@[^,]*,)/)
    .required(),
  countryCode: Yup.string().required("please select Country"),
  phone: Yup.string().matches(phoneRegExp, "phone number not valid").required(),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z0-9]/, "Password can only contain Latin letters."),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
    AcceptSquare: Yup.bool().oneOf([true], "You must read the Privacy Policy"),
});

export default validationSchema;
