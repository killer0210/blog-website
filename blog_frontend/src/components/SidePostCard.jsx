import React from 'react'
import {images} from '../assets'


// "flex-col": orientation === "portrait",
// "flex-row": orientation === "landscape",


const SidePostCard = ({post, orientation}) => {
  return (
    <div className= {`flex gap-2 mt-6 ${orientation === "portrait" ?"flex-col" : "flex-row"}`}>
        <img src={post.image} alt="" className={`w-full  object-cover ${orientation === "portrait" ? "aspect-[6/3]" : "aspect-[5/1]"}`} />
        <div className={` mt-6`}>
          <time className='text-violet-700 text-[12px] font-extrabold'>{post.author} - {post.date}</time>
          <div className='flex justify-between my-2'>
            <h3 className='font-semibold text-lg'>{post.title}</h3>
            <button><i className='fa-solid fa-up-right-from-square'></i></button>
          </div>
          <p className={`text-zinc-600 text-sm ${orientation === "portrait" ? "line-clamp-2" : "line-clamp-3" }`}>{post.excerpt}</p>
        </div>
    </div>
  )
}

export default SidePostCard