import React from "react";

const Logo = () => {
  const petals = [
    { color: "#ff3b30", rotate: -70 },
    { color: "#ff9500", rotate: -50 },
    { color: "#ffcc00", rotate: -30 },
    { color: "#34c759", rotate: -10 },
    { color: "#00c7be", rotate: 10 },
    { color: "#007aff", rotate: 30 },
    { color: "#5856d6", rotate: 50 },
    { color: "#af52de", rotate: 70 }
  ];

  return (
    <div className="flex items-center gap-3">
      <svg width="60" height="40" viewBox="0 0 200 130" className="drop-shadow-sm">
        {petals.map((p, i) => (
          <g key={i} transform={`rotate(${p.rotate},100,110)`}>
            <path
              d="M100 110 
                 C 95 60, 75 30, 100 20 
                 C 125 30, 105 60, 100 110 Z"
              fill={p.color}
            />
          </g>
        ))}
      </svg>
      <div className="flex flex-col">
        <span className="text-lg font-bold text-gray-900 leading-none">Kiran's</span>
        <span className="text-[9px] text-primary-600 font-medium tracking-wider uppercase">Kiran Organic</span>
      </div>
    </div>
  );
};

export default Logo;
