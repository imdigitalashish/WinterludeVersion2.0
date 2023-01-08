import React,{useState,useEffect} from 'react'

const Events = ({EventImage,EventName,EventDate,Link,alt}) => {
  const [colour,setColour] = useState('')
  
  useEffect(() => {
    const colors = ['googleRed', 'googleBlue', 'googleGreen', 'googleYellow'];
    setColour(colors[Math.floor(Math.random() * colors.length)])
  },[])

  return (
    <a href={Link} className={('rounded-[20px] w-[300px] h-[460px] border-2  m-10 overflow-hidden hover:shadow-md border-')+colour}>
      <img className="w-[100%] " src={EventImage} alt={alt} />
      <div className='p-2'>
        <h5 className="text-google font-[600] text-[32px] text-textMain">{EventName}</h5>
        <p className="text-google text-base mb-4">
          {EventDate}
        </p>
      </div>
    </a>
  )
}

export default Events