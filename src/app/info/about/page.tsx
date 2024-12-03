"use client";

import RootLayout from "@/app/layout";
import BlurFade from "@/components/ui/blur-fade";
import Breadcrumb from "@/components/ui/breadcrumb";
import React, { useEffect, useState } from "react";
import { FaBook, FaCheck, FaRegLightbulb } from "react-icons/fa6";

const breadcrumbItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Info",
    dropdownItems: [
      { label: "Accessibility Declaration", href: "/info/accessibility" },
      { label: "Resume", href: "/info/resume" },
      { label: "Tech Stack", href: "/info/techStack" },
      { label: "Achievements", href: "/info/experiences&achievements" },
    ],
  },
  {
    label: "About Me",
  },
];


const AboutPage = () => {
  const [mounted, setMounted] = useState( false );

  useEffect( () => {
    setMounted( true );
  }, [] );

  if ( !mounted ) {
    return null;
  }

  return (
    <RootLayout title="About Tina Huynh" description="Learn more about Tina, a Full Stack Web Developer.">
      <div className="max-w-7xl mx-auto p-6">
        <Breadcrumb items={breadcrumbItems} />

        {/* About Me Title */}
        <BlurFade delay={0.25}>
          <h1 className="text-4xl font-bold text-center mb-4">About Me</h1>
        </BlurFade>

        {/* About Me Paragraph */}
        <BlurFade delay={0.45}>
          <p className="text-lg">
            Hi, I’m <strong>Tina Huynh</strong>, a passionate <strong>Full-Stack Web Developer</strong> with a
            relentless curiosity for all things tech and design. My journey into web development began in 2020 as a
            self-taught front-end enthusiast, driven by a desire to create intuitive, engaging, and impactful digital
            experiences. In 2023, I expanded my expertise by completing a <strong>Full-Stack Web Development Bootcamp</strong>,
            diving deep into the intricacies of back-end development and solidifying my skills across the entire stack.
          </p>
        </BlurFade>

        <hr className="my-8" />

        {/* What I Bring to the Table Title */}
        <BlurFade delay={0.55}>
          <h2 className="text-2xl font-semibold mt-8 mb-4">What I Bring to the Table</h2>
        </BlurFade>

        {/* What I Bring to the Table Description */}
        <BlurFade delay={0.55}>
          <p className="text-lg">
            I thrive at the intersection of <strong>functionality and creativity</strong>, blending technical proficiency with
            innovative design to build websites that are as effective as they are elegant. Whether it’s crafting seamless user
            interfaces or engineering robust server-side solutions, I approach every project with a user-first mindset,
            ensuring that:
          </p>
          <ul className="list-none mt-4">
            <li className="mb-2">
              <BlurFade delay={0.6} className="inline-flex">
                <FaBook
                  className="mr-2 h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <div>
                  <p><strong>Clean, User-Centered Design</strong></p>
                  <p>
                    Websites should not just look good but also feel intuitive to navigate. I prioritize creating
                    designs that guide users effortlessly, using clear layouts, structured information, and a balance
                    of form and function.
                  </p>
                </div>
              </BlurFade>
            </li>
            <li className="mb-2">
              <BlurFade delay={0.65} className="inline-flex">
                <FaBook
                  className="mr-2 h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <div>
                  <p><strong>Accessibility for All</strong></p>
                  <p>
                    I’m deeply committed to making the web a more inclusive space, particularly
                    for neurodivergent users and those with disabilities. My focus includes implementing WCAG standards,
                    improving keyboard navigation, and enhancing readability for all users.
                  </p>
                </div>
              </BlurFade>
            </li>
            <li className="mb-2">
              <BlurFade delay={0.7} className="inline-flex">
                <FaBook
                  className="mr-2 h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <div>
                  <p><strong>Continuous Learning</strong></p>
                  <p>
                    Web development is an ever-evolving field, and I’m eager to stay ahead of
                    the curve by exploring emerging technologies, frameworks, and best practices. My
                    passion for learning ensures I bring modern, innovative solutions to every project.
                  </p>
                </div>
              </BlurFade>
            </li>
            <li className="mb-2">
              <BlurFade delay={0.75} className="inline-flex">
                <FaBook
                  className="mr-2 h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <div>
                  <p><strong>Performance Optimization</strong></p>
                  <p>
                    A fast-loading website is key to a great user experience. I focus on optimizing
                    performance by reducing load times, improving server responses, and following best practices for
                    efficient coding and asset management.
                  </p>
                </div>
              </BlurFade>
            </li>
            <li className="mb-2">
              <BlurFade delay={0.8} className="inline-flex">
                <FaBook
                  className="mr-2 h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <div>
                  <p><strong>Collaborative Problem-Solving</strong></p>
                  <p>
                    I value collaboration and thrive in team settings, working alongside
                    designers, developers, and stakeholders to tackle complex challenges and create cohesive
                    solutions that align with the project's vision.
                  </p>
                </div>
              </BlurFade>
            </li>
          </ul>
        </BlurFade>


        <hr className="my-8" />

        {/* My Vision Title */}
        <BlurFade delay={0.65}>
          <h2 className="text-2xl font-semibold mt-8 mb-4">My Vision</h2>
        </BlurFade>

        {/* My Vision Description */}
        <BlurFade delay={0.65}>
          <p className="text-lg">
            The web is a transformative platform that bridges gaps between people, ideas, and solutions. My vision is to contribute by crafting digital experiences that are:
          </p>
          <ul className="list-none mt-4">
            <li className="mb-2">
              <BlurFade delay={0.7} className="inline-flex">
                <FaRegLightbulb
                  className="mr-2 h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <div>
                  <p>
                    <strong>Visually Stunning</strong>
                  </p>
                  <p>
                    Creating designs that captivate and inspire, balancing simplicity with creativity to leave a lasting impression. I strive to use colors, typography, and layouts effectively to create a cohesive and engaging visual language.
                  </p>
                </div>
              </BlurFade>
            </li>
            <li className="mb-2">
              <BlurFade delay={0.75} className="inline-flex">
                <FaRegLightbulb
                  className="mr-2 h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <div>
                  <p>
                    <strong>Effortlessly Navigable</strong>
                  </p>
                  <p>
                    Designing interfaces that are intuitive and accessible, ensuring users can interact seamlessly regardless of ability or neurodiversity. By focusing on user experience and inclusive practices, I aim to make the web a space for everyone.
                  </p>
                </div>
              </BlurFade>
            </li>
            <li className="mb-2">
              <BlurFade delay={0.8} className="inline-flex">
                <FaRegLightbulb
                  className="mr-2 h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <div>
                  <p>
                    <strong>Technically Sound</strong>
                  </p>
                  <p>
                    Building with scalability, efficiency, and maintainability in mind, ensuring robust functionality on both the front-end and back-end. My goal is to write clean, modular code that evolves alongside technological advancements.
                  </p>
                </div>
              </BlurFade>
            </li>
            <li className="mb-2">
              <BlurFade delay={0.85} className="inline-flex">
                <FaRegLightbulb
                  className="mr-2 h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <div>
                  <p>
                    <strong>Future-Ready</strong>
                  </p>
                  <p>
                    Leveraging cutting-edge tools and frameworks to stay ahead of industry trends, ensuring that the solutions I build remain relevant and competitive in a rapidly evolving digital landscape.
                  </p>
                </div>
              </BlurFade>
            </li>
            <li className="mb-2">
              <BlurFade delay={0.9} className="inline-flex">
                <FaRegLightbulb
                  className="mr-2 h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <div>
                  <p>
                    <strong>Ethically Responsible</strong>
                  </p>
                  <p>
                    Committing to ethical development practices by prioritizing user privacy, security, and creating solutions that positively impact communities and society.
                  </p>
                </div>
              </BlurFade>
            </li>
          </ul>
        </BlurFade>

        <hr className="my-8" />

        {/* A Lifelong Learner Title */}
        <BlurFade delay={0.75}>
          <h2 className="text-2xl font-semibold mt-8 mb-4">A Lifelong Learner</h2>
        </BlurFade>

        {/* A Lifelong Learner Description */}
        <BlurFade delay={0.75}>
          <p className="text-lg">
            I’ve always been someone who picks up skills quickly and eagerly dives into new challenges. Beyond my expertise
            in full-stack development, I’m actively expanding my knowledge in areas like:
          </p>
          <ul className="list-none mt-4">
            <li className="mb-2">
              <BlurFade delay={0.8} className="inline-flex">
                <FaCheck
                  className="mr-2 h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <div>
                  <p><strong>Web Design & UX/UI</strong></p>
                  <p>
                    Enhancing the aesthetics and functionality of digital experiences by focusing on intuitive layouts,
                    user-friendly navigation, and visually engaging elements that improve usability.
                  </p>
                </div>
              </BlurFade>
            </li>
            <li className="mb-2">
              <BlurFade delay={0.85} className="inline-flex">
                <FaCheck
                  className="mr-2 h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <div>
                  <p><strong>Web Accessibility</strong></p>
                  <p>
                    Advocating for a more inclusive web by implementing accessible design principles, such as keyboard
                    navigation, screen reader support, and high-contrast visuals, to ensure equal access for all users.
                  </p>
                </div>
              </BlurFade>
            </li>
            <li className="mb-2">
              <BlurFade delay={0.9} className="inline-flex">
                <FaCheck
                  className="mr-2 h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <div>
                  <p><strong>Emerging Tech Trends</strong></p>
                  <p>
                    Staying updated on cutting-edge tools, frameworks, and methodologies, such as AI-driven development
                    and progressive web apps, to deliver innovative and future-ready solutions.
                  </p>
                </div>
              </BlurFade>
            </li>
            <li className="mb-2">
              <BlurFade delay={0.95} className="inline-flex">
                <FaCheck
                  className="mr-2 h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <div>
                  <p><strong>Cloud Technologies</strong></p>
                  <p>
                    Learning the intricacies of cloud platforms like AWS, Azure, and Google Cloud to create scalable,
                    reliable, and cost-effective applications for businesses of all sizes.
                  </p>
                </div>
              </BlurFade>
            </li>
            <li className="mb-2">
              <BlurFade delay={1.0} className="inline-flex">
                <FaCheck
                  className="mr-2 h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <div>
                  <p><strong>Performance Optimization</strong></p>
                  <p>
                    Exploring techniques for improving website and application performance, such as lazy loading,
                    caching, and optimizing database queries, to deliver faster and more efficient user experiences.
                  </p>
                </div>
              </BlurFade>
            </li>
          </ul>
        </BlurFade>


        <hr className="my-8" />

        {/* Let’s Build Something Amazing Title */}
        <BlurFade delay={0.85}>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Let’s Build Something Amazing</h2>
        </BlurFade>

        {/* Let’s Build Something Amazing Description */}
        <BlurFade delay={0.85}>
          <p className="text-lg">
            I’m looking to connect with <strong>forward-thinking employers and collaborators</strong> who share my passion for
            innovation and excellence in web development. I believe in the power of technology to solve complex problems,
            bring ideas to life, and create meaningful user experiences that leave a lasting impact.
          </p>
          <p className="text-lg mt-4">
            Whether you’re launching a new project, optimizing an existing platform, or seeking a fresh perspective
            for your team, I bring a combination of technical expertise, creative problem-solving, and a deep commitment
            to delivering exceptional results. My adaptability, drive to learn, and collaborative approach make me a
            valuable partner in tackling challenges and building groundbreaking solutions.
          </p>
          <p className="text-lg mt-4">
            If you’re seeking someone who’s not only technical but also highly adaptable, creative, and motivated to go
            above and beyond, I’d love to hear from you. Let’s create something extraordinary together!
          </p>
        </BlurFade>


      </div>
    </RootLayout>
  );
};

export default AboutPage;
