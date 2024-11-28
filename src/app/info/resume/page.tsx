import React from 'react';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import { TimelineEvent } from '@/data/types';
import AltTimeline from '@/components/ui/timeline';

const timelineData: TimelineEvent[] = [
  {
    time: '9:30 am',
    title: 'Eat',
    description: 'Because you need strength',
    bullets: ["Lorem amet exercitation duis occaecat cupidatat occaecat irure eu dolore Lorem.", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Dolore proident veniam quis duis duis dolore ullamco do sint ullamco dolore enim consequat."],
    icon: FastfoodIcon,
    color: 'secondary',
  },
  {
    time: '10:00 am',
    title: 'Code',
    description: "Because it's awesome!",
    bullets: ["Lorem amet exercitation duis occaecat cupidatat occaecat irure eu dolore Lorem.", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Dolore proident veniam quis duis duis dolore ullamco do sint ullamco dolore enim consequat."],
    icon: LaptopMacIcon,
    color: 'success',
  },
  {
    time: '11:00 pm',
    title: 'Sleep',
    description: 'Because you need rest',
    bullets: [],
    icon: HotelIcon,
    color: 'inherit',
  },
  {
    time: '7:00 am',
    title: 'Repeat',
    description: 'Because this is the life you love!',
    bullets: [],
    icon: RepeatIcon,
    color: 'error',
  },
  {
    time: '7:00 am',
    title: 'Repeat',
    description: 'Because this is the life you love!',
    bullets: [],
    icon: RepeatIcon,
    color: 'info',
  },
  {
    time: '7:00 am',
    title: 'Repeat',
    description: 'Because this is the life you love!',
    bullets: [],
    icon: RepeatIcon,
    color: 'warning',
  },
  {
    time: '7:00 am',
    title: 'Repeat',
    description: 'Because this is the life you love!',
    bullets: [],
    icon: RepeatIcon,
    color: 'grey',
  },
];

const Page = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-8">My Daily Routine</h1>
      <AltTimeline events={timelineData} />
    </div>
  );
};

export default Page;
