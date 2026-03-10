/* Green starburst icon matching the Precifarm brand */
export function StarburstIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 0C12 0 13.5 5 14.5 8C15.2 6.2 18.5 2.5 18.5 2.5C18.5 2.5 16.5 7 15.5 9C17.5 8.5 24 7.5 24 7.5C24 7.5 17.5 10 15.5 11C17 12 22 16 22 16C22 16 16.5 13.5 14.5 12.5C15 14.5 16 24 16 24C16 24 13 16 12 14C11 16 8 24 8 24C8 24 9 14.5 9.5 12.5C7.5 13.5 2 16 2 16C2 16 7 12 8.5 11C6.5 10 0 7.5 0 7.5C0 7.5 6.8 8.5 8.5 9C7.5 7 5.5 2.5 5.5 2.5C5.5 2.5 8.8 6.2 9.5 8C10.5 5 12 0 12 0Z"
        fill="#5cb338"
      />
    </svg>
  );
}

export function LogoMark() {
  return (
    <div className="flex items-center">
      <span className="text-[1.6rem] font-extrabold tracking-tight leading-none text-[#333333]">
        Precifarm
      </span>
      <StarburstIcon size={18} className="-mt-2 -ml-0.5" />
    </div>
  );
}

export function LogoMarkFull() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <span className="text-[1.6rem] font-extrabold tracking-tight leading-none text-[#333333]">
          Precifarm
        </span>
        <StarburstIcon size={18} className="-mt-2 -ml-0.5" />
      </div>
      <span className="text-[10px] italic text-gray-400 leading-none mt-1 tracking-wide">
        Precision irrigation for the future
      </span>
    </div>
  );
}

export function LogoMarkLight() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <span className="text-[1.6rem] font-extrabold tracking-tight leading-none text-white">
          Precifarm
        </span>
        <StarburstIcon size={18} className="-mt-2 -ml-0.5" />
      </div>
      <span className="text-[10px] italic text-gray-500 leading-none mt-1 tracking-wide">
        Precision irrigation for the future
      </span>
    </div>
  );
}
