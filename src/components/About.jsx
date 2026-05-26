import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiRedux,
  SiPostman,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const About = () => {
  const skills = [
    { title: "HTML5", icon: FaHtml5 },
    { title: "CSS3", icon: FaCss3Alt },
    { title: "Tailwind CSS", icon: SiTailwindcss },
    { title: "JavaScript", icon: SiJavascript },
    { title: "TypeScript", icon: SiTypescript },
    { title: "React.js", icon: FaReact },
    { title: "Redux Toolkit", icon: SiRedux },
    { title: "Node.js", icon: FaNodeJs },
    { title: "Express.js", icon: SiExpress },
    { title: "REST APIs", icon: SiPostman },
    { title: "MySQL", icon: SiMysql },
    { title: "MongoDB", icon: SiMongodb },
    { title: "Git", icon: FaGitAlt },
    { title: "GitHub", icon: FaGithub },
    { title: "VS Code", icon: VscVscode },
    { title: "Java", icon: FaJava },
    { title: "C", icon: null },
  ];

  return (
    <section
      name="about"
      className="w-full bg-transparent text-white py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADING */}
        <div className="mb-10 text-center sm:mb-14">
          <h2 className="inline-block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text pb-2 text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
            About Me
          </h2>

          <p className="mx-auto mt-4 max-w-2xl px-2 text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
            A glimpse into my technical expertise and technologies I work with.
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map(({ title, icon: Icon }) => (
            <div
              key={title}
              className="
                group
                flex items-center gap-2 sm:gap-4
                rounded-xl
                border border-cyan-500/20
                bg-white/5
                px-3 py-3 sm:px-5 sm:py-4
                backdrop-blur-md
                transition-all duration-300
                hover:-translate-y-1
                hover:border-cyan-400
                hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]
              "
            >
              {/* ICON */}
              <div
                className="
                  flex h-9 w-9 shrink-0 items-center justify-center
                  rounded-lg
                  bg-cyan-500/10
                  text-cyan-400
                  sm:h-11 sm:w-11
                "
              >
                {Icon ? (
                  <Icon
                    className="
                      text-lg
                      transition-transform duration-300
                      group-hover:scale-110
                      sm:text-2xl
                    "
                  />
                ) : (
                  <span className="text-base font-bold sm:text-xl">
                    C
                  </span>
                )}
              </div>

              {/* TITLE */}
              <span
                className="
                  text-xs
                  font-medium
                  text-gray-200
                  transition-colors
                  group-hover:text-white
                  sm:text-base
                "
              >
                {title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
