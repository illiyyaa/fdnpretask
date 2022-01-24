import React from 'react';

const LatestReview = () => {
  return (
  <>
  <div className="container my-3 py-3">
    <div className="row">
      <div className="col-4">
        <div className="card">
        <div class="card-header">
            <div className='row my-3'>
            <div className='col-3'>
            <img class="card-img-top" src="https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png" alt="Card image cap" width= "100rem"/>
            </div>
            <div className='col-9'>
                <h5>rating</h5>
                <h6>C E Ferulic</h6>
            </div>
            </div>
        </div>
        <div class="card-body">
            <h5 class="card-title">Val by Valerie Thomas</h5>
            <p class="card-text">Suka sih pakai ini, wajah jadi lumayan cerah, ga bikin bo atau apa dikulitku fine2 aja. untuk tipe
            kulitku yang kombinasi dia enak banget buat dipakai m...</p>

        </div>
   
      </div>
      </div>
      <div className="col-4">
        <div className="card">
        <div class="card-header">
            <div className='row my-3'>
            <div className='col-3'>
            <img class="card-img-top" src="https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png" alt="Card image cap" width= "100rem"/>
            </div>
            <div className='col-9'>
                <h5>rating</h5>
                <h6>C E Ferulic</h6>
            </div>
            </div>
        </div>
        <div class="card-body">
            <h5 class="card-title">Val by Valerie Thomas</h5>
            <p class="card-text">Suka sih pakai ini, wajah jadi lumayan cerah, ga bikin bo atau apa dikulitku fine2 aja. untuk tipe
            kulitku yang kombinasi dia enak banget buat dipakai m...</p>

        </div>
   
      </div>
      </div>
      <div className="col-4">
      <div className="carousel-inner my-3 py-3">
            <div className="carousel-item active">
            <div class="box1 mx-auto" style={{width:'300px' , height:'250px',  background:'grey'}}></div>
            </div>
        </div>
      </div>
    </div>
  </div>
  </>
  );
}


export default LatestReview;