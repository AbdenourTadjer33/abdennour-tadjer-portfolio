import React from "react";
import Navbar from "@/components/common/navbar";
import { Outlet } from "@tanstack/react-router";
import Footer from "@/components/common/footer";

const AppLayout: React.FC = () => {
  return (
    <div className="mx-auto max-w-screen-xl bg-white">
      <Navbar />
      <main className="mt-14 p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
