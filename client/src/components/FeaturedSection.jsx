import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import BlurCircle from './BlurCircle'
import { dummyShowsData } from '../assets/assets'
import MovieCard from './MovieCard'

const FeaturedSection = () => {
  const navigate = useNavigate()

  const handleViewAllMovies = () => {
    navigate('/movies')
    window.scrollTo(0, 0)
  }

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden'>
      <div className='relative flex items-center justify-between pt-20 pb-10'>
        <BlurCircle top="0" right='-80px' />
        
        <h2 className='text-2xl md:text-3xl font-bold text-white'>
          Now Showing
        </h2>
        
        <button 
          onClick={handleViewAllMovies}
          aria-label="View all movies"
          className='group flex items-center gap-2 text-sm text-gray-300 hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-lg transition-all duration-300 border border-transparent hover:border-primary/30'
        >
          View All
          <ArrowRight className='group-hover:translate-x-1 transition-transform duration-300 w-4 h-4' />
        </button>
      </div>

      {/* Movies Grid */}
      <div className='flex flex-wrap max-sm:justify-center gap-8 mt-8'>
        {dummyShowsData.slice(0, 4).map((show) => (
          <MovieCard key={show._id} movie={show} />
        ))}
      </div>
      
      {/* Show More Button */}
      <div className='flex justify-center mt-20'>
        <button 
          onClick={handleViewAllMovies}
          aria-label="Show more movies"
          className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition-colors duration-300 rounded-md font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50'
        >
          Show More
        </button>
      </div>
    </div>
  )
}

export default FeaturedSection