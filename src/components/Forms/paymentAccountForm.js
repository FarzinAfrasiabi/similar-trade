import { Button, Checkbox, Input, Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
const formsAccountsInputs = [
  { label: "Broker name", name: "brokerName" },
  { label: "Broker site link", name: "brokerLink" },
  { label: "Account type", name: "accountType" },
  { label: "Account currency", name: "accountCurrency" },
  { label: "Account name", name: "accountName" },
  { label: "Account number", name: "accountNumber" },
  { label: "Metatrader version", name: "version" },
  { label: "Description", name: "desc" },
];

const initialValues = {
  brokerName: "",
  brokerLink: "",
  accountType: "",
  accountCurrency: "",
  accountName: "",
  accountNumber: "",
  version: "",
  desc: "",
};

const formsAccountsCheckbox = [
  { label: "I agree to Similartrade’s Cookie and Privacy Policy.", id: 1 },
  { label: "I agree not to open manual trades in my account.", id: 2 },
  { label: "I agree not to open manual trades in my account.", id: 3 },
];
const PaymentAccountForm = () => {
  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="pt-2 flex flex-col justify-between h-full"
    >
      <div className="w-full flex flex-col gap-y-4">
        {formsAccountsInputs.map(({ label, name }, index) => {
          return (
            <Input
              name={name}
              onChange={formik.handleChange}
              value={formik.values[name]}
              key={index}
              type="text"
              label={label}
              className="text-sm"
            />
          );
        })}
      </div>
      <div className="flex flex-col pt-2 pb-4">
        {formsAccountsCheckbox.map(({ label, id }) => (
          <Checkbox
            id={id}
            key={id}
            label={<Typography className="text-xs">{label}</Typography>}
            className="w-4 h-4"
          />
        ))}
      </div>
      <div className="w-full ">
        <Button type="submit" className="w-full bg-blue-700">
          Choose payment method
        </Button>
      </div>
    </form>
  );
};

export default PaymentAccountForm;
