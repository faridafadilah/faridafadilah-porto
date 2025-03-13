import { motion } from "framer-motion";
import { FollowerPointerCard } from "~/lib/following-pointer";

const skills = [
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } },
    { name: ".NET", logo: "img/net.png", animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } },
    { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } },
    { name: "Dart", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg", animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } },
    { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } },
    { name: "Node.js", logo: "img/node.png", animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } },
    { name: "RabbitMQ", logo: "img/rabbitmq.svg" , animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", animation: { rotate: [0, 360], transition: { repeat: Infinity, duration: 5, ease: "linear" } } },
    { name: "Express.js", logo: "img/ex.png", animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } },
    { name: "NestJS", logo: "https://nestjs.com/img/logo-small.svg", animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } },
    { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } },
    { name: "AWS", logo: "img/aws.png", animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } },
    { name: "Redis", logo: "img/redis.png", animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } },
    { name: "Ruby on Rails", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg", animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } },
    { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } },
    { name: "GitHub", logo: "img/github.png", animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } },
    { name: "GitLab", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } },
    { name: "SQL Server", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } },
    { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } },
    { name: "Material UI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg", animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } },
    { name: "TailwindCSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } },
    { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } },
    { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } },
    { name: "Laravel", logo: "img/laravel.svg", animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } },
  ];
  
export default function Skill() {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen py-12 bg-black px-6 sm:px-10 md:px-20"
      style={{ backgroundColor: "black", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Skills</h2>
        <p className="text-gray-400 text-sm sm:text-base mb-6">
          I've been programming for over three years, gaining experience with a variety of programming languages, frameworks, and tools.
          I've worked on both Frontend and Backend technologies, allowing me to understand and contribute to the entire development process.
        </p>
  
        <motion.div
          className="p-4 sm:p-6 rounded-lg shadow-lg bg-gray-800/50 backdrop-blur-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="p-2 flex justify-center items-center"
                animate={skill.animation}
                whileHover={{ scale: 1.2 }}
              >
                <FollowerPointerCard
                  title={
                    <TitleComponent title={skill.name} avatar={skill.logo} />
                  }
                >
                  <img src={skill.logo} alt={skill.name} className="w-12 sm:w-14 h-12 sm:h-14" />
                </FollowerPointerCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );  
  
}


const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <img
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);