import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import LandingPage from "~/components/LandingPage";
import AboutMe from "~/components/AboutMe";
import Skill from "~/components/Skill";
import { MyJourney } from "~/components/MyJouney";
import Footer from "~/components/Footer";
import { ContactMe } from "~/components/ContactMe";

export default function Index() {
  const controls = useAnimation();
  const landingControls = useAnimation();
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;

      if (scrollPos > 50) {
        setScrolling(true);
        controls.start({ y: 0, opacity: 1 });
        landingControls.start({ opacity: 0 });
      } else {
        setScrolling(false);
        controls.start({ y: "100%", opacity: 0 });
        landingControls.start({ opacity: 1 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, landingControls]);

  return (
    <div className="relative bg-black">
      <LandingPage />

      <div id="about-me">
        <AboutMe />
      </div>

      <div>
        <Skill />
      </div>

      <div id="projects">
        <MyJourney />
      </div>

      <div className="h-[50rem] w-full dark:bg-black bg-white dark:bg-grid-yellow-600/[0.2] bg-grid-yellow-600/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"> 
          <ContactMe />
        </p>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}