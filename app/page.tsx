
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid  items-center justify-items-center min-h-screen  pb-2 gap-2">
      <h1>Boopathi Rk</h1>
      <Link className="bg-blue-400 rounded px-2 py-1 text-white" href="dashboard">Dashboard </Link>
      <Link className="bg-blue-400 rounded px-2 py-1 text-white" href="dashboard/settings">Settings </Link>
    </div>
  );
}
