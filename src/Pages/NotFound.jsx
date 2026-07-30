import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, AlertTriangle } from "lucide-react";
import PageBanner from "../Components/PageBanner";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center relative overflow-hidden">

      
      <PageBanner
        title=""
        highlight=""
        description="The digital asset you are looking for has been moved, deleted, or
            never existed in this dimension."
        imageSrc="/pagenotfound.jpg"
        primaryBtn={{
          text: "Return to Base",
          link: "/",
        }}
        // secondaryBtn={{
        //   text: "Our Work",
        //   link: "/projects", // Updated to match your Navbar link
        // }}
      />
      {/* 3. Decorative Tech Elements (Bottom) */}
      <div className="absolute bottom-10 w-full flex justify-between px-10 text-[10px] text-white/20 font-mono uppercase tracking-widest pointer-events-none">
        <span>Error: 0x404_MISSING</span>
        <span>/ Zaynlo_System /</span>
        <span>Status: Disconnected</span>
      </div>
    </div>
  );
};

export default NotFound;

