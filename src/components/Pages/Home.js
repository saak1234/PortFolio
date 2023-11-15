import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Navigation from './Navigation';

function Home() {
  return (
    <div id="section1">
      <div className="flex m-28 space-x-24">
        <div className="justify-center items-center text-blue-500 h-32 w-2/4 font-bold text-md hover:scale-105 transform transition-transform duration-300 ease-in-out">
          <div>
          <div className="text-2xl mt-8 mb-4">
            Hello, I'm Akshoy Gorai
          </div>
          I am a passionate web developer dedicated to crafting cutting-edge, impactful digital solutions and transforming ideas into seamless online experiences
        </div>
        <div className='space-x-10 mt-14'>
     
     <a href="https://www.linkedin.com/in/akshoy-gorai-4b6958257/" target="_blank" rel="noopener noreferrer">
       <LinkedInIcon style={{ fontSize: 50 }}/>
     </a>
     <a href="https://github.com/saak1234" target="_blank" rel="noopener noreferrer">
       <GitHubIcon style={{ fontSize: 50 }}/>
     </a>
     <a href="https://twitter.com/Aks185_" target="_blank" rel="noopener noreferrer">
       <TwitterIcon style={{ fontSize: 50 }}/>
     </a>
   </div>
   </div>
   
        <div className="justify-center items-center hover:scale-105 transform transition-transform duration-300 ease-in-out">
          <img src="/laptop.jpg" alt="Laptop" />
        </div>
      </div>
     
      <Navigation />
    </div>
  );
}

export default Home;
