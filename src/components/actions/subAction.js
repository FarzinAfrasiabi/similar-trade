const { BiLogoTelegram } = require("react-icons/bi");
const {
  HiOutlineStar,
  HiPlay,
  HiOutlineChatBubbleBottomCenterText,
} = require("react-icons/hi2");

export default function SubScribeAction({ onClick }) {
  return (
    <div className="flex items-center gap-x-4">
      <button className="w-7 h-7 ring-2 ring-gray-300 rounded-full flex items-center justify-center bg-white shadow-md hover:text-yellow-500">
        <HiOutlineStar />
      </button>
      <button className="w-7 h-7 ring-2 ring-gray-300 rounded-full flex items-center justify-center bg-white shadow-md hover:text-yellow-500">
        <HiPlay />
      </button>
      <button className="w-7 h-7 ring-2 ring-gray-300 rounded-full flex items-center justify-center bg-white shadow-md hover:text-yellow-500">
        <HiOutlineChatBubbleBottomCenterText />
      </button>
      <button className="w-7 h-7 ring-2 ring-gray-300 rounded-full flex items-center justify-center bg-white shadow-md text-blue-700">
        <BiLogoTelegram onClick={onClick} />
      </button>
    </div>
  );
}
