import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function Layout() {
  return (
    <div className="flex">
      {/* Sidebar fixed */}
      <Sidebar />

      {/* Main content changes via Outlet */}
      <div className="flex-1 h-screen w-full bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(173,216,230,1)_40%,rgba(135,206,250,1)_100%)] p-6">
        <Outlet />
      </div>
    </div>
  );
}
