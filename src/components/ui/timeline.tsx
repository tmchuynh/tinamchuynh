import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { TimelineEvent } from '@/data/types';

export default function AltTimeline(
  {
    events
  }: {
    events: TimelineEvent[];
  } ) {
  return (
    <Timeline position="alternate">
      {events.map( ( event, index ) => (
        <>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color={event.color || 'primary'}>
                <event.icon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              {index % 2 === 0 ? (
                <div className='inline-flex items-center w-44 justify-between'>
                  <h6 className='text-xl font-bold'>
                    {event.title}
                  </h6>
                  <code>
                    {event.time}
                  </code>
                </div>
              ) : (
                <div className='inline-flex items-center w-44 justify-between'>
                  <code>
                    {event.time}
                  </code>
                  <h6 className='text-xl font-bold'>
                    {event.title}
                  </h6>
                </div>
              )}
              <div className='flex flex-col'>
                <h3 className={index % 2 === 0 ? 'w-3/4 text-lg' : 'text-lg ml-24'}>{event.description}</h3>
                <ul>
                  {event.bullets &&
                    event.bullets.map( ( bullet, bulletIndex ) => (
                      <li key={bulletIndex} className={index % 2 === 0 ? 'text-sm list-disc ml-4' : 'text-sm list-disc mr-4'} dir={index % 2 === 0 ? "ltr" : "rtl"}>
                        {bullet}
                      </li>
                    ) )}
                </ul>
              </div>
            </TimelineContent>
          </TimelineItem>
        </>
      ) )}
    </Timeline>
  );
}
