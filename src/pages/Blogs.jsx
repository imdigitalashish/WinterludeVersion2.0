import React,{useState,useEffect} from 'react';
import client from "../client";
import '../style/animations.css'
import BlogCard from "../components/BlogCard";

import shapeGreen from '../images/blogs/shapeGreen.svg';
import circleBlue from '../images/blogs/circleBlue.svg';
import randomShape1 from '../images/blogs/randomShape1.svg';
import randomShape2 from '../images/blogs/randomShape2.svg';

function Blogs() {
  const [posts, setPosts] = useState([])


  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] { title, slug, description, publishedAt }`
      )
      .then((data) => setPosts(data))
  }, [])


  return (
    <>
      {/* Background */}
      <div className="flex w-full small:overflow-clip absolute justify-between z-0 mt-[2vmax] small:mt-[20vmax]">
        <img className='w-[25vmax] -mt-[6vmax] small:mt-[4vmax] small:w-[18vmax] bounce2' src={shapeGreen} alt='shapeGreen'/>
        <img className='ml-[-50vw] small:hidden bounce' src={randomShape1} alt='randomShape1'/>
        <img className='mr-[-40vw] small:hidden bounce2' src={randomShape2} alt='randomShape2'/>
        <img className='w-[12vmax] mt-[5vmax] small:mt-[16vmax] small:w-[8vmax] bounce' src={circleBlue} alt='circleBlue'/>
      </div>


      {/* Heading */}
      <div className="flex flex-col w-full items-center text-center font-google relative z-5 mt-[0.5vmax] ">
        <h2 className='w-2/5 mt-[10vmax] text-googleGreen font-[700] text-[3rem] small:text-[2rem] small:w-10/12'>
          Exploring the realm of Coding and Technology</h2>
        <p className = 'w-2/5 mt-10 text-[1.5rem] text-googleBlue small:text-[1.25rem] small:w-5/12 small:mt-2'>
          and some more random stuff...</p>
      </div>


      {/* Blogs Container */}
      <div className='flex flex-wrap w-screen mt-[13vmax] small:mt-[28vmax] relative z-5 px-10 justify-center'>
        {posts.map((post, i) =>(
          <>
          <BlogCard key={i} title={post.title} 
                    link={post.slug.current} 
                    description={post.description} 
                    date={post.publishedAt}/>
          </>
        ))}
      </div>

    </>
  )
}

export default Blogs