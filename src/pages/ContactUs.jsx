import React from 'react';
import '../style/animations.css';
import telegram from '../images/contactUs/telegram.svg';
import twitter from '../images/contactUs/twitter.svg';
import linkedIn from '../images/contactUs/linkedIn.svg';
import instagram from '../images/contactUs/instagram.svg';
import G from '../images/contactUs/G.svg';
import D from '../images/contactUs/D.svg';
import S from '../images/contactUs/S.svg';
import C from '../images/contactUs/C.svg';

function ContactUs() {
  return (
    <>
      {/* Background */}
      <div className="flex px-[6vmax] justify-end w-full h-full absolute -mt-[15rem] -z-10 small:w-5/12 small:-mt-[20rem] small:-right-[1vmax]">
        <img src={G} alt="background" className="mr-5 w-[7vmax] springish-G" />
        <img src={D} alt="background" className="mr-5 w-[6.1vmax]  springish-D" />
        <img src={S} alt="background" className="mr-5 w-[6.2vmax]  springish-S" />
        <img src={C} alt="background" className="mr-5 w-[9.5vmax]  springish-C" />
      </div>

      {/* Contact us */}
      <div className="flex flex-col w-full h-full justify-center items-start px-[15vmax] small:px-0 py-[4vmax] small:pt-[40vmax] small:pb-0 text-textSecondary font-google space-y-12 mt-16 small:mt-0">
        <h1 className="text-5xl text-textSecondary font-bold text-center small:pl-[9vmax]">Find us on</h1>
        <ul className="flex flex-col small:w-full font-semibold space-y-4 small:pl-[15vmax]">
          <li><a className="flex items-center space-x-4 cursor-pointer" href='/'><img src={telegram} alt="telegram-icon" className="w-12"/><span className="hover:text-googleBlue hover:scale-105">Telegram</span></a></li>
          <li><a className="flex items-center space-x-4 cursor-pointer" href='/'><img src={twitter} alt="twitter-icon" className="w-12"/><span className="hover:text-googleYellow hover:scale-105">Twitter</span></a></li>
          <li><a className="flex items-center space-x-4 cursor-pointer" href='/'><img src={linkedIn} alt="linkedIn-icon" className="w-12"/><span className="hover:text-googleGreen hover:scale-105">LinkedIn</span></a></li>
          <li><a className="flex items-center space-x-4 cursor-pointer" href='/'><img src={instagram} alt="instagram-icon" className="w-12"/><span className="hover:text-googleRed hover:scale-105">Instagram</span></a></li>
        </ul>
      </div>
    </>
  )
}

export default ContactUs
