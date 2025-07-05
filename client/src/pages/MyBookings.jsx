import React, { useEffect, useState } from 'react'
import { dummyBookingData } from '../assets/assets'
import Loading from '../components/Loading'
import BlurCircle from '../components/BlurCircle'
import timeFormat from '../lib/timeFormat'
import { dateFormat } from '../lib/dateFormat'

const MyBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY
  const [bookings, setBookings] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getMyBookings = async () => {
    setBookings(dummyBookingData)
    setIsLoading(false)
  }

  useEffect(() => {
    getMyBookings()
  }, [])

  return !isLoading ? (
    <div className='relative px-6 md:px-16 lg:px-40 pt-30 md:pt-40 min-h-[80vh]'>
      <BlurCircle top="100px" left="100px"/>
      <div>
        <BlurCircle bottom='0px' left='600px' />
      </div>
      
      <h1 className='text-2xl font-bold mb-6 text-center md:text-left'>My Bookings</h1>
      
      {bookings.length === 0 ? (
        <div className='text-center py-16'>
          <p className='text-gray-400 text-lg'>No bookings found</p>
        </div>
      ) : (
        <div className='space-y-4'>
          {bookings.map((item, index) => (
            <div key={index} className='bg-primary/8 border border-primary/20 rounded-lg p-4 max-w-4xl mx-auto'>
              <div className='flex flex-col lg:flex-row gap-4'>
                {/* Movie Poster */}
                <div className='flex-shrink-0 mx-auto lg:mx-0'>
                  <img 
                    src={item.show.movie.poster_path} 
                    alt={item.show.movie.title}
                    className='w-32 h-48 md:w-40 md:h-56 object-cover rounded-lg shadow-md' 
                  />
                </div>
                
                {/* Movie Details and Booking Info */}
                <div className='flex-1 flex flex-col justify-between'>
                  {/* Movie Info */}
                  <div className='text-center lg:text-left'>
                    <h2 className='text-xl font-bold mb-2'>{item.show.movie.title}</h2>
                    <p className='text-gray-400 text-sm mb-1'>
                      Duration: {timeFormat(item.show.movie.runtime)}
                    </p>
                    <p className='text-gray-400 text-sm mb-4'>
                      Show Date: {dateFormat(item.show.showDateTime)}
                    </p>
                  </div>
                  
                  {/* Booking Details */}
                  <div className='flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4'>
                    {/* Seat Information */}
                    <div className='text-center lg:text-left'>
                      <p className='text-sm mb-1'>
                        <span className='text-gray-400'>Total Tickets:</span> 
                        <span className='font-medium ml-2'>{item.bookedSeats.length}</span>
                      </p>
                      <p className='text-sm'>
                        <span className='text-gray-400'>Seat Numbers:</span> 
                        <span className='font-medium ml-2'>{item.bookedSeats.join(", ")}</span>
                      </p>
                    </div>
                    
                    {/* Payment Section */}
                    <div className='text-center lg:text-right'>
                      <div className='flex items-center justify-center lg:justify-end gap-3 mb-2'>
                        <p className='text-2xl font-bold text-primary'>
                          {currency}{item.amount}
                        </p>
                        {!item.isPaid && (
                          <button className='bg-primary hover:bg-primary/90 transition-colors px-6 py-2 text-sm rounded-full font-medium text-white'>
                            Pay Now
                          </button>
                        )}
                      </div>
                      {item.isPaid && (
                        <p className='text-green-500 text-sm font-medium'>✓ Paid</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  ) : <Loading/>
}

export default MyBookings