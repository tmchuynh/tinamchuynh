import React from 'react';
import AltTimeline from '@/components/ui/timeline';
import { timelineData } from '@/data/data';

const Page = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">My Past History</h1>
      <AltTimeline events={timelineData} />
    </div >
  );
};

export default Page;
