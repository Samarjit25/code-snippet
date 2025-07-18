import {
  Linkedin,
  Twitter,
  Github,
  Globe,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 text-center text-gray-600 text-sm">
      <div className="container mx-auto px-12 flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Left side - Author credit */}
        <div className="flex items-center gap-2">
          <span>© Samarjit Roy</span>
        </div>

        {/* Right side - Social links */}
        <div className="flex gap-4">
          <a
            href="https://linkedin.com/in/samarjit-roy-368071257/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://x.com/SamarjitRoy25"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://github.com/Samarjit25"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://samarjit-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
            aria-label="Portfolio"
          >
            <Globe size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
