import { FaCoffee } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-accent/20">
      <div className="container mx-auto text-center">
        <p className="text-white/60">
          © 2025 Minh Mai. Built with Next.js and lots of {" "}
          <span className="text-accent">
            <FaCoffee className="inline w-2 h-2"/>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;