import React from 'react';
import AltTimeline from '@/components/ui/timeline';
import { timelineData } from '@/data/data';
import Breadcrumb from '@/components/ui/breadcrumb';

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
      { label: "Tech Stack", href: "/info/techStack" },
      { label: "Achievements", href: "/info/experiences&achievements" },
    ],
  },
  {
    label: "Resume",
  },
];

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="text-4xl font-bold text-center mb-8">My Past History</h1>
      <AltTimeline events={timelineData} />
    </div >
  );
};

export default Page;
