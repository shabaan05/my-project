import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <header className="bg-white shadow-md rounded-xl p-4 mb-6">
          <h1 className="text-2xl font-bold text-green-700">Food Donation Dashboard</h1>
        </header>

        {/* Render Page Content */}
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
