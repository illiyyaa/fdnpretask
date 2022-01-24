import React from 'react';

const Footer = () => {
  return (
  <>
  <hr></hr>
  <footer class="bg-white text-center text-lg-start">
    <div className="container">
      <div className="row">
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <ul class="list-unstyled mb-0">
            <li>
                <a href="#!" class="text-dark text-decoration-none"><h6>About Us</h6></a>
            </li>
            <li>
                <a href="#!" class="text-dark text-decoration-none"><h6>Feedback</h6></a>
            </li>
            <li>
                <a href="#!" class="text-dark text-decoration-none"><h6>Contact</h6></a>
            </li>
            </ul>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <ul class="list-unstyled mb-0">
            <li>
                <a href="#!" class="text-dark text-decoration-none"><h6>Terms & Conditions</h6></a>
            </li>
            <li>
                <a href="#!" class="text-dark text-decoration-none"><h6>Privacy Policy</h6></a>
            </li>
            <li>
                <a href="#!" class="text-dark text-decoration-none"><h6>Help</h6></a>
            </li>
            </ul>
        </div>
    
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0"> 
        <ul class="list-unstyled mb-0">
            <li>
                <a href="#!" class="text-dark text-decoration-none"><h6>Awards</h6></a>
            </li>
            <li>
                <a href="#!" class="text-dark text-decoration-none"><h6>Newsletter</h6></a>
            </li>
            </ul>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <ul class="list-unstyled">
            <li>
                <a href="#!" class="text-dark text-decoration-none"><h6>Download Our Mobile App</h6></a>
            </li>
            <li>
                <a href="#!" class="text-dark"><img src="./download.png"width="200rem"/></a>
               
                
            </li>
            
            </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-9">
          <a className="navbar-brand" href="#"><img src="https://app.femaledaily.com/wp-content/uploads/2018/07/logo.png"></img></a>
          <p>Copyright © 2015-2017 Female Daily Network - All rights reserved </p>
        </div>
        <div className="col-3">
         
        </div>
      </div>
      <div className='row'>
      <div className="carousel-inner my-3 py-3">
    <div className="carousel-item active">
      <div class="box1 mx-auto" style={{width:'970px' , height:'50px',  background:'grey'}}></div>
    </div>
  </div>
      </div>
    </div>
  </footer>
  </>
  );
}

export default Footer;