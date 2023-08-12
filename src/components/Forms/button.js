const Buttons = ({ children, type = "button" , onClick , disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-blue-500 disabled:bg-blue-gray-200 disabled:hover:ring-0 disabled:py-2 disabled:ring-offset-0 disabled:shadow-none  text-white py-3 font-semibold rounded-md hover:shadow-md hover:ring-2 hover:ring-blue-500 hover:ring-offset-1 transition-all ease-in-out duration-150 mt-4 "
      disabled={disabled}

    >
      {children}
    </button>
  );
};

export default Buttons;
