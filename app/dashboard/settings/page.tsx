"use client";
import { useRouter } from "next/navigation";
import React from "react";
function page() {
  const route = useRouter();
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <button
        onClick={() => route.push("/dashboard")}
        className="bg-blue-400 rounded px-2 py-1 text-white"
      >
        Back
      </button>
      <h1>Settings</h1>
    </div>
  );
}

export default page;
