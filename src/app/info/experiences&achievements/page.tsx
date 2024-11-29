import AchievementsPage from '@/components/AchievementsPage';
import { awards, certifications, milestones, skillBadges } from '@/data/data';
import React from 'react';

const Page = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">My Relevant Experiences</h1>
      <AchievementsPage awards={awards} skillBadges={skillBadges} milestones={milestones} certifications={certifications} />
    </div >
  );
};

export default Page;
