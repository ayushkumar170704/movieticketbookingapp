import React, { useEffect, useState } from 'react';
import { dummyShowsData } from '../../assets/assets';
import Loading from '../../components/Loading';
import Title from '../../components/admin/Title';
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
    console.log("Add Time button clicked");
    console.log("dateTimeInput value:", dateTimeInput);
    
    if (!dateTimeInput) {
      console.log("No datetime input provided");
      return;
    }
    
    // dateTimeInput is already in "YYYY-MM-DDTHH:MM" format
    const [date, time] = dateTimeInput.split("T");
    console.log("Split result - date:", date, "time:", time);
    
    if (!date || !time) {
      console.log("Invalid date or time after split");
      return;
    }

    setDateTimeSelection((prev) => {
      const times = prev[date] || [];
      console.log("Existing times for date:", times);
      
      if (!times.includes(time)) {
        const newSelection = { ...prev, [date]: [...times, time] };
        console.log("New dateTimeSelection:", newSelection);
        return newSelection;
      }
      console.log("Time already exists for this date");
      return prev;
    });
    
    // Clear input after adding
    setDateTimeInput("");
  };

  const handleRemoveTime = (date, timeToRemove) => {
    setDateTimeSelection((prev) => {
      const times = prev[date].filter(time => time !== timeToRemove);
      if (times.length === 0) {
        const { [date]: removed, ...rest } = prev;
        return rest;
      }
      return { ...prev, [date]: times };
    });
  };

  const handleSubmit = () => {
    if (!selectedMovie || !showPrice || Object.keys(dateTimeSelection).length === 0) {
      alert('Please select a movie, set a price, and add at least one show time.');
      return;
    }

    const showData = {
      movieId: selectedMovie,
      price: parseFloat(showPrice),
      showTimes: dateTimeSelection,
      createdAt: new Date().toISOString()
    };

    console.log('Show data to submit:', showData);
    // Here you would typically send the data to your backend
    alert('Show added successfully!');
    
    // Reset form
    setSelectedMovie(null);
    setShowPrice("");
    setDateTimeSelection({});
  };

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);

  return nowPlayingMovies.length > 0 ? (
    <>
      <Title text1="Add" text2="Shows" />
      <p className='mt-10 text-lg font-medium'>Now Playing Movies</p>
      
      <div className='overflow-x-auto pb-4'>
        <div className='flex flex-wrap gap-4 mt-4'>
          {nowPlayingMovies.map((movie) => (
            <div 
              key={movie.id} 
              className={`relative max-w-40 cursor-pointer hover:opacity-100 ${
                selectedMovie === movie.id ? 'opacity-100' : 'opacity-70 hover:opacity-90'
              } hover:-translate-y-1 transition duration-300`} 
              onClick={() => setSelectedMovie(movie.id)}
            >
              <div className='relative'>
                <img 
                  src={movie.poster_path} 
                  alt={movie.title} 
                  className='w-full object-cover brightness-90 rounded-lg' 
                />
                <div className='text-sm flex items-center justify-between p-2 bg-black/70 w-full absolute bottom-0 left-0 rounded-b-lg'>
                  <p className='flex items-center gap-1 text-gray-400'>
                    <StarIcon className='w-4 h-4 text-primary fill-primary' />
                    {movie.vote_average.toFixed(1)}
                  </p>
                  <p className='text-gray-300'>{kConverter(movie.vote_count)} Votes</p>
                </div>
              </div>
              
              {selectedMovie === movie.id && (
                <div className='absolute top-2 right-2 flex items-center justify-center bg-primary h-6 w-6 rounded-full'>
                  <CheckIcon className='w-4 h-4 text-white' strokeWidth={2.5} />
                </div>
              )}
              
              <p className='font-medium truncate mt-2'>{movie.title}</p>
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
          <h3 className='text-sm font-medium mb-2'>Selected Date-Time</h3>
          <div className='space-y-2'>
            {Object.entries(dateTimeSelection).map(([date, times]) => (
              <div key={date}>
                <p className='font-medium mb-2'>{date}</p>
                <div className='space-y-1'>
                  {times.map((time) => (
                    <div 
                      key={time} 
                      className='flex items-center gap-2'
                    >
                      <span className='px-2 py-1 bg-primary/20 text-primary rounded text-sm min-w-16 text-center'>
                        {time}
                      </span>
                      <button
                        onClick={() => handleRemoveTime(date, time)}
                        className='w-6 h-6 bg-red-500 text-white rounded flex items-center justify-center text-sm hover:bg-red-600 transition-colors'
                        title="Remove time"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Submit Button */}
      <div className='mt-8'>
        <button 
          onClick={handleSubmit}
          className='bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/80 transition-colors font-medium'
        >
          Add Show
        </button>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default AddShows;