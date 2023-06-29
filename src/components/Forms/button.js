const Buttons = ({ children, type = "button" }) => {
  return (
    <button
      type={type}
      className="w-full bg-blue-500 text-white py-3 font-semibold rounded-md hover:shadow-md hover:ring-2 hover:ring-blue-500 hover:ring-offset-1 transition-all ease-in-out duration-150"
    >
      {children}
    </button>
  );
};

export default Buttons;
