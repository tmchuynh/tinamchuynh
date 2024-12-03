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
    label: "Info",
    dropdownItems: [
      { label: "Who I Am", href: "/info/about" },
      { label: "Accessibility Declaration", href: "/info/accessibility" },
      { label: "Resume", href: "/info/resume" },
      { label: "Tech Stack", href: "/info/techStack" },
    ],
  },
  {
    label: "Achievements",
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
    <div className="max-w-7xl mx-auto p-6">
      <Breadcrumb items={breadcrumbItems} />
      <AchievementsPage credientials={credientials} certifications={sort( certifications )} />
    </div >
  );
};

export default Page;
