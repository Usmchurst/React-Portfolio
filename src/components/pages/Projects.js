import React from 'react';
import Meal from '../../images/Meal-planner.png';
// import Employed from '../../images/Employed.png';
// import Techblog from '../../images/Techblog.png';
// import Text from '../../images/Text.png';

export default function Projects() {
  return (
    <div className='about'>
      <h1>Projects</h1>

      <p>
        Most recent projects that were created.
      </p>
      <div classname ='portfolio'>
        <p>Meal planner</p>
        <a href="https://github.com/noahneville/Meal-Planner" ><img src={Meal} alt='Meal planner'/></a>
      </div>
    </div>
  
  );
}
