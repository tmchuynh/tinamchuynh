import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { TimelineEvent } from '@/data/types';
import BlurFade from './blur-fade';

export default function AltTimeline(
  {
    events
  }: {
    events: TimelineEvent[];
  } ) {

  return (
    <Timeline
      sx={{
        [`& .${ timelineItemClasses.root }:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {events.map( ( event, index ) => (
        <BlurFade delay={0.25} key={index}>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot className='h-12 w-12 justify-center items-center'>
                <event.icon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <div className='inline-flex items-center w-full justify-between'>
                <h6 className='text-xl font-bold text-primary'>
                  {event.title}
                </h6>
                <code className='text-foreground'>
                  {event.time}
                </code>
              </div>
              <div className='flex flex-col'>
                <h3 className="w-3/4 text-md text-highlight">{event.description}</h3>
                <ul>
                  {event.bullets &&
                    event.bullets.map( ( bullet, bulletIndex ) => (
                      <li key={bulletIndex} className='text-sm list-disc ml-4'>
                        {bullet}
                      </li>
                    ) )}
                </ul>
              </div>
            </TimelineContent>
          </TimelineItem>
        </BlurFade>

      ) )}
    </Timeline>
  );
}
