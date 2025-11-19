interface CircleProgressProps {
  score: number; 
  size?: number; 
  strokeWidth?: number;
}


function ScoreCircle({
  score,
  size = 40,
  strokeWidth = 5,
}: CircleProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference

  return (

    <div className="flex flex-col items-center  justify-center">
      <svg width={size} height={size} className="transform  -rotate-90  ">
        {/* Background circle */}
        <circle
          stroke="#e5e7eb" 
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        {/* Progress circle */}
        <circle
          stroke="url(#gradient)"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          className="transition-all duration-500"
        />
        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ABBC95" />
            <stop offset="50%" stopColor="#000000" />
            <stop offset="100%" stopColor="#8E97C5" />
          </linearGradient>
        </defs>
      </svg>
      {/* Score text */}
      <span className="absolute text-xs  font-semibold text-gray-700">
        {score}%
      </span>
    </div>
  );
}

export default ScoreCircle