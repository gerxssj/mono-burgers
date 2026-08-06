function Button({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
        w-full
        bg-yellow-400
        hover:bg-yellow-300
        transition
        duration-300
        rounded-xl
        py-4
        font-bold
        text-lg
        text-black
        shadow-lg
        cursor-pointer
      "
    >
      {children}
    </button>
  );
}

export default Button;