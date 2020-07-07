import React, { Component } from 'react';
import Footer from './common/Footer';
import Header from './common/Header';
import Pagination from './common/Pagination';


export default class Home extends Component {
    render() {
        return(
            <div>
                
 
<Header/>
<section>
  <div class="container-fluid p-sm-0">
    <div class="row featured-post-slider">
      <div class="col-lg-3 col-sm-6 mb-2 mb-lg-0 px-1">
        <article class="card bg-dark text-center text-white border-0 rounded-0">
          <img class="card-img rounded-0 img-fluid w-100" src="images/featured-post/post-1.jpg" alt="post-thumb"/>
          <div class="card-img-overlay">
            <div class="card-content">
              <p class="text-uppercase">LifeStyle</p>
              <h4 class="card-title mb-4"><a class="text-white" href="/singleBlog">Organize Your Life With 10 Simple rule</a></h4>
              <a class="btn btn-outline-light" href="/singleBlog">read more</a>
            </div>
          </div>
        </article>
      </div>
      <div class="col-lg-3 col-sm-6 mb-2 mb-lg-0 px-1">
        <article class="card bg-dark text-center text-white border-0 rounded-0">
          <img class="card-img rounded-0 img-fluid w-100" src="images/featured-post/post-2.jpg" alt="post-thumb" />
          <div class="card-img-overlay">
            <div class="card-content">
              <p class="text-uppercase">Philosophy</p>
              <h4 class="card-title mb-4"><a class="text-white" href="/singleBlog">Organize Your Life With 10
                  Simple rule</a></h4>
              <a class="btn btn-outline-light" href="/singleBlog">read more</a>
            </div>
          </div>
        </article>
      </div>
      <div class="col-lg-3 col-sm-6 mb-2 mb-lg-0 px-1">
        <article class="card bg-dark text-center text-white border-0 rounded-0">
          <img class="card-img rounded-0 img-fluid w-100" src="images/featured-post/post-3.jpg" alt="post-thumb" />
          <div class="card-img-overlay">
            <div class="card-content">
              <p class="text-uppercase">Fashion</p>
              <h4 class="card-title mb-4"><a class="text-white" href="/singleBlog">Organize Your Life With 10
                  Simple rule</a></h4>
              <a class="btn btn-outline-light" href="/singleBlog">read more</a>
            </div>
          </div>
        </article>
      </div>
      <div class="col-lg-3 col-sm-6 mb-2 mb-lg-0 px-1">
        <article class="card bg-dark text-center text-white border-0 rounded-0">
          <img class="card-img rounded-0 img-fluid w-100" src="images/featured-post/post-4.jpg" alt="post-thumb" />
          <div class="card-img-overlay">
            <div class="card-content">
              <p class="text-uppercase">Article</p>
              <h4 class="card-title mb-4"><a class="text-white" href="/singleBlog">Organize Your Life With 10
                  Simple rule</a></h4>
              <a class="btn btn-outline-light" href="/singleBlog">read more</a>
            </div>
          </div>
        </article>
      </div>
      <div class="col-lg-3 col-sm-6 mb-2 mb-lg-0 px-1">
        <article class="card bg-dark text-center text-white border-0 rounded-0">
          <img class="card-img rounded-0 img-fluid w-100" src="images/featured-post/post-5.jpg" alt="post-thumb"/>
          <div class="card-img-overlay">
            <div class="card-content">
              <p class="text-uppercase">Nature</p>
              <h4 class="card-title mb-4"><a class="text-white" href="/singleBlog">Organize Your Life With 10
                  Simple rule</a></h4>
              <a class="btn btn-outline-light" href="/singleBlog">read more</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="row masonry-container">
      <div class="col-lg-4 col-sm-6 mb-5">
        <article class="text-center">
          <img class="img-fluid mb-4" src="images/masonary-post/post-1.jpg" alt="post-thumb"/>
          <p class="text-uppercase mb-2">TRAVEL</p>
          <h4 class="title-border"><a class="text-dark" href="/singleBlog">Charming Evening Field</a></h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.</p>
          <a href="/singleBlog" class="btn btn-transparent">read more</a>
        </article>
      </div>
      <div class="col-lg-4 col-sm-6 mb-5">
        <article class="text-center">
          <img class="img-fluid mb-4" src="images/masonary-post/post-2.jpg" alt="post-thumb"/>
          <p class="text-uppercase mb-2">TRAVEL</p>
          <h4 class="title-border"><a class="text-dark" href="/singleBlog">Charming Evening Field</a></h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.</p>
          <a href="/singleBlog" class="btn btn-transparent">read more</a>
        </article>
      </div>
      <div class="col-lg-4 col-sm-6 mb-5">
        <article class="text-center">
          <img class="img-fluid mb-4" src="images/masonary-post/post-3.jpg" alt="post-thumb"/>
          <p class="text-uppercase mb-2">TRAVEL</p>
          <h4 class="title-border"><a class="text-dark" href="/singleBlog">Charming Evening Field</a></h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.</p>
          <a href="/singleBlog" class="btn btn-transparent">read more</a>
        </article>
      </div>
      
    </div>
    <Pagination/>
  </div>
</section>

<section>
  <div class="container-fluid px-0">
    <div class="row no-gutters instagram-slider" id="instafeed" data-userId="4044026246"
      data-accessToken="4044026246.1677ed0.8896752506ed4402a0519d23b8f50a17"></div>
  </div>
</section>


<Footer/>



            </div>
        )
    }

}