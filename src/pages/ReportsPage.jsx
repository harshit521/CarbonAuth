export default function ReportsPage() {
  return (
    <div className="text-text">

      {/* TOP BADGE */}
      <div className="flex justify-center mb-6">
        <div className="flex items-center gap-2 bg-green/10 border border-border2 px-5 py-2 rounded-full text-xs font-mono tracking-widest text-green">
          ✓ VERIFIED LEDGER ENTRY
        </div>
      </div>

      {/* HEADER */}
      <div className="flex justify-between items-start mb-10">

        <div className="max-w-2xl">
          <h1 className="text-[52px] font-bold leading-tight">
            Q4 ESG Compliance Report
          </h1>

          <p className="text-text2 mt-4 text-[15px] leading-7">
            Full atmospheric carbon audit for decentralized node operations.
            This document serves as a cryptographically signed proof of environmental neutrality.
          </p>
        </div>

        <div className="text-right">
          <div className="bg-green text-black px-5 py-2 rounded-full text-sm font-bold inline-block">
            ✓ VERIFIED
          </div>
          <div className="text-text3 text-xs mt-2 font-mono">
            ISSUED: 24_NOV_2024
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 gap-6 mb-6">

        {/* INPUT SUMMARY */}
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="text-xs font-mono text-text3 tracking-widest mb-4">
            INPUT SUMMARY
          </div>

          {[
            ["Data Source", "IoT Sensor Array_07"],
            ["Duration", "90 Days (Q4)"],
            ["Primary Metric", "Metric Tons CO2e"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between py-3 border-b border-border last:border-none">
              <span className="text-text2 text-sm">{k}</span>
              <span className="font-mono text-sm">{v}</span>
            </div>
          ))}

          <div className="flex justify-between pt-3">
            <span className="text-text2 text-sm">Oracle Status</span>
            <span className="bg-green/20 text-green px-3 py-1 rounded text-xs font-semibold">
              ● Trusted Link
            </span>
          </div>
        </div>

        {/* SCOPE 1 + 2 */}
        <div className="flex flex-col gap-4">

          {/* Scope 1 */}
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="text-xs text-text3 font-mono mb-2">SCOPE 1</div>

            <div className="text-3xl font-bold text-green">
              12.4 <span className="text-sm">MT</span>
            </div>

            <div className="text-text2 text-sm mt-1">
              Direct combustion sources
            </div>

            <div className="mt-3 h-0.75 bg-border rounded">
              <div className="w-[20%] h-full bg-green rounded"></div>
            </div>
          </div>

          {/* Scope 2 */}
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="text-xs text-text3 font-mono mb-2">SCOPE 2</div>

            <div className="text-3xl font-bold text-cyan-400">
              314.2 <span className="text-sm">MT</span>
            </div>

            <div className="text-text2 text-sm mt-1">
              Purchased electricity
            </div>

            <div className="mt-3 h-0.75 bg-border rounded">
              <div className="w-[70%] h-full bg-cyan-400 rounded"></div>
            </div>
          </div>

        </div>
      </div>

      {/* TOTAL + SCOPE 3 */}
      <div className="grid grid-cols-2 gap-6 mb-6">

        {/* TOTAL */}
        <div className="bg-card border border-border rounded-xl p-8 text-center">
          <div className="text-xs font-mono text-text3 mb-2 tracking-widest">
            TOTAL MT CO2E
          </div>

          <div className="text-[72px] font-bold text-green">
            428.6
          </div>

          <div className="text-text2 text-sm">
            Metric Tons CO₂e
          </div>
        </div>

        {/* SCOPE 3 */}
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="text-xs text-text3 font-mono mb-2">SCOPE 3</div>

          <div className="text-3xl font-bold text-purple-400">
            102.0 <span className="text-sm">MT</span>
          </div>

          <div className="text-text2 text-sm mt-1">
            Supply chain and business travel
          </div>

          <div className="mt-3 flex items-center gap-2">
            <span className="bg-green/20 text-green px-3 py-1 rounded text-xs font-semibold">
              ▼ -8% YoY
            </span>
          </div>

          <div className="mt-3 h-0.75 bg-border rounded">
            <div className="w-[25%] h-full bg-purple-400 rounded"></div>
          </div>
        </div>

      </div>

      {/* SECURITY CERTIFICATE */}
      <div className="bg-card border border-border rounded-xl p-6 flex justify-between items-center">

        <div className="max-w-2xl">
          <div className="text-lg font-semibold mb-2">
            🔐 Security Certificate
          </div>

          <p className="text-text2 text-sm mb-4">
            This report is cryptographically sealed using a Merkle Root hash on the CarbonVault Mainnet.
            Any alteration to the source data will invalidate this signature.
          </p>

          <div className="text-xs font-mono text-text3 mb-2 tracking-widest">
            UNIQUE DIGITAL SIGNATURE (SHA-256)
          </div>

          <div className="bg-bg3 border border-border rounded-lg px-4 py-3 font-mono text-sm text-green break-all">
            0x442B_C8E2_F9A1_B4D7_7E32_9E0F_B112_DA67_FF01_A883
          </div>
        </div>

        {/* QR */}
        <div className="w-35 text-center">
          <div className="w-30 h-30 bg-bg3 border border-border rounded-lg flex items-center justify-center text-4xl mx-auto mb-2">
            📱
          </div>

          <div className="text-xs text-text3 font-mono">
            SCAN TO VERIFY
          </div>

          <div className="text-xs text-text3 font-mono mt-1">
            ID: CV-990-24
          </div>
        </div>

      </div>

    </div>
  );
}