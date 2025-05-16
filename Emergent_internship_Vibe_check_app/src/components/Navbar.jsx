import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-zinc-900 text-white px-6 py-4 shadow-md flex justify-between items-center">
      <Link to='/'><h1 className="text-2xl font-bold text-purple-400">Vibe Check</h1></Link>
      <ul className="flex gap-6 text-lg">
        <li><Link to="/" className="hover:text-purple-400 transition">Home</Link></li>
        <li><Link to="/about" className="hover:text-purple-400 transition">About Me</Link></li>
        <li><Link to="/quiz" className="hover:text-purple-400 transition">Quiz</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;