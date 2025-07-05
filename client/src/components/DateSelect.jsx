import React, { useState } from 'react';
import BlurCircle from './BlurCircle';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const DateSelect = ({ dateTime, id }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  
  const onBookHandler = () => {
    if (!selected) {
      return toast('Please select a date');
    }
    navigate(`/movies/${id}/${selected}`);
    scrollTo(0, 0);
  };

  return (
    <div id={id || "dateselect"} className='pt-28'>
      <div className='relative p-8 bg-primary/10 border border-primary/20 rounded-lg'>
        {/* Blur Background */}
        <BlurCircle top="-100px" left="-100px" />
        <BlurCircle top="100px" right="0px" />

        {/* Date Section and Book Button Layout */}
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6'>
          <div className='flex flex-col items-start gap-4'>
            <p className='text-lg font-semibold'>Choose Date</p>
            <div className='flex items-center gap-6 text-sm'>
              <ChevronLeftIcon width={28} />
              <span className='grid grid-cols-3 md:flex flex-wrap md:max-w-lg gap-4'>
                {Object.keys(dateTime).map((date) => (
                  <button 
                    onClick={() => setSelected(date)} 
                    key={date}
                    type="button"                                     
                    className={`flex flex-col items-center justify-center h-14 w-14 aspect-square rounded cursor-pointer hover:bg-primary/20 transition ${selected === date ? "bg-primary text-white" : "border border-primary/70"}`}
                  >
                    <span>{new Date(date).getDate()}</span>
                    <span>{new Date(date).toLocaleDateString("en-US", { month: "short" })}</span>
                  </button>
                ))}
              </span>
              <ChevronRightIcon width={28} />
            </div>
          </div>
          <div className='flex lg:flex-col lg:items-end lg:justify-center'>
            <button 
              onClick={onBookHandler} 
              className='bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-all cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold'
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateSelect;