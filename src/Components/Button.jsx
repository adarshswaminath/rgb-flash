import React from "react";

function Button({setActive,isActive}) {
  return (
    <div>
      <button
        onClick={() => setActive((prev) => !prev)}
        className="bg-black p-2 rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={
            isActive
              ? "w-6 h-6 text-[#39FF14]  font-bold"
              : "w-6 h-6 text-white font-bold"
          }
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
          />
        </svg>
      </button>
    </div>
  );
}

export default Button;
