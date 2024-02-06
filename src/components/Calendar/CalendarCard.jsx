import React from 'react'

const CalendarCard = () => {
    
  return (
    <div className=" max-w-sm p-6 bg-white border border-gray-200 rounded-xl shadow relative bg-opacity-35" >
      <div className="flex flex-col items-start p-5">
        <img
          className="w-14 h-14 mb-3 rounded-full shadow-lg"
          src="https://pics.craiyon.com/2023-08-01/4ed50e8989024a7fb98b5744ac01ad88.webp"
          alt="Avatar"
        />
        <h5 className="mb-2 text-xl font-medium text-gray-900 dark:text-green-700">
          Bonnie Green
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          Subscribers
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          Personal
        </span>
      </div>
    </div>
  );
}

export default CalendarCard