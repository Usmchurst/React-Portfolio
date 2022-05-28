import React from 'react';
import self from '../../images/self.png';


 function About() {
  return (
    <div className='about'>
      <h1>About Page</h1>
      <img src= {self} classname= 'center' />
      <p>
       My name is Eric Hurst, I am a new software Engineer from Los Angeles Californina. I 
       first stared my Career in the United States Marines in 1995 as a heavy equipment operator. 
       I was stationed places like Atlanta Ga, Oceanside Ca, Twentynine Palms Ca, Okinawa Japan, 
       Germany, Kuwait, and combat operations in Iraq and Afghanistan.
       I decided to retire and carry my skillset into the corporate world. In 2015 I returned to
       civilian world and started working in the water indistry managing factory production and 
       administration operations in the China, Korea and the U.S. I graduatd from Ashford University in 2016.
       The skillset that I gained while in the military was invaluble which made my job very easy and efficient. 
       After my time in Corportate America I Started a chemical manufacturing company, which 
       covid hapended a short time after. I decided to challenge myself in a field that I 
       never been in and decided to start a career in software engineering. 


      </p>
    </div>
  );
}

export default About;