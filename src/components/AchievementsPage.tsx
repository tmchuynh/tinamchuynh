"use client";

import BlurFade from "@/components/ui/blur-fade";
import { certificationImages } from "@/data/data";
import { AchievementItem, AchievementsSectionProps } from "@/data/types";
import React, { useEffect, useState } from "react";
import { ImageCarousel } from "./ImageCarousel";
import { FaFreeCodeCamp, FaLinkedinIn } from "react-icons/fa6";
import { useTheme } from "next-themes";

const AchievementsSection: React.FC<AchievementsSectionProps> = ( { title, items } ) => {

  const { theme } = useTheme();
  const [mounted, setMounted] = useState( false );

  useEffect( () => {
    setMounted( true );
  }, [] );

  if ( !mounted ) {
    return null;
  }

  return (
    <div className="mb-6">
      <BlurFade delay={0.25}>
        <h2 className="text-2xl font-semibold">{title}</h2>
      </BlurFade>

      <ul className="list-none flex flex-col">
        {items.map( ( item, index ) => (
          <li key={index} className="inline-flex mb-1 items-center">
            {item.subtitle === "FreeCodeCamp" ? (
              <FaFreeCodeCamp
                className="mr-2 h-6 w-6 text-tertiary"
                aria-hidden="true"
              />
            ) : item.subtitle === "Software Development Online MERN" ? (
              ''
            ) : (
              <FaLinkedinIn
                className="mr-2 h-6 w-6 text-tertiary"
                aria-hidden="true"
              />
            )}
            <BlurFade key={`${ index }_${ item.title }`} delay={0.35 + index * 0.05} className="flex justify-between w-full self-center pt-3">
              <p><strong>{item.title}</strong>
                {item.subtitle === "Software Development Online MERN" ? (
                  <span className="block">{item.subtitle}</span>
                ) : ''}
              </p>
              <p className="italic pl-4">{item.date}</p>
            </BlurFade>
          </li>
        ) )}
      </ul>
    </div>
  );
};

const AchievementsPage = ( {
  certifications,
  credientials,
}: {
  certifications: AchievementItem[];
  credientials: AchievementItem[];
} ) => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-6">Achievements and Certifications</h1>

      <p className="text-lg mb-8">
        A showcase of my continuous learning journey and professional accomplishments. These certifications and accolades
        represent my commitment to growth and excellence in web development and beyond.
      </p>

      <hr className="my-8" />

      <AchievementsSection title="Credentials" items={credientials} />
      <ImageCarousel images={certificationImages} className="w-1/2 mx-auto" />

      <AchievementsSection title="Certifications" items={certifications} />

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

    </>
  );
};

export default AchievementsPage;
