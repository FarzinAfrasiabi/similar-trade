import ChatIcon from "../icons/public/chatIcon";

const HedaerAction = ({ isNotfication , children }) => {
  return (
    <div className="relative p-2 flex items-center justify-center">
      {isNotfication && (
        <span className="w-2 h-2 bg-red-600 rounded-full absolute top-2 right-2"></span>
      )}

      <button className="fill-[#92929D]">
        {children}
      </button>
    </div>
  );
};

export default HedaerAction;
