import React from 'react';
import Meal from '../../images/Meal-planner.png';
import Employed from '../../images/Employed.png';
import Techblog from '../../images/Techblog.png';
import Text from '../../images/Text-editor.png';

export default function Projects() {
  return (
    <div className='about'>
      <h1>Projects</h1>

      <p>
        Most recent projects that were created.
      </p>
      <div classname ='meal'>
        <p>Meal planner is a application that we can use to plan meals for 
          dinner dates or just for dinner base on your diet preference</p>
        <a href="https://github.com/noahneville/Meal-Planner" ><img src={Meal} alt='Meal planner'/>"https://noahneville.github.io/Meal-Planner/"</a>
        
      </div>
      <div classname ='Employed'>
        <p>Employed is a app that allows job seekers and employers to look for one another in their local area or 
          abroad.
        </p>
        <a href="https://github.com/BrandonSnyder/Employed" ><img src={Employed} alt='Employed'/></a>
        </div>

        <div classname ='Techblog'>
        <p>Tech blog is a website for people with technical knowledge can exchange information about their sector of work.
        </p>
        <a href="https://github.com/Usmchurst/The-Tech-Blog" ><img src={Techblog} alt='Techblog'/></a>
        </div>

        <div classname ='Text'>
        <p>Text editor is a app that you can use to store notes and messages. 
        </p>
        <a href="https://github.com/Usmchurst/Text-editor" ><img src={Text} alt='Text-editor'/>"https://text-editor23.herokuapp.com/"</a>
        </div>

        
    </div>
  
  );
}
