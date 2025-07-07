import React, { useEffect, useState } from 'react';
import { dummyShowsData } from '../../assets/assets';
import Loading from '../../components/Loading';
import Title from '../../components/admin/Title'; // Fixed: Removed .JSX extension
import { CheckIcon, StarIcon } from 'lucide-react';
import { kConverter } from '../../lib/kConverter';

const AddShows = () => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [dateTimeSelection, setDateTimeSelection] = useState({});
  const [dateTimeInput, setDateTimeInput] = useState("");
  const [showPrice, setShowPrice] = useState("");

  const fetchNowPlayingMovies = async () => {
    setNowPlayingMovies(dummyShowsData);
  };

  const handleDateTimeAdd = () => {
    if (!dateTimeInput) return;
    const [date, time] = dateTimeInput.split("T");
    if (!date || !time) return;

    setDateTimeSelection((prev) => {
      const times = prev[date] || [];
      if (!times.includes(time)) {
        return { ...prev, [date]: [...times, time] };
      }
      return prev;
    });
    
    // Clear input after adding
    setDateTimeInput("");
  };

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);

  return nowPlayingMovies.length > 0 ? (
    <>
      <Title text1="Add" text2="Shows" />
      <p className='mt-10 text-lg font-medium'>Now Playing Movies</p> {/* Fixed: font-mdeium -> font-medium */}
      
      <div className='overflow-x-auto pb-4'>
        <div className='group flex flex-wrap gap-4 mt-4 w-max'>
          {nowPlayingMovies.map((movie) => (
            <div 
              key={movie.id} 
              className={`relative max-w-40 cursor-pointer group-hover:not-hover:opacity-40 hover:-translate-y-1 transition duration-300`} 
              onClick={() => setSelectedMovie(movie.id)}
            >
              <div className='relative'>
                <img 
                  src={movie.poster_path} 
                  alt={movie.title} 
                  className='w-full object-cover brightness-90' 
                />
                <div className='text-sm flex items-center justify-between p-2 bg-black/70 w-full absolute bottom-0 left-0'>
                  <p className='flex items-center gap-1 text-gray-400'>
                    <StarIcon className='w-4 h-4 text-primary fill-primary' />
                    {movie.vote_average.toFixed(1)}
                  </p>
                  <p className='text-gray-300'>{kConverter(movie.vote_count)} Votes</p>
                </div>
              </div>
              
              {selectedMovie === movie.id && (
                <div className='absolute top-2 right-2 flex items-center justify-center bg-primary h-6 w-6 rounded'>
                  <CheckIcon className='w-4 h-4 text-white' strokeWidth={2.5} />
                </div>
              )}
              
              <p className='font-medium truncate'>{movie.title}</p>
              <p className='text-gray-400 text-sm'>{movie.release_date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Show price Input */}
      <div className='mt-8'>
        <label className='block text-sm font-medium mb-2'>Show Price</label>
        <div className='inline-flex items-center gap-2 border border-gray-600 px-3 py-2 rounded-md'>
          <p className='text-gray-400 text-sm'>{currency}</p>
          <input 
            min={0} 
            type="number" 
            value={showPrice} 
            onChange={(e) => setShowPrice(e.target.value)} 
            placeholder="Enter show price"
            className="outline-none bg-transparent"
          />
        </div>
      </div>

      {/* Date and time selection */}
      <div className='mt-6'>
        <label className='block text-sm font-medium mb-2'>Select Date and Time</label>
        <div className='inline-flex gap-5 border border-gray-600 p-1 pl-3 rounded-lg'>
          <input 
            type='datetime-local' 
            value={dateTimeInput} 
            onChange={(e) => setDateTimeInput(e.target.value)}
            className='outline-none rounded-md bg-transparent'
          />
          <button 
            onClick={handleDateTimeAdd} 
            className='bg-primary/80 text-white px-3 text-sm rounded-lg hover:bg-primary cursor-pointer transition-colors'
          >
            Add Time
          </button>
        </div>
      </div>

      {/* Display selected date/time combinations */}
      {Object.keys(dateTimeSelection).length > 0 && (
        <div className='mt-6'>
          <h3 className='text-sm font-medium mb-2'>Selected Show Times:</h3>
          <div className='space-y-2'>
            {Object.entries(dateTimeSelection).map(([date, times]) => (
              <div key={date} className='p-3 border border-gray-600 rounded-md'>
                <p className='font-medium mb-1'>{new Date(date).toDateString()}</p>
                <div className='flex flex-wrap gap-2'>
                  {times.map((time) => (
                    <span 
                      key={time} 
                      className='px-2 py-1 bg-primary/20 text-primary rounded text-sm'
                    >
                      {time}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  ) : (
    <Loading />
  );
};

export default AddShows;