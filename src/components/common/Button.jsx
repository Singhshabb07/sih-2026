function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 active:scale-95";

  const variants = {
    primary:
      "bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600 text-white shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:from-amber-400 hover:to-orange-500",
    secondary:
      "border border-orange-500/30 bg-[#0d172e]/80 text-orange-200 hover:bg-orange-950/50 hover:border-orange-400 hover:text-white backdrop-blur-md shadow-sm",
    danger:
      "bg-rose-500/15 border border-rose-500/30 text-rose-300 hover:bg-rose-500/25 shadow-sm",
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