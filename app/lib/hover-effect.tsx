import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { cn } from "~/lib/utils";
import { Link } from "@remix-run/react"; // Import Link dari Remix

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          to={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};


export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};



// {/* <div className="max-w-5xl mx-auto px-8">
//         <h2 className="text-3xl font-bold mt-5 text-center">Work Experience</h2>
//           <HoverEffect items={projects} />
//         </div> */}
//         export const projects = [
//           {
//             title: "ITB, 2020",
//             description:
//               "Internship as a Mobile Developer, building mobile applications using the Flutter framework. Designed mockups using Figma and contributed to the development of a COVID-19 tracking app.",
//             link: "https://itb.ac.id",
//           },
//           {
//             title: "CV Nineod, 2022",
//             description:
//               "Frontend Developer specializing in React.js. Responsible for developing user interfaces and converting designs into responsive HTML and CSS.",
//             link: "https://nineod.com",
//           },
//           {
//             title: "PT Kiranatama, 2023",
//             description:
//               "Backend Developer with experience in supporting frontend development. Skilled in building server-side applications while assisting in UI implementation when needed.",
//             link: "https://www.emveep.com",
//           }
//         ];