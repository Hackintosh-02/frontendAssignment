import React from 'react'

const Discount = () => {
  return (
    <div className="bg-[#121312] text-white p-5 rounded-2xl shadow-lg mx-4 md:mx-0">
        <div className="pb-3">
            <span className='font-bold text-[#FFB912]'>"YEAR25"</span>
            <span className='text-[#FFB912]'>Applied & </span>    
            <span className='text-[#FFEA00]'>unlocked 83% OFF </span>    
        </div>
        <div className="flex justify-between bg-[#191A19] p-4 rounded-lg">
            <div className='flex'>
                <img src='/icons/discount.svg'></img>
                <span className='ml-2 font-bold text-[#ffffff] opacity-70'>₹5000</span>
                <p className="ml-1 text-[#ffffff] opacity-60"> saved with YEAR25</p>
            </div>   
            <div className='flex justify-center items-center'>
                <img src='/icons/tick.svg' className='h-4'></img>
                <span className="pl-1 text-[#74C928] ">Applied</span>
            </div>
        </div>
    </div>
  )
}

export default Discount