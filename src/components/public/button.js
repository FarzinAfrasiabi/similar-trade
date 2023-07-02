const Buttons = ({ children, isRounded = false }) => {
  return (
    <button
      className={`bg-[#2772F0] text-white p-2 flex-1 ${
        isRounded ? "rounded-3xl" : "rounded-lg"
      }  hover:ring-2 hover:ring-offset-2 hover:ring-[#2772f0] transition-all ease-in-out duration-150 `}
    >
      {children}
    </button>
  );
};

export default Buttons;
