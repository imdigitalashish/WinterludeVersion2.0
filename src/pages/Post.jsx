import React,{useState,useEffect} from 'react';
import { useParams } from "react-router-dom"
import client from "../client";
import BlockContent from '@sanity/block-content-to-react'

function Post() {
    const [singlePost, setSinglePost] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    const { slug } = useParams();
    useEffect(() => {
        client
          .fetch(
            `*[slug.current == "${slug}"] { title, body, description, mainImage { asset -> {_id, url}, alt} }`
          )
          .then((data) => setSinglePost(data[0]))
        setIsLoading(false)
      }, [slug])

   
  return (
    <>
        {isLoading ? (<h1 > Loading...</h1>) :
        (<section className="font-google w-screen">

          {singlePost.mainImage && singlePost.mainImage.asset && (
            <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            title={singlePost.title}
            className='w-screen h-[60vh] object-cover'
            />
            )}

          <h2 className="text-center font-[700] text-googleBlue text-[3rem] my-10">{singlePost.title}</h2>
          <p className='text-center font-[600] text-textSecondary text-[1rem] px-20 small:px-10'>{singlePost.description}</p>
          <BlockContent
            blocks={singlePost.body}
            projectId="d25hw29d"
            dataset="production"
            className='p-20 small:p-10'
          />

        </section>)}
    </>
  )
}

export default Post