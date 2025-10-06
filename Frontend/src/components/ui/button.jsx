export function Button({ children, className, ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-lg text-white font-semibold bg-blue-600 hover:bg-blue-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
