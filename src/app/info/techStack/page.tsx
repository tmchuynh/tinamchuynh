"use client";

import BlurFade from "@/components/ui/blur-fade";
import Breadcrumb from "@/components/ui/breadcrumb";
import { GrDeploy } from "react-icons/gr";
import React, { useEffect, useState } from "react";
import { BsFileRichtext } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa6";
import { PiTreeStructureFill } from "react-icons/pi";

const breadcrumbItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Info",
    dropdownItems: [
      { label: "Who I Am", href: "/about" },
      { label: "Accessibility Declaration", href: "/info/accessibility" },
      { label: "Resume", href: "/info/resume" },
      { label: "Achievements", href: "/info/experiences&achievements" },
    ],
  },
  {
    label: "Tech Stack",
  },
];

const TechStackPage = () => {
  const [mounted, setMounted] = useState( false );

  useEffect( () => {
    setMounted( true );
  }, [] );

  if ( !mounted ) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Breadcrumb items={breadcrumbItems} />

      {/* Tech Stack Title */}
      <BlurFade delay={0.1}>
        <h1 className="text-4xl font-bold text-center mb-6">Tech Stack</h1>
        <p className="text-lg mb-8">
          Explore the tools, frameworks, and technologies I use to build robust,
          user-friendly, and scalable solutions. Each tool in my stack has been
          carefully chosen to enhance productivity, code quality, and user
          experience.
        </p>
      </BlurFade>

      {/* Frontend Development Section */}
      <BlurFade delay={0.15}>
        <h2 className="text-3xl font-semibold mb-4">Frontend Development</h2>
      </BlurFade>
      <ul className="list-none">
        {/* HTML5 */}
        <li className="mb-2">
          <BlurFade delay={0.2} className="inline-flex">
            <BsFileRichtext className="mr-2 h-6 w-6 text-tertiary" aria-hidden="true" />
            <p>
              <strong>HTML5</strong> - The backbone of all web pages, ensuring clean and semantic structure.
            </p>
          </BlurFade>
        </li>

        {/* CSS3 */}
        <li className="mb-2">
          <BlurFade delay={0.25} className="inline-flex">
            <BsFileRichtext className="mr-2 h-6 w-6 text-tertiary" aria-hidden="true" />
            <p>
              <strong>CSS3</strong> - For creating visually appealing and responsive designs.
            </p>
          </BlurFade>
        </li>

        {/* Sass/SCSS */}
        <li className="mb-2">
          <BlurFade delay={0.3} className="inline-flex">
            <BsFileRichtext className="mr-2 h-6 w-6 text-tertiary" aria-hidden="true" />
            <p>
              <strong>Sass/SCSS</strong> - A CSS preprocessor that adds advanced features like variables, nested rules, and mixins to improve maintainability and organization of styles.
            </p>
          </BlurFade>
        </li>

        {/* JavaScript */}
        <li className="mb-2">
          <BlurFade delay={0.35} className="inline-flex">
            <BsFileRichtext className="mr-2 h-6 w-6 text-tertiary" aria-hidden="true" />
            <p>
              <strong>JavaScript</strong> - The language that brings interactivity to life on the web.
            </p>
          </BlurFade>
        </li>

        {/* jQuery */}
        <li className="mb-2">
          <BlurFade delay={0.4} className="inline-flex">
            <BsFileRichtext className="mr-2 h-6 w-6 text-tertiary" aria-hidden="true" />
            <p>
              <strong>jQuery</strong> - A fast, small, and feature-rich JavaScript library for simplifying tasks like DOM manipulation, event handling, and animations.
            </p>
          </BlurFade>
        </li>

        {/* React.js */}
        <li className="mb-2">
          <BlurFade delay={0.45} className="inline-flex">
            <BsFileRichtext className="mr-2 h-6 w-6 text-tertiary" aria-hidden="true" />
            <p>
              <strong>React.js</strong> - The library for building reusable components and single-page applications (SPAs).
            </p>
          </BlurFade>
        </li>

        {/* Next.js */}
        <li className="mb-2">
          <BlurFade delay={0.5} className="inline-flex">
            <BsFileRichtext className="mr-2 h-6 w-6 text-tertiary" aria-hidden="true" />
            <p>
              <strong>Next.js</strong> - My go-to React framework for building fast, static, and dynamic websites with server-side rendering and static site generation.
            </p>
          </BlurFade>
        </li>

        {/* Tailwind CSS */}
        <li className="mb-2">
          <BlurFade delay={0.55} className="inline-flex">
            <BsFileRichtext className="mr-2 h-6 w-6 text-tertiary" aria-hidden="true" />
            <p>
              <strong>Tailwind CSS</strong> - A utility-first CSS framework for rapidly styling interfaces.
            </p>
          </BlurFade>
        </li>

        {/* Bootstrap */}
        <li className="mb-2">
          <BlurFade delay={0.6} className="inline-flex">
            <BsFileRichtext className="mr-2 h-6 w-6 text-tertiary" aria-hidden="true" />
            <p>
              <strong>Bootstrap</strong> - A responsive front-end framework that simplifies grid layouts, styling, and components.
            </p>
          </BlurFade>
        </li>

        {/* Material Design */}
        <li className="mb-2">
          <BlurFade delay={0.65} className="inline-flex">
            <BsFileRichtext className="mr-2 h-6 w-6 text-tertiary" aria-hidden="true" />
            <p>
              <strong>Material Design</strong> - A design system created by Google that combines principles of good design with innovative technology.
            </p>
          </BlurFade>
        </li>

        {/* Bulma */}
        <li className="mb-2">
          <BlurFade delay={0.7} className="inline-flex">
            <BsFileRichtext className="mr-2 h-6 w-6 text-tertiary" aria-hidden="true" />
            <p>
              <strong>Bulma</strong> - A modern CSS framework based on Flexbox, providing simple yet flexible grid layouts and design components.
            </p>
          </BlurFade>
        </li>

        {/* Semantic UI */}
        <li className="mb-2">
          <BlurFade delay={0.75} className="inline-flex">
            <BsFileRichtext className="mr-2 h-6 w-6 text-tertiary" aria-hidden="true" />
            <p>
              <strong>Semantic UI</strong> - A CSS framework for creating beautiful and responsive layouts with human-readable HTML.
            </p>
          </BlurFade>
        </li>

        {/* UIKit */}
        <li className="mb-2">
          <BlurFade delay={0.8} className="inline-flex">
            <BsFileRichtext className="mr-2 h-6 w-6 text-tertiary" aria-hidden="true" />
            <p>
              <strong>UIKit</strong> - A lightweight and modular front-end framework for developing fast and powerful web interfaces.
            </p>
          </BlurFade>
        </li>
      </ul>

      <hr className="my-8" />

      {/* Backend Development Section */}
      <BlurFade delay={0.85}>
        <h2 className="text-3xl font-semibold mb-4">Backend Development</h2>
      </BlurFade>
      <ul className="list-none">
        {/* Node.js */}
        <li className="mb-2">
          <BlurFade delay={0.9} className="inline-flex">
            <PiTreeStructureFill className="mr-2 h-6 w-6 text-tertiary rotate-90" aria-hidden="true" />
            <p>
              <strong>Node.js</strong> - For scalable, event-driven server-side applications.
            </p>
          </BlurFade>
        </li>

        {/* Express.js */}
        <li className="mb-2">
          <BlurFade delay={0.95} className="inline-flex">
            <PiTreeStructureFill className="mr-2 h-6 w-6 text-tertiary rotate-90" aria-hidden="true" />
            <p>
              <strong>Express.js</strong> - A minimalist framework for building APIs and backend services.
            </p>
          </BlurFade>
        </li>

        {/* Python */}
        <li className="mb-2">
          <BlurFade delay={1.0} className="inline-flex">
            <PiTreeStructureFill className="mr-2 h-6 w-6 text-tertiary rotate-90" aria-hidden="true" />
            <p>
              <strong>Python</strong> - A versatile programming language for rapid prototyping and development.
            </p>
          </BlurFade>
        </li>

        {/* Flask */}
        <li className="mb-2">
          <BlurFade delay={1.05} className="inline-flex">
            <PiTreeStructureFill className="mr-2 h-6 w-6 text-tertiary rotate-90" aria-hidden="true" />
            <p>
              <strong>Flask</strong> - A lightweight Python web framework ideal for building APIs and simple applications.
            </p>
          </BlurFade>
        </li>

        {/* Spring Boot */}
        <li className="mb-2">
          <BlurFade delay={1.1} className="inline-flex">
            <PiTreeStructureFill className="mr-2 h-6 w-6 text-tertiary rotate-90" aria-hidden="true" />
            <p>
              <strong>Spring Boot</strong> - For building robust and scalable Java-based backend systems.
            </p>
          </BlurFade>
        </li>
      </ul>

      <hr className="my-8" />

      {/* Database Section */}
      <BlurFade delay={1.15}>
        <h2 className="text-3xl font-semibold mb-4">Databases</h2>
      </BlurFade>
      <ul className="list-none">
        {/* SQL (PostgreSQL/MySQL) */}
        <li className="mb-2">
          <BlurFade delay={1.2} className="inline-flex">
            <FaDatabase className="mr-2 h-6 w-6 text-tertiary" aria-hidden="true" />
            <p>
              <strong>SQL (PostgreSQL/MySQL)</strong> - For structured, relational data storage and queries.
            </p>
          </BlurFade>
        </li>

        {/* MongoDB */}
        <li className="mb-2">
          <BlurFade delay={1.25} className="inline-flex">
            <FaDatabase className="mr-2 h-6 w-6 text-tertiary" aria-hidden="true" />
            <p>
              <strong>MongoDB</strong> - A NoSQL database for flexible, document-oriented data storage.
            </p>
          </BlurFade>
        </li>

        {/* SQLAlchemy */}
        <li className="mb-2">
          <BlurFade delay={1.3} className="inline-flex">
            <FaDatabase className="mr-2 h-6 w-6 text-tertiary" aria-hidden="true" />
            <p>
              <strong>SQLAlchemy</strong> - A powerful Python ORM for interacting with relational databases in a Pythonic way, providing tools for querying and manipulating data.
            </p>
          </BlurFade>
        </li>

        {/* Sequelize */}
        <li className="mb-2">
          <BlurFade delay={1.35} className="inline-flex">
            <FaDatabase className="mr-2 h-6 w-6 text-tertiary" aria-hidden="true" />
            <p>
              <strong>Sequelize</strong> - A promise-based Node.js ORM for SQL databases, providing an easy way to interact with relational databases like MySQL, PostgreSQL, and SQLite.
            </p>
          </BlurFade>
        </li>

        {/* DbGate */}
        <li className="mb-2">
          <BlurFade delay={1.4} className="inline-flex">
            <FaDatabase className="mr-2 h-6 w-6 text-tertiary" aria-hidden="true" />
            <p>
              <strong>DbGate</strong> - A database manager for querying and managing SQL and NoSQL databases.
            </p>
          </BlurFade>
        </li>
      </ul>

      <hr className="my-8" />

      {/* Deployment Tools Section */}
      <BlurFade delay={1.4}>
        <h2 className="text-3xl font-semibold mb-4">Deployment Tools</h2>
      </BlurFade>
      <ul className="list-none">
        {/* AWS Amplify */}
        <li className="mb-2">
          <BlurFade delay={1.4} className="inline-flex">
            <GrDeploy className="mr-2 h-6 w-6 text-tertiary" aria-hidden="true" />
            <p>
              <strong>AWS Amplify</strong> - A fully managed CI/CD and hosting platform for fast and secure web and mobile app development.
            </p>
          </BlurFade>
        </li>

        {/* Docker */}
        <li className="mb-2">
          <BlurFade delay={1.45} className="inline-flex">
            <GrDeploy className="mr-2 h-6 w-6 text-tertiary" aria-hidden="true" />
            <p>
              <strong>Docker</strong> - For containerizing applications, ensuring consistency across development environments.
            </p>
          </BlurFade>
        </li>

        {/* FileZilla */}
        <li className="mb-2">
          <BlurFade delay={1.5} className="inline-flex">
            <GrDeploy className="mr-2 h-6 w-6 text-tertiary" aria-hidden="true" />
            <p>
              <strong>FileZilla</strong> - A trusted FTP client for securely transferring files to and from servers.
            </p>
          </BlurFade>
        </li>

        {/* Heroku */}
        <li className="mb-2">
          <BlurFade delay={1.55} className="inline-flex">
            <GrDeploy className="mr-2 h-6 w-6 text-tertiary" aria-hidden="true" />
            <p>
              <strong>Heroku</strong> - A platform-as-a-service (PaaS) for deploying and managing applications with simplicity and ease.
            </p>
          </BlurFade>
        </li>

        {/* Netlify */}
        <li className="mb-2">
          <BlurFade delay={1.6} className="inline-flex">
            <GrDeploy className="mr-2 h-6 w-6 text-tertiary" aria-hidden="true" />
            <p>
              <strong>Netlify</strong> - A platform for automating deployments, with features such as continuous integration, serverless functions, and instant rollbacks for static sites.
            </p>
          </BlurFade>
        </li>

        {/* Vercel */}
        <li className="mb-2">
          <BlurFade delay={1.65} className="inline-flex">
            <GrDeploy className="mr-2 h-6 w-6 text-tertiary" aria-hidden="true" />
            <p>
              <strong>Vercel</strong> - An optimized platform for frontend frameworks and static websites, providing instant global deployment.
            </p>
          </BlurFade>
        </li>

        {/* GitHub Actions */}
        <li className="mb-2">
          <BlurFade delay={1.7} className="inline-flex">
            <GrDeploy className="mr-2 h-6 w-6 text-tertiary" aria-hidden="true" />
            <p>
              <strong>GitHub Actions</strong> - A CI/CD automation tool integrated with GitHub for building, testing, and deploying applications directly from GitHub repositories.
            </p>
          </BlurFade>
        </li>
      </ul>
    </div>
  );
};

export default TechStackPage;
