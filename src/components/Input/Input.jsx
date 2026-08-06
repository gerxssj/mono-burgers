function Input({
  placeholder,
  value,
  onChange,
  type = "text",
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="
        w-full
        rounded-xl
        px-4
        py-4
        bg-white
        text-black
        outline-none
        border-2
        border-transparent
        focus:border-yellow-400
        transition
      "
    />
  );
}

export default Input;