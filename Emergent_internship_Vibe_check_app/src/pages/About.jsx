import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const About = () => {
  const [repos, setRepos] = useState([]);
  const username = "mananbagga"; // replace with your actual GitHub username

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(res => res.json())
      .then(data => {
        const filtered = data
          .filter(repo => !repo.fork && repo.description) // optional: skip forks and empty repos
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(filtered); // show all
      });
  }, []);  

  return (
    <div className="px-6 py-12 text-white max-w-6xl mx-auto">
      {/* Intro */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-purple-400 mb-4">👋 About the Developer</h1>
        <p className="text-zinc-300 text-lg leading-relaxed">
          Hi! I'm <strong>Manan Bagga</strong>, a frontend-focused developer passionate about building cool web experiences.
          I love experimenting with new ideas, tech, and vibes 😄. This project was built to show my personality and skills
          in 24 hours — and maybe land a great opportunity.
        </p>
      </div>

      {/* GitHub Repos */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-purple-300 mb-6">🛠 Projects from My GitHub</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map(repo => (
            <div key={repo.id} className="bg-zinc-800 p-4 rounded-xl shadow-md border border-zinc-700 hover:border-purple-600 transition">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </h3>
              <p className="text-zinc-400 text-sm mb-2">{repo.description}</p>
              <span className="text-xs text-zinc-500">Last updated: {new Date(repo.updated_at).toLocaleDateString()}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-purple-300 mb-4">📬 Let's Connect</h2>
        <div className="flex justify-center space-x-6 text-3xl">
          <a href="https://github.com/mananbagga" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/manan-bagga-893189247" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/manan_bagga_/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
            <FaInstagram />
          </a>
          <a href="https://wa.me/919784227907" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
            <FaWhatsapp />
          </a>
        </div>
        <p className="mt-4 text-zinc-400">Email: <a href="mailto:mananbagga0310@gmail.com" className="text-purple-300 underline">mananbagga0310@gmail.com</a></p>
      </div>
    </div>
  );
};

export default About;
