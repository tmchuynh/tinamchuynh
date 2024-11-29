"use client";

import BlurFade from "@/components/ui/blur-fade";
import { AchievementsSectionProps } from "@/data/types";
import React from "react";


const AchievementsSection: React.FC<AchievementsSectionProps> = ( { title, items } ) => {
  return (
    <div className="mb-12">
      <BlurFade delay={0.25}>
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      </BlurFade>

      <ul className="list-disc pl-6">
        {items.map( ( item, index ) => (
          <BlurFade key={index} delay={0.35 + index * 0.05}>
            <li>
              <strong>{item.title}</strong> – <em>{item.subtitle}</em>
              <br />
              <span className="italic">{item.date}</span>
              <p>{item.description}</p>
            </li>
          </BlurFade>
        ) )}
      </ul>
    </div>
  );
};

const AchievementsPage = () => {
  const certifications = [
    {
      title: "Full-Stack Web Development",
      subtitle: "FreeCodeCamp",
      date: "March 2023",
      description: "Covering React, Node.js, and MongoDB. A comprehensive certification for building full-stack applications.",
    },
    {
      title: "Advanced Python Programming",
      subtitle: "Udemy",
      date: "January 2023",
      description: "Focused on algorithms, data structures, and application development in Python.",
    },
  ];

  const awards = [
    {
      title: "Top Performer",
      subtitle: "Coding Bootcamp Project Showcase",
      date: "December 2022",
      description: "Awarded for creating an accessible e-commerce app as part of the final project.",
    },
    {
      title: "Best Frontend Developer",
      subtitle: "Hackathon 2022",
      date: "July 2022",
      description: "Won for innovative design and frontend functionality in a team project.",
    },
  ];

  const skillBadges = [
    {
      title: "React Development",
      subtitle: "LinkedIn Skill Badge",
      date: "February 2023",
      description: "Endorsed by peers for expertise in building responsive React applications.",
    },
    {
      title: "JavaScript Proficiency",
      subtitle: "LinkedIn Skill Badge",
      date: "February 2023",
      description: "Earned for demonstrating advanced JavaScript knowledge in web development.",
    },
  ];

  const milestones = [
    {
      title: "Advanced JavaScript",
      subtitle: "Udemy",
      date: "May 2022",
      description: "Completed a hands-on course in ES6, asynchronous programming, and functional design.",
    },
    {
      title: "Full-Stack Web Development Bootcamp",
      subtitle: "Tech Institute",
      date: "August 2022",
      description: "Graduated with skills in React, Node.js, and RESTful APIs.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Achievements and Certifications</h1>

      <p className="text-lg mb-8">
        A showcase of my continuous learning journey and professional accomplishments. These certifications and accolades
        represent my commitment to growth and excellence in web development and beyond.
      </p>

      <hr className="my-8" />

      <AchievementsSection title="Professional Certifications" items={certifications} />
      <AchievementsSection title="Awards and Recognition" items={awards} />
      <AchievementsSection title="Skill Badges" items={skillBadges} />
      <AchievementsSection title="Notable Learning Milestones" items={milestones} />

      <BlurFade delay={0.8}>
        <p className="text-lg">
          These achievements are just a glimpse into my learning path.{" "}
          <a href="#" className="text-primary hover:underline">
            Contact me here
          </a>{" "}
          or{" "}
          <a href="#" className="text-primary hover:underline">
            view my resume
          </a>{" "}
          for a deeper dive into my professional growth.
        </p>
      </BlurFade>
    </div>
  );
};

export default AchievementsPage;
