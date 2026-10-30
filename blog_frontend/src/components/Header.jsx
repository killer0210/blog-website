import React from 'react'

function Header() {
  return (
    <div className='w-full flex flex-row justify-between p-4 items-center'>
        <p className='font-bold text-lg'>BLOG</p>
        <div className='rounded-lg border-gray-400 border flex items-center w-[40%]'>
            <span className='w-8 h-8 flex items-center justify-center '><i className="fa-solid fa-magnifying-glass text-gray-400 text-sm"></i></span>
            <input placeholder='хайлт' className=' outline-none my-1 placeholder:text-gray-4 '></input>
        </div>
    
        <nav>
            <ul>
                <li className='bg-black font-bold text-xs text-white px-4 py-2 rounded-lg'>
                    НЭВТРЭХ
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header