export default function LandingPage({ onEnter, setPage }) {
  return (
    <div className="bg-bg text-text min-h-screen relative overflow-hidden">
      {/* NAVBAR */}
      <div className="fixed top-0 left-0 right-0 h-15 bg-[#0a0f0aee] backdrop-blur-md border-b border-border flex items-center justify-between px-12 z-50">
        <div className="text-green font-bold text-lg tracking-wide">
          CARBONAUTH
        </div>

        <div className="flex gap-8 text-sm text-text2">
          <span
            className="hover:text-green cursor-pointer"
            onClick={() => setPage("dashboard")}
          >
            Platform
          </span>
          <span
            className="hover:text-green cursor-pointer"
            onClick={() => setPage("verify")}
          >
            Verification
          </span>
          <span
            className="hover:text-green cursor-pointer"
            onClick={() => setPage("reports")}
          >
            Intelligence
          </span>
        </div>
      </div>

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_70%_40%,#00e67610,transparent_70%)]"></div>

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(#1f2e1f_1px,transparent_1px),linear-gradient(90deg,#1f2e1f_1px,transparent_1px)] bg-size-[40px_40px]"></div>
      </div>

      {/* HERO */}
      <div className="min-h-screen flex items-center justify-between px-20 pt-24 gap-12 relative z-10">
        {/* LEFT TEXT */}
        <div className="max-w-xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-green/10 border border-border2 px-4 py-1 rounded-full text-xs font-mono text-green tracking-widest mb-6">
            <div className="w-2 h-2 bg-green rounded-full animate-pulse"></div>
            REAL-TIME VERIFICATION ACTIVE
          </div>

          {/* Title */}
          <h1 className="text-[64px] font-bold leading-[1.05] mb-6">
            Trust Your <br />
            <span className="text-green">Carbon Data</span>
          </h1>

          {/* Subtitle */}
          <p className="text-text2 text-base leading-7 mb-10">
            Tamper-proof, verifiable carbon emission tracking for modern
            organizations. Leverage decentralized ledgers to ensure absolute
            environmental transparency.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={onEnter}
              className="bg-green text-black px-7 py-3 rounded-lg font-bold text-sm hover:bg-green2 transition shadow-lg shadow-green/20"
            >
              Generate Report
            </button>

            <button
              onClick={onEnter}
              className="border border-border2 px-7 py-3 rounded-lg text-sm hover:border-green hover:text-green transition"
            >
              Verify Report
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-10">
            <div>
              <div className="text-green text-xl font-bold">1.2M Tons</div>
              <div className="text-text3 text-xs mt-1">
                TOTAL OFFSET MANAGED
              </div>
            </div>

            <div>
              <div className="text-green text-xl font-bold">99.9%</div>
              <div className="text-text3 text-xs mt-1">
                VERIFICATION ACCURACY
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT DASHBOARD */}
        <div className="w-110">
          <div className="bg-card border border-border rounded-2xl p-5 shadow-2xl">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-green text-xs font-mono">
                NODE_0X442B_LIVE
              </div>
            </div>

            {/* Metric */}
            <div className="text-xs text-text3 font-mono mb-1">
              CURRENT INTELLIGENCE
            </div>

            <div className="text-4xl font-bold text-green">842.04</div>

            <div className="text-xs text-green mt-1">▲ +12.5% vs baseline</div>

            {/* Rows */}
            <div className="mt-4 space-y-2">
              <div className="bg-bg3 rounded-lg p-3 flex justify-between items-center">
                <div>
                  <div className="text-[10px] text-text3 font-mono">
                    NETWORK LOAD
                  </div>
                  <div className="w-24 h-1 bg-border mt-1 rounded">
                    <div className="w-[60%] h-full bg-green rounded"></div>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-1 bg-green/10 text-green rounded font-mono">
                  ENCRYPTED
                </span>
              </div>

              <div className="bg-bg3 rounded-lg p-3 flex justify-between items-center">
                <div className="text-sm text-text2">Oracle Protocol V4</div>
                <span className="text-[10px] px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded font-mono">
                  SECURE
                </span>
              </div>

              <div className="bg-bg3 rounded-lg p-3 flex justify-between items-center">
                <div className="text-sm text-text2">IoT Stream #104</div>
                <span className="text-[10px] px-2 py-1 bg-yellow-400/20 text-yellow-400 rounded font-mono">
                  PENDING
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="px-20 py-20">
        <h2 className="text-4xl font-bold text-center mb-2">
          Built for the Global Transition
        </h2>

        <p className="text-text2 text-center mb-12">
          Institutional-grade security meets real-time environmental
          intelligence.
        </p>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-card2 border border-border rounded-xl p-6 col-span-2 row-span-2">
            <div className="text-2xl mb-3">🌍</div>
            <h3 className="text-lg font-semibold mb-2">Global Intelligence</h3>
            <p className="text-text2 text-sm">
              Worldwide sensor network delivering unmatched carbon insights.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            🔒 Immutable Ledger
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            🛡 Zero Trust
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            📊 Smart Reports
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            ⚡ Real-Time Sync
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="border-t border-border px-20 py-6 flex justify-between">
        <div>
          <div className="text-green font-bold">CARBONAUTH</div>
        </div>

        <div className="flex gap-6 text-xs text-text3">
          <span className="hover:text-green cursor-pointer">Privacy</span>
          <span className="hover:text-green cursor-pointer">Terms</span>
          <span className="hover:text-green cursor-pointer">API</span>
        </div>
      </div>
    </div>
  );
}
