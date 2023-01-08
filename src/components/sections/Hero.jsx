import React from 'react'
import homeGif from '../../images/home/hero_svgs/homeGif.gif'
import '../../style/animations.css'
import left_middle_square from '../../images/home/hero_svgs/left_middle_square.svg'
import lower_yellow_square from '../../images/home/hero_svgs/lower_yellow_square.svg'
import upper_right_wave from '../../images/home/hero_svgs/upper_right_wave.svg'
import right_middle_circle from '../../images/home/hero_svgs/right_middle_circle.svg'
import right_lower_semicircle from '../../images/home/hero_svgs/right_lower_semicircle.svg'

import App from "../../style/customStyles.css";


function Hero() {
  return (
    <div>
      <a className="joinUsButton" href="https://www.commudle.com/communities/dsc-iiitd/events/winterlude">

        <div id='container' className='py-[15vh] flex flex-col align-middle small:py-[20vh]'>


          <div className='absolute top-[45vmax] left-[2vmax] z-0 w-[3vmax] small:top-[55vmax] bounce'>
            <img src={left_middle_square} width={"100%"} alt='left_middle_square' />
          </div>
          <div className='absolute top-[5vmax] z-10 w-[10vmax] small:top-[10vmax] bounce2'>
            <img src={lower_yellow_square} width={"100%"} alt='lower_yellow_square' />
          </div>
          <div className='absolute top-[0] right-0 z-20 w-[19vmax]'>
            <img src={upper_right_wave} width={"100%"} alt='upper_right_wave' />
          </div>
          <div className='absolute top-[8vmax] right-[26vw] z-0 w-[4vmax] small:top-[15vmax] small:right-[15vw] bounce'>
            <img src={right_middle_circle} width={"100%"} alt='right_middle_circle' />
          </div>
          <div className='absolute top-[35vmax] right-[0] z-10 w-[4vmax] small:top-[50vmax] bounce2'>
            <img src={right_lower_semicircle} width={"100%"} alt='right_lower_semicircle' />
          </div>
          <div id='upper-half-container' className='flex flex-col w-full items-center -z-10'>



            <div id='gdsc' className='relative z-10 text-center font-google font-bold text-[3.5vmax] text-[#BBBBBB] leading-tight tracking-wider small:pl-[2vmax] small:pr-[0] small:text-[3.5vmax]'>
              <div><span className='text-googleRed'>D</span>evelopers</div>
              <div><span className='text-googleBlue'>T</span>ech A</div>
              <span><span className='text-googleYellow'>D</span>ay </span>
              <span><span className='text-googleGreen'>O</span>ff</span>
              <div className='text-[1.5vmax] p-[1vmax] tracking-normal '><span className='text-[#00D3C7]'>IIIT</span> Delhi</div>


              <a className="joinUsButton" href="https://www.commudle.com/communities/dsc-iiitd/events/winterlude">
                Register Now
              </a>







            </div>
            <div id='animation-gif' className='relative z-0 w-[35%] small:w-[90%] mt-[-5vmax] mb-[-6vmax] small:-mt-[5vmax] small:-mb-[10vmax]'>
              <img src={homeGif} width={"100%"} alt='animation-gif'></img>
            </div>
          </div>
          <div id='lower-half-container' className='w-full flex justify-center text-center pt-[3vmax] z-30'>
            <div className='w-[39%] font-google text-[#797979] text-[1.2vmax] small:w-[70%] small:text-[1.8vmax]'>








              <span className='font-bold'>Winterlude </span>
              is an event where developers can take a day off to
              connect with like-minded people, learn about technology, and engage
              in activities. The event has two tracks: "Augment," which focuses on
              using existing resources and knowledge to build something impactful,
              and "Envision," which focuses on achieving groundbreaking advancements
              in technology. Attendees can listen to keynote speeches from industry
              professionals, participate in activities organized by




              <span className='text-googleRed font-bold'> sponsors,</span>
              <span className='text-googleBlue font-bold'> build, </span> and
              <span className='text-googleYellow font-bold'> strengthen  </span>
              <span className='text-googleGreen font-bold'> student networks </span>
              and have fun
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Hero