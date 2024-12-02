"use client";

import BlurFade from "@/components/ui/blur-fade";
import Breadcrumb from "@/components/ui/breadcrumb";
import React from "react";

const breadcrumbItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Me",
    dropdownItems: [
      { label: "Who I Am", href: "/about" },
      { label: "Accessibility Declaration", href: "/info/accessibility" },
      { label: "Resume", href: "/info/resume" },
      { label: "Tech Stack", href: "/info/techStack" },
      { label: "Achievements", href: "/info/experiences&achievements" },
    ],
  },
  {
    label: "Details",
  },
];

const TechStackPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <Breadcrumb items={breadcrumbItems} />

      {/* Tech Stack Title */}
      <BlurFade delay={0.1}>
        <h1 className="text-4xl font-bold text-center mb-6">Tech Stack</h1>
        <p className="text-lg mb-8">
          Explore the tools, frameworks, and technologies I use to build robust, user-friendly, and scalable solutions. Each tool in my stack has been carefully chosen to enhance productivity, code quality, and user experience.
        </p>
      </BlurFade>

      {/* Frontend Development Section */}
      <BlurFade delay={0.1}>
        <h2 className="text-3xl font-semibold mb-4">Frontend Development</h2>
      </BlurFade>
      <ul className="list-disc pl-6">
        <BlurFade delay={0.15}>
          <li><strong>HTML5</strong> - The backbone of all web pages, ensuring clean and semantic structure.</li>
        </BlurFade>
        <BlurFade delay={0.2}>
          <li><strong>CSS3</strong> - For creating visually appealing and responsive designs.</li>
        </BlurFade>
        <BlurFade delay={0.25}>
          <li><strong>JavaScript</strong> - The language that brings interactivity to life on the web.</li>
        </BlurFade>
        <BlurFade delay={0.3}>
          <li><strong>React.js</strong> - My go-to for building reusable components and single-page applications (SPAs).</li>
        </BlurFade>
        <BlurFade delay={0.35}>
          <li><strong>Tailwind CSS</strong> - A utility-first CSS framework for rapidly styling interfaces.</li>
        </BlurFade>
        <BlurFade delay={0.4}>
          <li><strong>Bootstrap</strong> - A responsive front-end framework that simplifies grid layouts, styling, and components.</li>
        </BlurFade>
      </ul>

      <hr className="my-8" />

      {/* Backend Development Section */}
      <BlurFade delay={0.5}>
        <h2 className="text-3xl font-semibold mb-4">Backend Development</h2>
      </BlurFade>
      <ul className="list-disc pl-6">
        <BlurFade delay={0.55}>
          <li><strong>Node.js</strong> - For scalable, event-driven server-side applications.</li>
        </BlurFade>
        <BlurFade delay={0.6}>
          <li><strong>Express.js</strong> - A minimalist framework for building APIs and backend services.</li>
        </BlurFade>
        <BlurFade delay={0.65}>
          <li><strong>Python</strong> - A versatile programming language for rapid prototyping and development.</li>
        </BlurFade>
        <BlurFade delay={0.7}>
          <li><strong>Flask</strong> - A lightweight Python web framework ideal for building APIs and simple applications.</li>
        </BlurFade>
        <BlurFade delay={0.75}>
          <li><strong>Spring Boot</strong> - For building robust and scalable Java-based backend systems.</li>
        </BlurFade>
        <BlurFade delay={0.8}>
          <li><strong>MongoDB</strong> - A NoSQL database for flexible, document-oriented data storage.</li>
        </BlurFade>
        <BlurFade delay={0.85}>
          <li><strong>SQL (PostgreSQL/MySQL)</strong> - For structured, relational data storage and queries.</li>
        </BlurFade>
      </ul>

      <hr className="my-8" />

      {/* Database and Deployment Tools Section */}
      <BlurFade delay={0.9}>
        <h2 className="text-3xl font-semibold mb-4">Database and Deployment Tools</h2>
      </BlurFade>
      <ul className="list-disc pl-6">
        <BlurFade delay={0.95}>
          <li><strong>DbGate</strong> - A database manager for querying and managing SQL and NoSQL databases.</li>
        </BlurFade>
        <BlurFade delay={1}>
          <li><strong>FileZilla</strong> - A trusted FTP client for securely transferring files to and from servers.</li>
        </BlurFade>
      </ul>

      <hr className="my-8" />

      {/* Full-Stack Tools Section */}
      <BlurFade delay={1.1}>
        <h2 className="text-3xl font-semibold mb-4">Full-Stack Tools</h2>
      </BlurFade>
      <ul className="list-disc pl-6">
        <BlurFade delay={1.15}>
          <li><strong>Next.js</strong> - For server-side rendering and static site generation, combining frontend and backend seamlessly.</li>
        </BlurFade>
        <BlurFade delay={1.2}>
          <li><strong>REST APIs</strong> - A reliable way to structure communication between the client and server.</li>
        </BlurFade>
      </ul>

      <hr className="my-8" />

      {/* Version Control and Collaboration Section */}
      <BlurFade delay={1.3}>
        <h2 className="text-3xl font-semibold mb-4">Version Control and Collaboration</h2>
      </BlurFade>
      <ul className="list-disc pl-6">
        <BlurFade delay={1.35}>
          <li><strong>Git</strong> - Version control for tracking changes and collaborating on projects.</li>
        </BlurFade>
        <BlurFade delay={1.4}>
          <li><strong>GitHub</strong> - To host code, manage repositories, and collaborate with other developers.</li>
        </BlurFade>
        <BlurFade delay={1.45}>
          <li><strong>GitKraken</strong> - A powerful Git client for visually managing repositories and streamlining workflows.</li>
        </BlurFade>
      </ul>

      <hr className="my-8" />

      {/* Design and Prototyping Section */}
      <BlurFade delay={1.5}>
        <h2 className="text-3xl font-semibold mb-4">Design and Prototyping</h2>
      </BlurFade>
      <ul className="list-disc pl-6">
        <BlurFade delay={1.55}>
          <li><strong>Framer</strong> - A design tool that combines high-fidelity prototyping with interactivity.</li>
        </BlurFade>
        <BlurFade delay={1.6}>
          <li><strong>Balsamiq</strong> - For creating simple, low-fidelity wireframes to visualize project ideas.</li>
        </BlurFade>
        <BlurFade delay={1.65}>
          <li><strong>Origami Studio</strong> - A prototyping tool for crafting highly interactive and dynamic designs.</li>
        </BlurFade>
      </ul>

      <hr className="my-8" />

      {/* Terminal and Development Environment Section */}
      <BlurFade delay={1.7}>
        <h2 className="text-3xl font-semibold mb-4">Terminal and Development Environment</h2>
      </BlurFade>
      <ul className="list-disc pl-6">
        <BlurFade delay={1.75}>
          <li><strong>VSCode</strong> - My IDE of choice for its flexibility and powerful extensions.</li>
        </BlurFade>
        <BlurFade delay={1.8}>
          <li><strong>Hyper</strong> - A customizable terminal emulator that enhances the development experience.</li>
        </BlurFade>
      </ul>

      <hr className="my-8" />

      {/* Additional Tools Section */}
      <BlurFade delay={1.9}>
        <h2 className="text-3xl font-semibold mb-4">Additional Tools</h2>
      </BlurFade>
      <ul className="list-disc pl-6">
        <BlurFade delay={1.95}>
          <li><strong>Docker</strong> - For containerizing applications, ensuring consistency across development environments.</li>
        </BlurFade>
        <BlurFade delay={2}>
          <li><strong>Postman</strong> - For testing and debugging APIs.</li>
        </BlurFade>
      </ul>

      <hr className="my-8" />

      {/* Why This Stack Section */}
      <BlurFade delay={2.1}>
        <h2 className="text-3xl font-semibold mb-4">Why This Stack?</h2>
      </BlurFade>
      <BlurFade delay={2.2}>
        <p className="text-lg mb-8">
          This tech stack empowers me to develop end-to-end solutions with a focus on performance, scalability, and accessibility. By integrating these tools and technologies, I ensure my projects meet modern standards and exceed user expectations.
        </p>
      </BlurFade>

      {/* Want to Learn More Section */}
      <BlurFade delay={2.3}>
        <h2 className="text-3xl font-semibold mb-4">Want to Learn More?</h2>
      </BlurFade>
      <BlurFade delay={2.4}>
        <p className="text-lg">
          Have questions about my tech stack or want to collaborate?{" "}
          <a href="#contact" className="text-blue-500">Contact me here</a>. Let's build something amazing together!
        </p>
      </BlurFade>
    </div>
  );
};

export default TechStackPage;
