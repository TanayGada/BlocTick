import React from "react";

const SubscribeCards = () => {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-xl shadow relative bg-opacity-35 ">
      
      <div className="flex flex-col md:flex-row justify-between mb-4 relative z-10">
        <img
          className="mb-4 md:mb-0 flex-col square rounded"
          src="https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=48,height=48/calendars/ym/8be51f91-8261-46e7-aeb7-590a735542ed"
          width="58"
          height="48"
          alt="Avatar for J.P. Morgan Healthcare Conference"
          loading="eager"
        />
        <div >
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-100 rounded-lg focus:ring-4 focus:outline-2  dark:bg-green-300 dark:hover:bg-green-400 focus:ring-yellow-100"
          >
            Subscribe
          </a>
        </div>
      </div>
      <div className="font-sans font-bold text-pretty text-green-800 text-opacity-100">
        J.P. Morgan Healthcare Conference
      </div>
      <div className="font-sans font-medium text-pretty text-black text-opacity-70">
        The J.P. Morgan Healthcare Conference is an annual event where global
        industry leaders, emerging companies, and investors discuss trends,
        opportunities, and challenges in the healthcare sector.
      </div>
    </div>
  );
};

export default SubscribeCards;
