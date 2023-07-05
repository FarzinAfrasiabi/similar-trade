const WalletStatus = ({ header, number, color }) => {
  return (
    <div className="flex flex-col gap-y-1 bg-white shadow-md rounded-xl px-1 py-3 flex-1">
      <span className="text-gray-700 text-xs font-semibold">{header}</span>
      <div
        className={`block w-full border-l-[6px] ${color}  rounded text-gray-800 px-4 text-2xl`}
      >
        {number}
      </div>
    </div>
  );
};

export default WalletStatus;
