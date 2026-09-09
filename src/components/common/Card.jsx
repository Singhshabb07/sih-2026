function Card({ children, title, description, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-orange-500/20 bg-[#0d172e]/80 p-6 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] transition-all duration-300 hover:border-orange-400/40 hover:shadow-[0_12px_40px_rgba(249,115,22,0.15)] ${className}`}
    >
      {title && (
        <div className="mb-5">
          <h3 className="text-lg font-bold text-white tracking-tight">{title}</h3>

          {description && (
            <p className="mt-1 text-sm font-medium text-slate-400">
              {description}
            </p>
          )}
        </div>
      )}

      {children}
    </div>
  );
}

export default Card;