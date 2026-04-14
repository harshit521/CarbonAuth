export default function Sidebar({ page, setPage, onGenerate, generating }) {
  const items = [
    { id: "dashboard", label: "Dashboard", icon: "⬚" },
    { id: "adddata", label: "Add Data", icon: "+" },
    { id: "reports", label: "Reports", icon: "≡" },
    { id: "verify", label: "Verify", icon: "🛡" },
  ];

  return (
    <div className="fixed left-0 top-0 bottom-0 w-60 bg-bg2 border-r border-border flex flex-col justify-between">

      {/* TOP SECTION */}
      <div>

        {/* BRAND */}
        <div className="px-5 py-6 border-b border-border">
          <div className="text-green font-bold text-[20px] tracking-wide">
            CarbonAuth
          </div>
          <div className="text-text3 text-[10px] font-mono mt-1 tracking-[2px]">
            VERIFICATION_ID: 0X442B
          </div>
        </div>

        {/* NAV */}
        <div className="px-3 py-4 space-y-2">

          {items.map((item) => {
            const isActive = page === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setPage(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all text-sm font-medium
                  ${
                    isActive
                      ? "bg-gradient-to-r from-green/20 to-green/10 text-green border border-border2"
                      : "text-text2 hover:bg-green/5"
                  }`}
              >
                <span
                  className={`text-lg ${
                    isActive ? "text-green" : "text-text3"
                  }`}
                >
                  {item.icon}
                </span>

                {item.label}
              </div>
            );
          })}
        </div>
      </div>

      {/* BOTTOM SECTION (UNCHANGED BUTTON STYLE) */}
      <div className="p-4 border-t border-border">

        <button
          onClick={onGenerate}
          disabled={generating}
          className="w-full bg-green text-black py-3 rounded-lg font-bold text-sm hover:bg-green2 transition"
        >
          {generating ? "GENERATING..." : "GENERATE REPORT"}
        </button>
      </div>
    </div>
  );
}