const Footer = () => {
    const scrollToSection = (id: string) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    return (
      <footer
        className="relative flex items-center justify-around py-6 bg-black px-10 md:px-20"
        style={{
          backgroundImage: "url('/bg-second.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto flex flex-col items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Farida Fadilah. All Rights Reserved.
          </p>
          <div className="flex gap-4 mt-2">
            <button
              onClick={() => scrollToSection("about-me")}
              className="hover:text-gray-400"
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-gray-400"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-gray-400"
            >
              My Projects
            </button>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  