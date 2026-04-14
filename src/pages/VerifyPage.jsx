import { useState } from "react";

export default function VerifyPage() {
  const [verifyId, setVerifyId] = useState("");

  return (
    <div className="text-text flex flex-col items-center">

      {/* TOP BADGE */}
      <div className="mb-6">
        <div className="flex items-center gap-2 bg-green/10 border border-border2 px-5 py-2 rounded-full text-xs font-mono tracking-widest text-green">
          INTEGRITY PROTOCOL V2.4
        </div>
      </div>

      {/* TITLE */}
      <h1 className="text-[56px] font-bold text-center leading-tight mb-10">
        Digital <br />
        <span className="text-green">Ledger Verification</span>
      </h1>

      {/* MAIN GRID */}
      <div className="grid grid-cols-2 gap-6 w-full max-w-5xl">

        {/* INPUT CARD */}
        <div className="bg-card border border-border rounded-2xl p-8 flex items-center gap-4 shadow-[0_0_40px_#00e67610]">

          <input
            value={verifyId}
            onChange={(e) => setVerifyId(e.target.value)}
            placeholder="CV-REP-2024-9981-X"
            className="flex-1 bg-bg3 border border-border rounded-lg px-5 py-4 text-sm font-mono outline-none focus:border-green"
          />

          <button className="bg-green text-black px-6 py-4 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-green2 transition">
            🛡 VERIFY
          </button>
        </div>

        {/* DROP ZONE */}
        <div
          className="border-2 border-dashed border-border rounded-2xl p-8 flex flex-col items-center justify-center text-center text-text2 hover:border-green hover:bg-green/5 transition cursor-pointer"
        >
          <div className="text-4xl mb-2">📄</div>

          <div className="text-sm font-medium">
            Drag & Drop JSON Artifacts
          </div>

          <div className="text-xs text-text3 mt-1 font-mono">
            MAX SIZE: 12MB
          </div>
        </div>

      </div>
    </div>
  );
}