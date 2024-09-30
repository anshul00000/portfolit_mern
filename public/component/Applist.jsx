import React from 'react'
import {NavLink , Link} from "react-router-dom";

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

      
    
       <li><NavLink class="text-active-blue active" to="/l"><i class="fas fa-home text-blue"></i>Dashboard</NavLink></li>
       <li><NavLink to="/m"><i class="fas fa-link text-red"></i>Shortcuts</NavLink></li>
       <li><NavLink to="/n"><i class="fas fa-stream text-green"></i>Overview</NavLink></li>
       <li><NavLink to="/o"><i class="fas fa-calendar-week text-amber"></i>Events</NavLink></li>
       <li><NavLink to="/p"><i class="far fa-question-circle text-purple"></i>About</NavLink></li>
       <li><NavLink to="/q"><i class="fas fa-sliders-h text-cyan"></i>Services</NavLink></li>
       <li><NavLink to="/r"><i class="far fa-envelope text-pink"></i>Contact</NavLink></li>
       <li><NavLink to="/"><i class="far fa-envelope text-pink"></i>ANSHUL</NavLink></li>

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
