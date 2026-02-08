import React from 'react';

const IsLoading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-xl p-4 shadow animate-pulse"
        >
          <div className="h-40 bg-gray-200 rounded-md mb-4"></div>

          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>

          <div className="flex gap-2">
            <div className="h-9 bg-gray-200 rounded w-full"></div>
            <div className="h-9 bg-gray-200 rounded w-9"></div>
          </div>
        </div>
      ))}
    </div>
  )
};

export default IsLoading;