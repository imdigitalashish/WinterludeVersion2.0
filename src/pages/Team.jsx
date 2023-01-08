import React from 'react';
import data from '../data/team.json';
import '../style/animations.css';

function Team() {
  return (
    <div className='w-full text-center font-google small:pt-[7vmax]'>
      <h2 className='font-[700] text-textSecondary text-[6vmax]'>Meet the Team...</h2>
      <div className='w-full flex flex-wrap justify-center items-center px-10'>
          {data.map((member,i)=>{
            var n = Math.floor(Math.random()*8);
            return (
            <div key={i} className={'relative flex flex-col mx-10 my-10 '+(n%2===0?'bounce':'bounce2')}>
              <img src={require('../images/team/BgShapes/bg'+n.toString()+'.svg')}
                    className='w-[15rem] h-[13rem]' alt="bg shapes" />
              <img src={require('../images/team/Members/'+(member.name)+'.png')}
                    className='w-[14rem] absolute top-[-1rem] z-10' alt='team members' />
              <a href={member.link} className='font-[700] text-[1.25rem]'>{member.name}</a>
              <p>{member.role}</p>
            </div>)
        })}
      </div>
    </div>
  )
}

export default Team