import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-6 py-4 text-white">
      <Link to="/" className="text-lg font-bold text-red-400">Student Portal</Link>
      <div className="flex gap-6 text-slate-300">
        <Link to="/" className="hover:text-red-300">Home</Link>
        <Link to="/students" className="hover:text-red-300">Students</Link>
        <Link to="/faculties" className="hover:text-red-300">Faculty</Link>
      </div>
    </nav>
  );
}