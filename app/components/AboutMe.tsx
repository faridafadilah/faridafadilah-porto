import { FlipWords } from "../lib/flip-word";
import { InfiniteMovingTexts } from "~/lib/invinite-text";

const words = ["powerful", "scalable", "efficient"];

export default function AboutMe() {
  return (
    <div
      className="relative flex flex-col md:flex-row items-center justify-center md:justify-around min-h-screen bg-black px-6 md:px-20 py-10"
      style={{
        backgroundImage: "url('/img/bg-light.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-lg text-center md:text-left text-white">
        <h1 className="text-xl md:text-2xl font-bold">
          I'm a Backend Developer & Software Engineer based in West Java.
          <span className="block mt-1">
            Building <FlipWords words={words} /> systems while embracing
            every challenge with logic and precision.
          </span>
        </h1>

        <p className="text-gray-400 text-sm md:text-base mt-4 italic">
          With 3 years of experience, I specialize in backend development—building
          robust APIs, optimizing databases, and ensuring seamless performance.
          But I’m not limited to the backend. My versatility in multiple languages
          allows me to adapt to frontend development, making me capable of fullstack work.
        </p>

        <p className="text-gray-400 text-sm md:text-base mt-4 italic">
          I thrive on writing clean, maintainable code while solving complex problems.
          From debugging tricky issues to optimizing performance, I tackle every challenge
          to build efficient, scalable, and long-lasting systems.
        </p>
      </div>

      <div className="relative max-w-xs mt-10 md:mt-0">
        <img
          src="/img/profile.png"
          alt="Profile"
          className="w-40 md:w-full object-cover rounded-lg shadow-lg brightness-[0.50] contrast-135"
        />
        <div className="absolute -bottom-16 inset-x-0 bg-gradient-to-t from-black from-70% to-transparent rounded-lg shadow-lg h-32 md:h-40 z-0 items-end">
          <InfiniteMovingTexts direction="right" speed="slow" />
        </div>
      </div>
    </div>
  );
}
