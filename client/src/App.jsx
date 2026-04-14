import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import AddDataPage from "./pages/AddDataPage";
import ReportsPage from "./pages/ReportsPage";
import VerifyPage from "./pages/VerifyPage";

export default function App() {
  const [page, setPage] = useState("landing");

  return (
    <div className="bg-bg text-text min-h-screen font-sans">
      {page === "landing" ? (
        <LandingPage onEnter={() => setPage("dashboard")} setPage={setPage} />
      ) : (
        <div className="flex">
          <Sidebar page={page} setPage={setPage} />

          <div className="flex-1 ml-[240px]">
            <Topbar page={page} setPage={setPage} />

            <div className="mt-[60px] p-8">
              {page === "dashboard" && <DashboardPage />}
              {page === "adddata" && <AddDataPage />}
              {page === "reports" && <ReportsPage />}
              {page === "verify" && <VerifyPage />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
