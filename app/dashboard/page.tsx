"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Dashboard() {
  const router = useRouter();
  const back = () => {
    router.push("/");
  };
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-2 gap-2 sm:p-5">
      <button
        onClick={back}
        className="bg-blue-400 rounded px-2 py-1 text-white"
      >
        Back
      </button>
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;

// "use client";
// import { useRouter } from "next/navigation";
// import React from "react";

// function Dashboard() {
//   const router = useRouter();
//   const back = () => {
//     router.push("dashboard");
//   };
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-2 gap-2 sm:p-5">
//       <button
//         onClick={back}
//         className="bg-blue-400 rounded px-2 py-1 text-white"
//       >
//         Back
//       </button>
//       <h1>Dashboard</h1>
//     </div>
//   );
// }

// export default Dashboard;
