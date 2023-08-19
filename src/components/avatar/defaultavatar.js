import { BiUser } from "react-icons/bi";

const DefaultAvatar = ({ size = "sm" }) => {
  return (
    <div
      className={` ${
        size === "sm"
          ? "w-10 h-10 "
            : size === "3xl"
            ? "w-36 h-36"
          : "w-24 h-24 bg-gray-400"
      } rounded-full  flex items-center bg-gray-400 justify-center cursor-pointer`}
    >
      <BiUser className="text-2xl text-gray-700" />
    </div>
  );
};

export default DefaultAvatar;
