function Card({ children, title, description, className = "" }) {
  return (
    <div
      className={`rounded-xl border border-slate-800 bg-slate-900/60 p-6 ${className}`}
    >
      {title && (
        <div className="mb-5">
          <h3 className="text-lg font-semibold text-white">{title}</h3>

          {description && (
            <p className="mt-1 text-sm text-slate-500">
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