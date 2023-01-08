import React,{useState,useEffect} from 'react';
import EventCard from "../EventCard";
import { motion, useScroll,useSpring } from "framer-motion";
import client from '../../client';


const SocialValidation = () => {
  const { scrollY } = useScroll();
  const scaleX = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 1,

  });
  const textScaleX = useSpring(scrollY, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.01,
    
  });
  const[prog,setProg] = useState(scaleX.current)
  scaleX.onChange((current, value) => {setProg(current)})
  
  
  const [data, setData] = useState([])
  useEffect(() => {
    client
      .fetch(
        `*[_type == "event"] { title,slug,tbh,mainImage { asset -> {_id, url}, alt}}`
      )
      .then((res) => setData(res))
        document.getElementById('')
  }, [])
  
  return (
    <>
      <div className="h-[450vh] w-full relative flex justify-center">
        <div className="sticky top-[6.5rem] w-[90%] h-[80vh]">
          <motion.div className="z-10 absolute rounded-[3rem] w-full h-full bg-[url('./images/home/events_svgs/Tags.svg')]" style={{backgroundPositionX:(textScaleX.current+500).toString()+'px'}}/>
          <motion.div className="z-0 absolute rounded-[3rem] w-full h-full bg-[url('./images/home/events_svgs/Bg.png')] " style={{backgroundPositionX:(scaleX.current+500).toString()+'px'}}/>
        </div>
      </div>
      <div className="text-6xl text-center text-textSecondary font-[600] small:mb-0 mt-20 mb-8 small:h-[270px] ">Upcoming Events</div>

      <div className="flex small:flex-col justify-center small:items-center mb-20">
          {data.map((event,i)=>(
            <EventCard key={i}
                       EventImage={event.mainImage.asset.url} 
                       EventDate={event.tbh} 
                       EventName={event.title}
                       Link={'/events/'+event.slug.current}/>
                       
          ))}
      </div>
    </>
  );
}

export default SocialValidation