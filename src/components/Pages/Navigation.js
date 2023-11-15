import React from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
// import Home from './Home';
// import Projects from './Projects';
// import Contact  from './Contact';
// import Profile from './Profile';
function Navigation() {
  return (
    <div className="bg-slate-300 p-5  rounded-2xl fixed bottom-10 left-1/3 z-10">
         <nav>
        <ul className="flex space-x-16">
          <li>
            <ScrollLink
              to="section1" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500} 
            >
              <HomeRoundedIcon/>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="section2" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500} 
            >
              <Person2RoundedIcon/>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="section3" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500} 
            >
               <MailRoundedIcon/>
            </ScrollLink>
          </li>
          
          <li>
            <ScrollLink
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
             <CallRoundedIcon/>
            </ScrollLink>
          </li>
        
        </ul>
      </nav>
     
       
        
       
        
    </div>
  )
}

export default Navigation