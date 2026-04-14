import EmissionChart from "../components/EmissionChart";

export default function DashboardPage() {
  return (
    <div className="text-text">

      {/* TOP BADGE */}
      <div className="flex justify-center mb-6">
        <div className="flex items-center gap-2 bg-green/10 border border-border2 px-4 py-2 rounded-full text-xs font-mono tracking-widest text-green">
          <div className="w-2 h-2 bg-green rounded-full animate-pulse"></div>
          CURRENT OBSERVATORY STATUS
        </div>
      </div>

      {/* HEADER SECTION */}
      <div className="flex justify-between items-start mb-10">

        {/* LEFT TEXT */}
        <div className="max-w-2xl">
          <h1 className="text-[56px] font-bold leading-tight">
            Environmental Impact <br />
            Precision Ledger
          </h1>

          <p className="text-text2 mt-4 text-[15px] leading-7">
            Your real-time neural network for carbon verification. Monitoring 1,420 data
            points across your infrastructure with cryptographic certainty.
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-card border border-border rounded-xl p-6 w-65 shadow-[0_0_30px_#00e67620]">
          <div className="text-[10px] font-mono text-text3 tracking-widest mb-2">
            TOTAL EMISSIONS
          </div>

          <div className="flex items-end gap-2">
            <div className="text-[48px] font-bold text-green">4,821</div>
            <div className="text-text2 text-sm mb-2">tCO₂e</div>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <div className="bg-green/20 text-green px-3 py-1 rounded text-xs font-semibold">
              ▼ 12.4%
            </div>
            <span className="text-text3 text-xs">
              vs. Previous Fiscal Year
            </span>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-6 mb-8">

        {/* CARD 1 */}
        <div className="bg-card border border-border rounded-xl p-6 flex items-center gap-4">
          <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center text-xl">
            ⚡
          </div>

          <div className="flex-1">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold">1,240</span>
              <span className="text-xs text-text2">tCO₂e</span>
            </div>

            <div className="text-sm text-text2 mt-1">Electricity</div>

            <div className="mt-2 h-0.75 bg-border rounded">
              <div className="w-[40%] h-full bg-green rounded"></div>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="bg-card border border-border rounded-xl p-6 flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center text-xl">
            🛢
          </div>

          <div className="flex-1">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold">2,510</span>
              <span className="text-xs text-text2">tCO₂e</span>
            </div>

            <div className="text-sm text-text2 mt-1">Fuel</div>

            <div className="mt-2 h-0.75 bg-border rounded">
              <div className="w-[65%] h-full bg-cyan-400 rounded"></div>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="bg-card border border-border rounded-xl p-6 flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center text-xl">
            ✈
          </div>

          <div className="flex-1">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold">1,071</span>
              <span className="text-xs text-text2">tCO₂e</span>
            </div>

            <div className="text-sm text-text2 mt-1">Transport</div>

            <div className="mt-2 h-0.75 bg-border rounded">
              <div className="w-[30%] h-full bg-purple-400 rounded"></div>
            </div>
          </div>
        </div>

      </div>

      {/* CHART */}
      <div className="bg-card border border-border rounded-xl p-6">

        <div className="flex justify-between items-center mb-6">

          <div>
            <div className="text-lg font-semibold">Emission Trajectory</div>
            <div className="text-xs text-text3">
              12-Month Verification Cycle Portfolio
            </div>
          </div>

          <div className="flex gap-2 text-sm">
            <button className="text-text2">Daily</button>
            <button className="text-text2">Monthly</button>
            <button className="bg-green text-black px-3 py-1 rounded">
              Annually
            </button>
          </div>
        </div>

        <EmissionChart />
      </div>

    </div>
  );
}