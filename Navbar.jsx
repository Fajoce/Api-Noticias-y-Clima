import {React,Fragment} from 'react';

function Navbar(){
  return(

<Fragment>
    <nav class="navbar navbar-expand-lg navbar-secondary bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/Hooks">Hooks</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/">News</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Weather">Weather</a>
              </li>
             </ul>
          </div>
        </div>
      </nav>
      </Fragment>
)};

export default Navbar;

 
