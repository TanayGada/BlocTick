import React from 'react'


const Card = () => {
  return (
    <div className='flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800'>
      <div className='w-2/3 p-4 md:p-4'>
        <h6 className='text-sm'>time</h6>
        <h1 className='text-l font-bold text-gray-800 dark:text-white'>
          Event Name
        </h1>
        <h6 className='text-s'>Host Name</h6>
        <h6 className='text-s'>Location</h6>

        <div className='flex justify-between mt-3 item-center'>
          <button className='px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600'>
            Manage
          </button>
          <button className='px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600'>
            CheckIn
          </button>
        </div>
      </div>
      <div className='w-1/3 bg-cover bg-blue-gray-600'></div>
    </div>
  )
}

export default Card