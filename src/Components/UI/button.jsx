export default function Button({ children, className, onClick }) {
    return (
      <button
        className={`px-6 py-3 text-lg bg-blue-500 hover:bg-blue-600 rounded-lg transition ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  