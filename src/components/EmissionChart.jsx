export default function EmissionChart() {
  return (
    <svg viewBox="0 0 600 200" className="w-full h-50">
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00e676" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#00e676" stopOpacity="0" />
        </linearGradient>
      </defs>

      <polygon
        points="0,180 80,140 160,120 240,150 320,110 400,90 480,100 560,60 600,40 600,200 0,200"
        fill="url(#grad)"
      />

      <polyline
        points="0,180 80,140 160,120 240,150 320,110 400,90 480,100 560,60 600,40"
        fill="none"
        stroke="#00e676"
        strokeWidth="3"
      />
    </svg>
  );
}