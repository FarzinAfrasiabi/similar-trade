const OrderStatus = ({ status }) => {
  return (
    <div className="col-span-12 md:col-span-6 xl:col-span-3 flex items-center gap-x-4 bg-white rounded-lg shadow px-6 py-4 group cursor-pointer">
          <span>{status.icon() }</span>
      <div className="flex flex-col w-full">
        <h1 className="text-slate-800 text-lg font-semibold">
          $ {Number(status.value).toLocaleString()}
        </h1>
        <div
          className={`flex w-full ${
            status.isOrder ? "items-center justify-between " : "justify-start"
          } `}
        >
          <span className="text-slate-400 text-xs">{status.title}</span>
          {status.isOrder && (
            <span className="text-emerald-500 text-sm font-semibold">{status.order}%</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
