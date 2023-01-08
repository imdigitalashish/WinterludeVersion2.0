import React,{useEffect,useState} from 'react'
import shapeSquare from '../../images/sponsors/shapeSquare.svg';
import shapeCircle from '../../images/sponsors/shapeCircle.svg';
import client from '../../client';
import GDGlogo from "../../images/gdglogo.png";
function Sponsors() {
  const [data, setData] = useState([])
  useEffect(() => {
    client
      .fetch(
        `*[_type == "Sponsors"] { title,link, mainImage { asset -> {_id, url}, alt}}`
      )
      .then((res) => setData(res))

  }, [])


  return (
    <div className="w-full text-center font-google">
      {/* Background */}
      <div className="flex w-full absolute z-0 justify-between small:justify-center small:overflow-clip">
        <img className="w-2/12 small:hidden" src={shapeSquare} alt='shapeSquare' />
        <img className="w-1/12 small:hidden" src={shapeCircle} alt='shapeCircle' />
      </div>
      <h2 className="text-4xl small:text-3xl text-[#4d4d4d] font-semibold">Community Partners</h2>
      <div className="flex w-full px-[10rem] flex-wrap justify-center items-center">\
      {/* TODO: SPONSERS YAHA SE CHANGE KARLO */}
        {/* {data.map((sponsor, i) => { */}
          {/* return ( */}
              <a href={""} className="relative z-10 cursor:pointer flex flex-col h-[13rem] justify-between mx-10 my-10 shadow-xl px-10 py-5 rounded-xl bg-white">
                <img src={GDGlogo} 
                className="w-[8rem]" alt='mainImage' />
                <p className="text-[#898989] font-[600]">GDG - New Delhi</p>
              </a>
          {/* ) */}
        {/* // })} */}
      </div>
    </div>
  )
}

export default Sponsors
