"use client";

import BlurFade from "@/components/ui/blur-fade";
import { AchievementItem, AchievementsSectionProps } from "@/data/types";
import React from "react";


const AchievementsSection: React.FC<AchievementsSectionProps> = ( { title, items } ) => {
  return (
    <div className="mb-6">
      <BlurFade delay={0.25}>
        <h2 className="text-2xl font-semibold">{title}</h2>
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

const AchievementsPage = ( {
  certifications,
  awards,
  skillBadges,
  milestones,
}: {
  certifications: AchievementItem[];
  awards: AchievementItem[];
  skillBadges: AchievementItem[];
  milestones: AchievementItem[];
} ) => {
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
          <a href="#" className="text-tertiary hover:underline">
            Contact me here
          </a>{" "}
          or{" "}
          <a href="#" className="text-tertiary hover:underline">
            view my resume
          </a>{" "}
          for a deeper dive into my professional growth.
        </p>
      </BlurFade>
    </div>
  );
};

export default AchievementsPage;
