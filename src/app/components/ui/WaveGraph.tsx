export default function WaveGraph({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full h-[200px] relative ${className}`}>
      <svg
        viewBox="0 0 400 200"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0 150 C100 100, 200 180, 400 120 L400 200 L0 200 Z"
          fill="url(#gradient)"
          opacity="0.2"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#6366F1" }} />
            <stop
              offset="100%"
              style={{ stopColor: "#6366F1", stopOpacity: 0.1 }}
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
