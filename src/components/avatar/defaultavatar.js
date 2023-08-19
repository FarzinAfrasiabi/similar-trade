import { BiUser } from "react-icons/bi";

const DefaultAvatar = ({size = "sm"}) => {
  return (
    <div className={` ${size === "sm" ? 'w-10 h-10' : 'w-24 h-24'} rounded-full bg-gray-400 flex items-center justify-center cursor-pointer`}>
      <BiUser className="text-2xl text-gray-700" />
    </div>
  );
};

export default DefaultAvatar;
