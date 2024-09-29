import React from 'react'

function Applist() {
  return (
    <>


       
<input type="checkbox" id="check"/>

      {/* <label for="check" class="closebtn">
        <i class="fas fa-bars" id="btn"></i>
        <i class="fas fa-times" id="cancel"></i>
      </label> */}

      <div class="sidebar d-block">
      <header>SKILLFOLIO</header>
        <div>
        
      <ul class="navigation__menu">
       <li><a class="text-active-blue active" href="#"><i class="fas fa-home text-blue"></i>Dashboard</a></li>
       <li><a href="#"><i class="fas fa-link text-red"></i>Shortcuts</a></li>
       <li><a href="#"><i class="fas fa-stream text-green"></i>Overview</a></li>
       <li><a href="#"><i class="fas fa-calendar-week text-amber"></i>Events</a></li>
       <li><a href="#"><i class="far fa-question-circle text-purple"></i>About</a></li>
       <li><a href="#"><i class="fas fa-sliders-h text-cyan"></i>Services</a></li>
       <li><a href="#"><i class="far fa-envelope text-pink"></i>Contact</a></li>

       <li> 

              <label for="check" class="fas fa-times"> Close </label>

      </li>


      </ul>
            </div>
     </div>
    
    
    
    </>
  )
}

export default Applist
