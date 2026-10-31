import React from 'react'
import {images} from '../assets/'
import SidePostCard from "../components/SidePostCard"

const sidePosts = [
    {
  id: 1,
  image: images.recentblog1,
  author: 'Olivia Rhye',
  date: '1 Jan 2023',
  title: 'UX review presentations',
  excerpt: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
},
  {
    id: 2,
    image: images.recentblog2,
    author: 'Phoenix Baker',
    date: '1 Jan 2023',
    title: 'Migrating to Linear 101',
    excerpt: 'Linear helps streamline software projects, sprints, tasks, and bug tracking.',
  },
  {
    id: 3,
    image: images.recentblog3,
    author: 'Lana Steiner',
    date: '1 Jan 2023',
    title: 'Building your API Stack',
    excerpt: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
  },
];

const blogPosts = [
  {
    id: 1,
    image: images.recentblog1,
    author: "Olivia Rhye",
    date: "1 Jan 2023",
    title: "Grid system for better Design User Interface",
    excerpt:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements.",
    link: "#",
  },
  {
    id: 2,
    image: images.recentblog2,
    author: "Phoenix Baker",
    date: "12 Feb 2023",
    title: "Typography basics every designer should know",
    excerpt:
      "Good typography improves readability and creates visual hierarchy. Learn how font size, line height, and spacing work together to make your interface clean and easy to read.",
    link: "#",
  },
  {
    id: 3,
    image: images.recentblog3,
    author: "Lana Steiner",
    date: "5 Mar 2023",
    title: "Choosing the right color palette for your product",
    excerpt:
      "Colors shape how users feel about your product. This guide covers color theory, contrast ratios for accessibility, and practical tips for building a consistent palette.",
    link: "#",
  },
  {
    id: 4,
    image: images.recentblog4,
    author: "Demi Wilkinson",
    date: "20 Apr 2023",
    title: "Building responsive layouts with Flexbox and Grid",
    excerpt:
      "Flexbox and CSS Grid are powerful tools for modern layouts. Understand when to use each one and how to combine them to build responsive pages that look great on any screen.",
    link: "#",
  },
];
const Home = () => {
  return (
    <div className='w-full '>
        <div className='max-w-[1220px] mx-auto px-4 '>
            <div><img src={images.banner} alt="" /></div>
            <section className='pt-4'>
                <h2 className='font-semibold py-4 lg:text-2xl'>Recent blog posts</h2>
                <div className='flex gap-4'>
                    <div className='flex-1'>
                            <img src={images.recentblog1} alt="" className='w-full aspect-[4/1] object-cover'/>
                        
                        <div className='flex flex-col gap-1 mt-6'>
                            <time className='text-violet-700 text-[12px] font-extrabold'>Olivia Thywe - 1 Jan 2023</time>
                            <div className='flex justify-between'>
                                <h3 className='font-semibold text-xl'>UX review presentations </h3>
                                <button><i className="fa-solid fa-up-right-from-square"></i></button>
                            </div>
                            <p className='text-zinc-600 text-sm'>How do you create compeling presentations that wow your colleagues and impress your managers?</p>
                            
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col gap-4'>
                        <div className='flex'>
                            <img src={images.recentblog2} alt="" className='w-1/2 aspect-[5/1] object-cover'/>
                            <div className='flex flex-col w-1/2 ml-3 gap-2'>
                            <time className='text-violet-700 font-extrabold text-[10px]'>Olivia Thywe - 1 Jan 2023</time>
                            <div className='flex justify-between'>
                                <h3 className='font-semibold text-md'>Migrating to Linear 101</h3>
                            </div>
                            <p className='text-zinc-600 text-sm line-clamp-3'>How do you create compeling presentations that wow your colleagues and impress your managers?</p>
                            
                            </div>
                        </div>
                        <div className='flex'>
                            <img src={images.recentblog3} alt="" className='w-1/2 aspect-[5/1] object-cover'/>
                            <div className='flex flex-col w-1/2 ml-3 gap-2'>
                            <time className='text-violet-700 font-extrabold text-[10px] xl:text-xl'>Lana Steiner  - 1 Jan 2023</time>
                            <div className='flex '>
                                <h3 className='font-semibold text-md'>Building your API Stack</h3>
                            </div>
                            <p className='text-zinc-600 text-sm line-clamp-3'>How do you create compeling presentations that wow your colleagues and impress your managers?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-8'>
                    <SidePostCard post={blogPosts[0]} orientation="landscape"/> 
                </div>
            </section>
            <section className='mt-8'>
                <h2 className='font-semibold py-4 lg:text-2xl'>All blog posts</h2>
                <div className='grid grid-cols-3 gap-4'>
                    {sidePosts.map((post) => (
                        <SidePostCard key={post.id} post={post} orientation="portrait"/>
                    ))}
                </div>
            </section>
        </div>
    </div>
  )
}

export default Home