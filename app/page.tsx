import Project from "@/app/ui/project";
import LinkButton from "@/app/ui/link-button";
import Header from "@/app/ui/header";

type Project = {
  title: string;
  desc: string;
};

const projects: Project[] = [
  {
    title: "A Platform for Viewing, Downloading, and Creating Memes",
    desc: " A platform that allows users to browse, view, download, and even  create their own memes. Users can choose from a wide variety of templates or upload their own images, add custom text, and generate their own memes to share with the community",
  },

  {
    title: "Synchronized Video Streaming Platform ",
    desc: "  A web application that allows multiple users to watch the same video simultaneously in real time. Users can share a video link, sync playback, and chat with each other while watching. The goal  was to create a shared viewing experience, whether for watching videos or movies with friends remotely",
  },
  {
    title: "A Web-Based Inventory Management System",
    desc: " A robust platform designed to help businesses track and manage their inventory in real time. It allows users to add, edit, and monitor stock levels, track product sales, and manage suppliers. The system also generates reports on stock movement, sales trends, and reorder levels.",
  },
];

const technologies: string[] = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Bootstrap",
  "SQL",
  "Node.js",
  "Express",
  "Jest",
  "Git",
  "Webpack",
];

const tools: string[] = [
  "Convex",
  "Clerk",
  "Vite",
  "Figma",
  "AWS Amplify",
  "Vercel",
  "Netlify",
];

export default function Home() {
  return (
    <>
      <Header />
      <div className=" w-full md:px-24 lg:flex-row lg:px-12 lg:gap-16 px-6 py-12 text-white flex flex-col justify-center gap-8">
        <div className="flex flex-col gap-8">
          {/* Profile */}
          <div>
            <h2 className="shiny-text text-3xl font-semibold">Xander Wayne</h2>
            <p className="text-gray-400">Frontend Engineer</p>
          </div>

          {/* About Me */}
          <div>
            <h2 className="title">About Me</h2>
            <p className="text-base">
              Hey there!👋 I’m Xander - Frontend Engineer passionate about
              building dynamic and intuitive digital experiences. Focused on
              creating seamless, user-friendly interfaces that evolve based on
              real user insights.
            </p>
            <div></div>

            {/* Links */}
            <div className="flex items-center gap-4 mt-4">
              <LinkButton href="https://github.com/xaaug" title="Github" />
              <LinkButton
                href="https://www.linkedin.com/in/xanderwayne/"
                title="Linkedin"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {/* Technologies */}
          <div>
            {" "}
            <h2 className="title">Technologies</h2>
            <ul className="list-items text-gray-200 text-base">
              {technologies.map((tech, i) => (
                <li key={i} className="text-sm">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h2 className="title">Tools</h2>
            <ul className="list-items  text-gray-200">
              {tools.map((tool, i) => (
                <li key={i} className="text-sm">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
          {/* Work Experience */}
          <div>
            <h2 className="title">Experience</h2>
            <div className="flex flex-col  gap-2 mb-4">
              <div>
                <h3 className="text-base">Motion Transit</h3>
                <p className="text-sm text-gray-400">Oct 2023 - Dec 2024</p>
              </div>
              <p className="text-sm">
                Played a key role in developing and enhancing the web platform
                for an intercity travel company, improving connectivity for
                travelers across cities. Collaborating closely with product and
                design teams, I ensured a seamless, high-performance user
                experience. By implementing modern web technologies, I optimized
                platform performance and enhanced customer interactions,
                focusing on an intuitive and accessible booking-to-travel
                journey.
              </p>
            </div>

            <div className="flex flex-col  gap-2">
              <div>
                <h3 className="text-lg">Pal Foods</h3>
                <p className="text-sm text-gray-400">June 2021 - Aug 2023</p>
              </div>
              <p className="text-sm">
                Built and maintained dynamic, user-focused web applications for
                a rapidly growing food delivery and grocery platform. Working
                closely with cross-functional teams, I helped create seamless
                online experiences that enhanced user engagement and retention.
                By optimizing web performance, I improved load times and overall
                usability while contributing to scalable, responsive designs
                across multiple platforms.
              </p>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="title">Projects</h2>
            <div className="flex flex-col gap-4">
              {projects.map((project, i) => (
                <Project key={i} title={project.title} content={project.desc} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
