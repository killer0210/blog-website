import React from 'react'

const Footer = () => {
  return (
    <div>
        <ul className='flex gap-4 px-4 py-6'>
            <li >
                c2026
            </li>
            <li className='hover:decoration-1 cursor-pointer'>Twitter</li>
            <li className='hover:decoration-1 cursor-pointer'>Linkedin</li>
            <li className='hover:decoration-1 cursor-pointer'>Email</li>
            <li className='hover:decoration-1 cursor-pointer'>RSS feed</li>
            <li className='hover:decoration-1 cursor-pointer'>Add to Feedly</li>
        </ul>
    </div>
  )
}

export default Footer