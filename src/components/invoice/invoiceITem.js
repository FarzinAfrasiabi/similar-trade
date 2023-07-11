const InvoiceITem = ({ item }) => {
  return (
    <div className="w-full ring-2 ring-gray-300 flex items-center justify-between relative rounded-xl text-xs md:text-sm text-gray-800">
      <div className="flex items-center gap-x-3 px-1 md:px-4 py-4 border-l-4 border-gray-300 rounded-t-lg rounded-b-lg">
        <span>#{item}</span>
        <span>Signaler subscription</span>
      </div>
      <div className="flex flex-col pr-4">
        {item === 2 ? (
          <div className="flex flex-col font-normal gap-y-1 items-center gap-x-4">
            <span className="text-gray-700 text-xs md:text-sm">IRR 900</span>
            <span className="text-xs line-through  text-gray-400">
              IRR 999.999
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-x-2 text-xs ">
            <span className="capitalize">IRR</span>
            <span>999.9999</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default InvoiceITem;
