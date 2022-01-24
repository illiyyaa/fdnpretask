import React from 'react';


const Banner = () => {
  return (
  <>
  <div className="container">
  <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div class="box1 mx-auto" style={{width:'970px' , height:'50px',  background:'grey'}}></div>
    </div>
  </div>
  <div className="carousel-inner my-3 py-3">
    <div className="carousel-item active">
      <div class="box1 mx-auto" style={{width:'970px' , height:'250px',  background:'grey'}}></div>
    </div>
  </div>
  
  </div>

</div>
  </>
  );
}


export default Banner;