import TransActionPrintPage from "@/components/print/transactionprint";

function createData(
  paymentId,
  type,
  ammount,
  method,
  status,
  startTime,
  expireTime
) {
  return {
    paymentId,
    type,
    ammount,
    method,
    status,
    expireTime,
    startTime,
  };
}

const row = [
  createData(
    "#134156454",
    "Signal Subscriptions",
    "10200$",
    "Rank",
    "unpaid",
    new Date().toLocaleDateString(),
    new Date().toLocaleDateString()
  ),
];

const TransActionInvoice = () => {
  //* fetch in invoice id and pass to this component
  return (
    <>
      <TransActionPrintPage row={row[0]} />
    </>
  );
};

export default TransActionInvoice;
