import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function app() {
    return (
       <div>
        <nav className="navbar navbar-expand-lg bg-dark">
  <div class="container ">
    <a class="navbar-brand text-white" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item " href="#">Action</a></li>
            <li><a class="dropdown-item " href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item " href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled text-white">Disabled</a>
        </li>
      </ul>
      
      
    </div>
  </div>
</nav>

<div className='container mt-4'>
<div className="row">
    <div className='col-sm-6 col-lg-5'>
<p className='bg-light p-4 display-1'>900*400</p>
</div>
<div className='col-sm-6 col-lg-6'>
<div className='col-sm-4 '>
<div class="card" style={{width:'250px'}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
</div>
</div>
<div className='col-sm-4 col-lg-10'>
  <p className='bg-secondary'> POES is having two sides cliend and sources sides</p>
</div>
<div className='row'>
<div className='col-sm-4 '>
<div class="card" style={{width:'250px'}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
<div className='col-sm-4'>
<div class="card" style={{width:'250px'}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
<div className='col-sm-4'>
<div class="card" style={{width:'250px'}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
</div>
</div>
<div className='bg-dark' >
  <p className='text-center text-light'>E-Mail to Poesinfo@gmail.com</p>
</div>
 </div>
</div>
        
    );
}

export default app
;