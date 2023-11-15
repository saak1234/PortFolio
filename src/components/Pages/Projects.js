import React from 'react'

function Projects() {
  return (
    <div id="section3">
      <div className="text-4xl text-white font-bold justify text-center">My Projects</div>
       
    <div className="flex m-28 space-x-16">
      <div className="h-60 w-2/4 hover:scale-105 transform transition-transform duration-300 ease-in-out text-white text-lg ">I've had the honor of engaging in a wide array of projects that have significantly contributed to my skill set and expertise. Whether it's creating engaging web applications that seamlessly integrate aesthetics and functionality, my work is a testament to my fervor for technology and programming.</div>
      <div className="justify-center items-center  h-60 w-2/4 hover:scale-105 transform transition-transform duration-300 ease-in-out ">
       

      <div class="relative group">
  <img
    src="facebook.png"
    alt="facebook-clone(login-page)"
     class="w-full h-auto transition-opacity duration-300 hover:opacity-70 rounded-2xl "
  />
  <div class="absolute inset-0 opacity-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-100 bg-black rounded-2xl bg-opacity-50 border-2 border-blue-300">
    <p class="text-white text-center font-bold">Facebook-login-page </p>
  </div>
</div>

      
      </div>
    </div>
    <div className="flex m-28 space-x-16">
    <div className="justify-center items-center  h-60 w-2/4 hover:scale-105 transform transition-transform duration-300 ease-in-out ">
       

       <div class="relative group">
   <img
     src="Foodorderingapp.png"
     alt="Food Ordering App"
      class="w-full h-auto transition-opacity duration-300 hover:opacity-70 rounded-2xl "
   />
   <div class="absolute inset-0 opacity-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-100 bg-black rounded-2xl bg-opacity-50 border-2 border-blue-300">
     <p class="text-white text-center font-bold">Food Ordering App </p>
   </div>
 </div>
 
       
       </div>
     
       <div className="justify-center items-center  h-60 w-2/4 hover:scale-105 transform transition-transform duration-300 ease-in-out ">
       

       <div class="relative group">
   <img
     src="chatApp.png"
     alt="ChatApp"
      class="w-full h-auto transition-opacity duration-300 hover:opacity-70 rounded-2xl "
   />
   <div class="absolute inset-0 opacity-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-100 bg-black rounded-2xl bg-opacity-50 border-2 border-blue-300">
     <p class="text-white text-center font-bold">ChatApp </p>
   </div>
 </div>
 
       
       </div>
    </div>  
    </div>
  )
}

export default Projects