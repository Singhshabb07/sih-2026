function Loading({ text = "Loading..." }) {
  return (
    <div className="flex min-h-[200px] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-slate-700 border-t-orange-500" />

        <p className="mt-3 text-sm text-slate-500">
          {text}
        </p>
      </div>
    </div>
  );
}

export default Loading;