export default function ButtonACtions({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="w-8 h-8 rounded-full ring-1  ring-gray-400 flex items-center justify-center hover:bg-gray-600 hover:text-gray-100 transition-all ease-in-out duration-150"
    >
      {children}
    </button>
  );
}
