function Button({ children, variant = "primary", className = "", ...props }) {
  const baseStyle =
    "px-6 py-2 rounded-xl font-semibold text-base transition-colors duration-300";

  const variants = {
    primary: "bg-primary-900 text-secondary-0 hover:bg-primary-700",
    outline: "border border-primary-700 text-primary-700 hover:bg-primary-200",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button
