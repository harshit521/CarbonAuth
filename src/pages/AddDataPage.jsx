import { useState } from "react";

export default function AddDataPage() {
  const [inputs, setInputs] = useState({
    electricity: "",
    diesel: "",
    transport: "",
  });

  const handleChange = (key, value) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="text-text">

      {/* TOP BADGE */}
      <div className="flex justify-center mb-6">
        <div className="flex items-center gap-2 bg-green/10 border border-border2 px-5 py-2 rounded-full text-xs font-mono tracking-widest text-green">
          ● LIVE LEDGER INPUT SESSION
        </div>
      </div>

      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h1 className="text-[52px] font-bold">Data Input Protocol</h1>

        <p className="text-text2 mt-4 text-[15px] leading-7">
          Quantify your environmental impact by recording operational metrics.
          These values are cryptographically hashed and verified against the global CarbonVault network.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-[1fr_320px] gap-6">

        {/* LEFT FORM */}
        <div>

          {/* FIELD */}
          {[
            {
              key: "electricity",
              label: "Electricity Consumption",
              sub: "Grid power usage from registered facilities",
              unit: "KWH",
              icon: "⚡",
            },
            {
              key: "diesel",
              label: "Diesel Usage",
              sub: "Generators and onsite machinery logistics",
              unit: "LITERS",
              icon: "🛢",
            },
            {
              key: "transport",
              label: "Corporate Transport",
              sub: "Aggregate employee travel and logistics",
              unit: "KILOMETERS",
              icon: "🚌",
            },
          ].map((f) => (
            <div key={f.key} className="mb-8">

              <div className="text-sm font-semibold mb-1">{f.label}</div>
              <div className="text-xs text-text2 mb-3">{f.sub}</div>

              <div className="flex items-center bg-bg3 border border-border rounded-lg px-4 py-4 focus-within:border-green transition">
                
                <span className="text-green text-lg mr-3">{f.icon}</span>

                <input
                  type="number"
                  placeholder="0.00"
                  value={inputs[f.key]}
                  onChange={(e) => handleChange(f.key, e.target.value)}
                  className="flex-1 bg-transparent outline-none text-xl font-semibold"
                />

                <span className="text-xs text-text3 font-mono tracking-widest">
                  {f.unit}
                </span>
              </div>
            </div>
          ))}

          {/* LEDGER BOX */}
          <div className="bg-bg3 border border-border rounded-lg px-4 py-4 flex items-center gap-3 mb-6">
            <span className="text-xl">⚙️</span>
            <div>
              <div className="text-sm font-semibold">Ledger Integrity</div>
              <div className="text-xs text-green font-mono">
                HASH READY: SHA-256
              </div>
            </div>
          </div>

          {/* SUBMIT BOX */}
          <div className="bg-card border border-border rounded-xl p-6 text-center">

            <div className="text-xs font-mono text-text3 tracking-widest mb-2">
              SUBMISSION AUTHENTICATION REQUIRED
            </div>

            <p className="text-text2 text-sm mb-6">
              Clicking the button below will lock these values into the immutable audit trail.
            </p>

            <button className="w-full bg-green text-black py-4 rounded-lg font-bold hover:bg-green2 transition">
              🔒 GENERATE SECURE REPORT →
            </button>
          </div>

        </div>

        {/* RIGHT PANEL */}
        <div className="bg-card border border-border rounded-xl p-6 sticky top-[80px]">

          <div className="text-xs font-mono text-text3 tracking-widest mb-4">
            REAL-TIME IMPACT PREVIEW
          </div>

          <div className="text-5xl font-bold text-green">
            8.42 <span className="text-sm">mT</span>
          </div>

          <div className="text-text2 text-sm mb-6">CO2e</div>

          {/* Scope 1 */}
          <div className="mb-4">
            <div className="flex justify-between text-xs text-text2 mb-1">
              <span>SCOPE 1 (DIRECT)</span>
              <span>0.00 mT</span>
            </div>

            <div className="h-[3px] bg-border rounded">
              <div className="w-[30%] h-full bg-green rounded"></div>
            </div>
          </div>

          {/* Scope 2 */}
          <div className="mb-4">
            <div className="flex justify-between text-xs text-text2 mb-1">
              <span>SCOPE 2 (INDIRECT)</span>
              <span>0.00 mT</span>
            </div>

            <div className="h-[3px] bg-border rounded">
              <div className="w-[20%] h-full bg-cyan-400 rounded"></div>
            </div>
          </div>

          {/* FORECAST BOX */}
          <div className="bg-green/10 border border-border2 rounded-lg p-4 mt-6">
            <div className="text-xs font-mono text-green tracking-widest mb-1">
              ⊙ FORECAST ACCURACY
            </div>

            <p className="text-xs text-text2">
              Calculations are based on 2024 IPCC Emission Factor Protocols for region EMEA-WEST.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}