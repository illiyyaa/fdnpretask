import React from 'react';

const Navbar = () => {
  return (
  <>
  <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <div className="container">
      <div className="row">
        <div className="col-2">
          <a className="navbar-brand" href="#"><i className="fa fa-bars me-4"></i><img src="https://app.femaledaily.com/wp-content/uploads/2018/07/logo.png"></img></a>
        </div>
        <div className="col-8">
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
          </form>
        </div>
        <div className="col-2">
          <div className='buttons'>
            <a href="" className="btn " style={{background: '#ff1a75', color: 'white'}}>
              LOGIN/SIGNUP</a>
          </div>
        </div>
        <div className="w-100"></div>
        <div className="col">
          <hr/>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">SKINCARE</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">MAKE UP</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">BODY</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">HAIR</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">FRAGRANCE</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">NAILS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">TOOLS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">BRANDS</a>
            </li>
          </ul>
        </div>
        <hr/>
        </div>
      </div>
    </div>
  </nav>
  </>
  );
}


export default Navbar;