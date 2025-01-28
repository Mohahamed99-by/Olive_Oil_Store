import React from 'react';

const Logo = ({ className = '', color = 'currentColor' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <path
          d="M20 5C14.5 5 10 9.5 10 15C10 20.5 14.5 25 20 25C25.5 25 30 20.5 30 15C30 9.5 25.5 5 20 5ZM20 22C16.1 22 13 18.9 13 15C13 11.1 16.1 8 20 8C23.9 8 27 11.1 27 15C27 18.9 23.9 22 20 22Z"
          fill={color}
        />
        <path
          d="M20 10C17.2 10 15 12.2 15 15C15 17.8 17.2 20 20 20C22.8 20 25 17.8 25 15C25 12.2 22.8 10 20 10ZM20 17C18.9 17 18 16.1 18 15C18 13.9 18.9 13 20 13C21.1 13 22 13.9 22 15C22 16.1 21.1 17 20 17Z"
          fill={color}
        />
        <path
          d="M30 25C27.2 25 25 27.2 25 30C25 32.8 27.2 35 30 35C32.8 35 35 32.8 35 30C35 27.2 32.8 25 30 25ZM30 32C28.9 32 28 31.1 28 30C28 28.9 28.9 28 30 28C31.1 28 32 28.9 32 30C32 31.1 31.1 32 30 32Z"
          fill={color}
        />
        <path
          d="M10 25C7.2 25 5 27.2 5 30C5 32.8 7.2 35 10 35C12.8 35 15 32.8 15 30C15 27.2 12.8 25 10 25ZM10 32C8.9 32 8 31.1 8 30C8 28.9 8.9 28 10 28C11.1 28 12 28.9 12 30C12 31.1 11.1 32 10 32Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default Logo;
