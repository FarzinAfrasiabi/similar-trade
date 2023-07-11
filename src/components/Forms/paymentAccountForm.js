import { Button, Checkbox, Input, Typography } from "@material-tailwind/react";
const formsAccountsInputs = [
  { label: "Broker name" },
  { label: "Broker site link" },
  { label: "Account type" },
  { label: "Account currency" },
  { label: "Account name" },
  { label: "Account number" },
  { label: "Metatrader version" },
  { label: "Description" },
];

const formsAccountsCheckbox = [
  { label: "I agree to Similartrade’s Cookie and Privacy Policy.", id: 1 },
  { label: "I agree not to open manual trades in my account.", id: 2 },
  { label: "I agree not to open manual trades in my account.", id: 3 },
];
const PaymentAccountForm = () => {
  return (
    <form className="pt-2 flex flex-col justify-between h-full">
      <div className="w-full flex flex-col gap-y-4">
        {formsAccountsInputs.map(({ label }, index) => {
          return (
            <Input key={index} type="text" label={label} className="text-sm" />
          );
        })}
      </div>
      <div className="flex flex-col pt-2">
        {formsAccountsCheckbox.map(({ label, id }) => (
          <Checkbox
            id={id}
            key={id}
            label={<Typography className="text-xs">{label}</Typography>}
            className="w-4 h-4"
          />
        ))}
      </div>
    </form>
  );
};

export default PaymentAccountForm;
