export default function Topbar({ page, setPage }) {
  const sections = ["Platform", "Verification", "Intelligence"];
  const map = {
    Platform: "dashboard",
    Verification: "verify",
    Intelligence: "reports",
  };

  return (
    <div className="fixed left-60 right-0 top-0 h-15 bg-bg2 border-b border-border flex items-center justify-between px-8 z-40">
      
      <div className="flex gap-4">
        {sections.map((s) => (
          <div
            key={s}
            onClick={() => setPage(map[s])}
            className={`cursor-pointer px-4 py-1 rounded text-sm ${
              page === map[s]
                ? "text-green border-b-2 border-green"
                : "text-text2"
            }`}
          >
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}