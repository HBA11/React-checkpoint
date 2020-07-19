import React from 'react';
import './App.css';
import T4 from './images/T4.png';


function App() {
  return (
    <div className="App">
        

      {/* navbar */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <h1 style={{color: "blue"}} class="navbar-brand" href="#">My Company</h1>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div style={{backgroundColor: "lightblue"}} class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Products
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Product 1</a>
          <a class="dropdown-item" href="#">Product 2</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Product 3</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact us</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

<img src={T4} alt="T4"/>
<h1 align="center">GRAPHIC DESIGN</h1>
          <p  align="center">Graphic design is the process of visual communication 
              and problem-solving through the use of typography, photography, iconography and illustration. </p>
              <p  align="center">
                  The field is considered a subset of visual communication and communication design, 
                  but sometimes the term "graphic design" is used synonymously. </p>
{/* carousel*/}



      {/* form*/} 
<form style={{margin:300}}>
  <div style={{color: "blue"}} class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4"/>
    </div>
  </div>
  <div style={{color: "blue"}} class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div style={{color: "blue"}} class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="form-row">
    <div style={{color: "blue"}} class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div style={{color: "blue"}} class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>

    </div>
  );
}

export default App;
