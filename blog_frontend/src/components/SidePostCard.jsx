import React from 'react'

const SidePostCard = () => {
  return (
    <div>
        <div>
                                <img src='' alt="" />
                                  <div className='flex-1 flex flex-col gap-3'>
                                    <time className='text-violet-700 text-[12px] font-extrabold'>Olivia Thywe - 1 Jan 2023</time>
                                    <div className='flex justify-between'>
                                        <h3 className='font-semibold text-xl'>Grid system for better Design User Interface</h3>
                                        <button><i className="fa-solid fa-up-right-from-square"></i></button>
                                    </div>
                                    <p className='text-zinc-600 text-sm line-clamp-3'>A grid system is ad design tool used to arrange content on a wedpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealign and easier to navigate.</p>
                                    
        </div>
    </div>
  )
}

export default SidePostCard