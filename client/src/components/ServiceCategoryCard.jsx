import React from 'react'

function ServiceCategoryCard({title, location, workingTime, workingDay}) {
  return (
    <div className='w-64 bg-white border-2 rounded-md flex-shrink-0 flex flex-col'>
        <div className='w-[90%] bg-neutral-200 border-2 rounded-md aspect-square mt-4 m-auto'></div>
        <p className='text-neutral-700 capitalize pl-4 pt-4 font-bold'>{title}</p>
        <div className='flex flex-row justify-between pb-4 pt-2'>
          <p className='text-neutral-700 capitalize px-4 text-xs'>{location}</p>
          <p className='text-neutral-700 capitalize px-4 text-xs'>{workingDay}<br /> {workingTime}</p>
        </div>
    </div>
  )
}

export default ServiceCategoryCard