import AchievementsPage from '@/components/AchievementsPage';
import Breadcrumb from '@/components/ui/breadcrumb';
import { certifications, credientials } from '@/data/data';
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

const sort = ( list: any[] ) => {
  return list
    .map( ( cert ) => ( {
      ...cert,
    } ) )
    .sort( ( a, b ) => b.date - a.date );
};


const Page = () => {
  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />

      <AchievementsPage credientials={credientials} certifications={sort( certifications )} />
    </div >
  );
};

export default Page;
