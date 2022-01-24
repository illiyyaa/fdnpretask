import React, { Component, Fragment } from "react";
import './App.css';
import Navbar from './component/Navbar';
import Banner from './component/Banner';
import Products from './component/Products';
import LatestArticle from "./component/LatestArticle";
import Footer from './component/Footer';
import LatestReview from "./component/LatestReview";
import PopularGroups from "./component/PopularGroups";
import LatestVideo from "./component/LatestVideo";
import Trending from "./component/Trending";
import Top from "./component/Top";

function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <div class="container my-3 py-3">
    <h5>Editor's Choice</h5>
    <h6>Curated With Love</h6> 
    <Products/>
    </div>
    <div class="container my-3 py-3">
    <h5>Latest Articles</h5>
    <h6>So you can make better purchase decision</h6> 
    <LatestArticle/>
    </div>
    <div class="container my-3 py-3">
    <h5>Latest Reviews</h5>
    <h6>So you can make better purchase decision</h6> 
    <LatestReview/>
    </div>
    <div class="container my-3 py-3">
    <h5>Popular Groups</h5>
    <h6>Where the beauty TALK are</h6> 
    <PopularGroups/>
    </div>
    <div class="container my-3 py-3">
    <h5>Latest Videos</h5>
    <h6>Watch and learn, ladies</h6> 
    <LatestVideo/>
    </div>
    <div class="container my-3 py-3">
    <h5>Trending This Week</h5>
    <h6>See our weekly most reviewed products</h6> 
    <Trending/>
    </div>
    <div class="container my-3 py-3">
    <h5>Top Brands</h5>
    <h6>We all know and love</h6> 
    <Top/>
    </div>
    <div class="container my-3 py-3">
    <h5>Female Daily - Find everything you want to know about beauty on Female Daily</h5>
    <h6>Product reviews, Tips & Tricks, Expert and Consumer Opinions, Beauty Tutorials, Discussions, Beauty
      Workshops, anything!
    </h6>
    <h6>We are here to be your friendly solution to all things beauty, inside and out!
    </h6>
    </div>
    <Footer/>
    </>
  );
}

export default App;
