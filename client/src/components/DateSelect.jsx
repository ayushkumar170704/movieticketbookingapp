import React from 'react';
import BlurCircle from './BlurCircle';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

const DateSelect = ({ dateTime, id }) => {
  return (
    <div id={id || "dateselect"} className='pt-28'>
      <div className='relative p-8 bg-primary/10 border border-primary/20 rounded-lg'>
        {/* Blur Background */}
        <BlurCircle top="-100px" left="-100px" />
        <BlurCircle top="100px" right="0px" />

        {/* Date Section shifted to left */}
        <div className='flex flex-col items-start gap-4'>
          <p className='text-lg font-semibold'>Choose Date</p>
          <div className='flex items-center gap-6 text-sm'>
            <ChevronLeftIcon width={28} />
            <span className='grid grid-cols-3 md:flex flex-wrap md:max-w-lg gap-4'>
              {Object.keys(dateTime).map((date) => (
                <button
                  type="button"
                  key={date}
                  className='flex flex-col items-center justify-center h-14 w-14 aspect-square rounded cursor-pointer hover:bg-primary/20 transition'
                >
                  <span>{new Date(date).getDate()}</span>
                  <span>{new Date(date).toLocaleDateString("en-US", { month: "short" })}</span>
                </button>
              ))}
            </span>
            <ChevronRightIcon width={28} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateSelect;
