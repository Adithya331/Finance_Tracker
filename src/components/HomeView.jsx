import React from 'react'

const HomeView = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-8 h-full  gap-2 border-red-200 border-2">
      <div className="row-start-1 col-start-1 col-end-2 p-2 bg-gray-600">
        Heading
      </div>

      <div className="row-start-2 row-end-4 col-start-1 col-end-4 p-2 bg-gray-600">
        Heading
      </div>

      <div className="row-start-4 row-end-9 col-start-1 col-end-3 p-2 bg-gray-600">
        Heading
      </div>
      <div className="row-start-4 row-end-9 col-start-3 col-end-4 p-2 bg-gray-600">
        Heading
      </div>
    </div>
  )
}

export default HomeView
