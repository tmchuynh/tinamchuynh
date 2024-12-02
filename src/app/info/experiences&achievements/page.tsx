import AchievementsPage from '@/components/AchievementsPage';
import Breadcrumb from '@/components/ui/breadcrumb';
import { awards, certifications, milestones, skillBadges } from '@/data/data';
import React from 'react';

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

const Page = () => {
  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />

      <AchievementsPage awards={awards} skillBadges={skillBadges} milestones={milestones} certifications={certifications} />
    </div >
  );
};

export default Page;
