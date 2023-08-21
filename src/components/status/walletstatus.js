const WalletStatus = ({ header, number, color }) => {
  return (
    <div className="flex flex-col gap-y-1 bg-white shadow-md rounded-xl px-4 items-start py-3 flex-1">
      <span className="text-gray-700 text-xs font-semibold">{header}</span>
      <div className="relative flex items-center gap-x-2">
        <span className={`absolute rounded-full left-0 w-2 ${color} h-full`}></span>
        <p className={`block w-full px-4 font-medium  rounded text-gray-800  text-2xl`}>
          {number}
        </p>
      </div>
    </div>
  );
};

export default WalletStatus;
