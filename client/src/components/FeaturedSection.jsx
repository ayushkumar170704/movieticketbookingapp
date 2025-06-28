import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import BlurCircle from './BlurCircle'

const FeaturedSection = () => {
  const navigate = useNavigate()

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden'>
      <div className='relative flex items-center justify-between pt-20 pb-10'>
        <BlurCircle top="0" right='-80px' />
        
        <h2 className='text-2xl md:text-3xl font-bold text-white'>
          Now Showing
        </h2>
        
        <button 
          onClick={() => navigate('/movies')} 
          className='group flex items-center gap-2 text-sm text-gray-300 hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-lg transition-all duration-300 border border-transparent hover:border-primary/30'
        >
          View All
          <ArrowRight className='group-hover:translate-x-1 transition-transform duration-300 w-4.5 h-4.5' />
        </button>
      </div>
      
     
      <div className='flex justify-center mt-20'>
        <button onClick={()=>{navigate("/movies"); scrollTo(0,0)}} 
        className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-median cursor-pointer'>
        Show more</button>
        
      

      </div>
    </div>
  )
}

export default FeaturedSection