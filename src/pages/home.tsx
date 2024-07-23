import React from "react";
import homepage from "@/assets/homepage.jpg";
import { Button } from "@/components/ui/button";
// import { Mail } from "lucide-react";

const Home: React.FC = () => {
  return (
    <>
      <section className="flex lg:flex-row flex-col-reverse items-center justify-between gap-8 sm:p-4">
        <div className="flex flex-col gap-4">
          <div className="space-y-2.5">
            <h1 className="sm:text-6xl text-4xl font-semibold">
              Hi, i'm <span className="text-indigo-700">Abdennour Tadjer</span>
            </h1>
            <h2 className="sm:text-3xl text-xl font-normal">
              A Full-Stack Developer Specializing in Backend Development.
            </h2>
          </div>
          <p className="text-pretty text-base">
            Welcome to my portfolio! I am a passionate full-stack developer with a strong focus on backend development.
            I have experience in building scalable, secure and reliable web applications using various frameworks and
            technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating
            high-quality code that follows best practices and industry standards. I am always looking for new challenges
            and opportunities to grow as a developer.
          </p>
        </div>

        <div className="ml-4 shrink-0 rounded-2xl overflow-hidden rotate-3">
          <img src={homepage} className="w-96" />
        </div>
      </section>

      <div className="flex items-center gap-4 sm:px-4">
        <Button className="uppercase">Hire me</Button>
        <Button className="uppercase">My works</Button>
      </div>
    </>
  );
};

/**
 * ## Featured Projects
 * Showcase a few of your best projects with a brief description and a link to the projects page.
 *
 * ## Skills and Technologies
 * A section highlighting your key skills and the technologies you use.
 *
 * ## Contact Information:
 * A call to action to visit the contact page or a simple contact form.
 *
 * ## Footer:
 * Basic information like your name, copyright, and links to your social media profiles.
 */

export default Home;

{
  /* <div>
  <svg className="h-6 w-6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>GitHub</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>

  <svg className="h-6 w-6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>LinkedIn</title>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
  <a href="mailto:abdennour.tadjer@gmail.com" target="_blank">
    <Mail className="h-6 w-6" />
  </a>
</div>; */
}
