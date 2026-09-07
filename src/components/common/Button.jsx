function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-500",
    secondary:
      "border border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800",
    danger:
      "bg-red-500/10 text-red-400 hover:bg-red-500/20",
  };

  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;