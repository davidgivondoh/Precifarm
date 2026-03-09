export function Logo({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Background */}
      <rect width="40" height="40" rx="8" fill="#0f172a" />
      {/* Leaf / water drop shape */}
      <path
        d="M20 8C20 8 12 18 12 24C12 28.4183 15.5817 32 20 32C24.4183 32 28 28.4183 28 24C28 18 20 8 20 8Z"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner line — precision/drip */}
      <path
        d="M20 14L20 22"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="20" cy="26" r="1.5" fill="white" />
    </svg>
  );
}

export function LogoMark() {
  return (
    <div className="flex items-center gap-2.5">
      <Logo size={40} />
      <div className="flex flex-col">
        <span className="text-xl font-extrabold tracking-tight leading-none text-navy-900">
          Precifarm
        </span>
        <span className="text-[10px] font-medium tracking-widest uppercase text-gray-400 leading-none mt-0.5">
          Precision Agriculture
        </span>
      </div>
    </div>
  );
}

export function LogoMarkLight() {
  return (
    <div className="flex items-center gap-2.5">
      <Logo size={40} className="opacity-90" />
      <div className="flex flex-col">
        <span className="text-xl font-extrabold tracking-tight leading-none text-white">
          Precifarm
        </span>
        <span className="text-[10px] font-medium tracking-widest uppercase text-gray-500 leading-none mt-0.5">
          Precision Agriculture
        </span>
      </div>
    </div>
  );
}
