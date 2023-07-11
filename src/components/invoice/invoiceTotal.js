const InvoiceTotal = ({total}) => {
  return (
    <div className="flex flex-col gap-y-2 ">
      <div className="w-full flex flex-col gap-y-2 justify-around border border-gray-300 border-l-0 border-r-0 py-4 px-2">
        <div className="flex items-center justify-between text-sm text-gray-700">
          <p className="text">sub Total : </p>
          <div>IRR 999,999 </div>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-700">
          <p className="text">Vat : </p>
          <div>IRR 900,000</div>
        </div>
      </div>
      {/* totla */}
      <div className="w-full  flex justify-between items-center font-semibold text-sm text-blue-800 px-2">
        <p className="">Total : </p>
        <p>IRR 900 , 000</p>
      </div>
    </div>
  );
};

export default InvoiceTotal;
