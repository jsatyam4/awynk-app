import React, { Component } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';

export default class AboutUs extends Component {
    render() {
        return(
            <div>
                <Header/>
                    {/* POST TITLE SINGLE BLOG */}
                    <section class="section bg-secondary">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <h4>As a Designer, I Refuse to Call People ‘Users’</h4>
      </div>
    </div>
  </div>
</section>

{/* BLOG CONTENT */}
<section>
  <div class="container">
    <div class="row">
      <div class="col-lg-8">
        <ul class="list-inline d-flex justify-content-between py-3">
          <li class="list-inline-item"><i class="ti-user mr-2"></i>Post by Jhon Abraham</li>
          <li class="list-inline-item"><i class="ti-calendar mr-2"></i>June 2, 2018</li>
        </ul>
        <img src="images/post-single.jpg" alt="post-thumb" class="w-100 img-fluid mb-4" />
        <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem.</p>

          <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          </blockquote>

          <img src="images/post-img.jpg" class="img-fluid" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem.</p>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="widget search-box">
          <i class="ti-search"></i>
          <input type="search" id="search-post" class="form-control border-0 pl-5" name="search-post"
            placeholder="Search" />
        </div>
        <div class="widget">
          <h6 class="mb-4">LATEST POST</h6>
          <div class="media mb-4">
            <div class="post-thumb-sm mr-3">
              <img class="img-fluid" src="images/masonary-post/post-1.jpg" alt="post-thumb"/>
            </div>
            <div class="media-body">
              <ul class="list-inline d-flex justify-content-between mb-2">
                <li class="list-inline-item">Post By Jhon</li>
                <li class="list-inline-item">June 2, 2018</li>
              </ul>
              <h6><a class="text-dark" href="/singleBlog">Lorem ipsum dolor sit amet, consectetur</a></h6>
            </div>
          </div>
          <div class="media mb-4">
            <div class="post-thumb-sm mr-3">
              <img class="img-fluid" src="images/masonary-post/post-6.jpg" alt="post-thumb" />
            </div>
            <div class="media-body">
              <ul class="list-inline d-flex justify-content-between mb-2">
                <li class="list-inline-item">Post By Jhon</li>
                <li class="list-inline-item">June 2, 2018</li>
              </ul>
              <h6><a class="text-dark" href="/singleBlog">Lorem ipsum dolor sit amet, consectetur</a></h6>
            </div>
          </div>
          <div class="media mb-4">
            <div class="post-thumb-sm mr-3">
              <img class="img-fluid" src="images/masonary-post/post-3.jpg" alt="post-thumb" />
            </div>
            <div class="media-body">
              <ul class="list-inline d-flex justify-content-between mb-2">
                <li class="list-inline-item">Post By Jhon</li>
                <li class="list-inline-item">June 2, 2018</li>
              </ul>
              <h6><a class="text-dark" href="/singleBlog">Lorem ipsum dolor sit amet, consectetur</a></h6>
            </div>
          </div>
        </div>
        <div class="widget">
          <h6 class="mb-4">TAG</h6>
          <ul class="list-inline tag-list">
            <li class="list-inline-item m-1"><a href="/singleBlog">ui ux</a></li>
            <li class="list-inline-item m-1"><a href="/singleBlog">developmetns</a></li>
            <li class="list-inline-item m-1"><a href="/singleBlog">travel</a></li>
            <li class="list-inline-item m-1"><a href="/singleBlog">article</a></li>
            <li class="list-inline-item m-1"><a href="/singleBlog">travel</a></li>
            <li class="list-inline-item m-1"><a href="/singleBlog">ui ux</a></li>
            <li class="list-inline-item m-1"><a href="/singleBlog">article</a></li>
            <li class="list-inline-item m-1"><a href="/singleBlog">developmetns</a></li>
          </ul>
        </div>
        <div class="widget">
          <h6 class="mb-4">CATEGORIES</h6>
          <ul class="list-inline tag-list">
            <li class="list-inline-item m-1"><a href="/singleBlog">ui ux</a></li>
            <li class="list-inline-item m-1"><a href="/singleBlog">developmetns</a></li>
            <li class="list-inline-item m-1"><a href="/singleBlog">travel</a></li>
            <li class="list-inline-item m-1"><a href="/singleBlog">article</a></li>
            <li class="list-inline-item m-1"><a href="/singleBlog">travel</a></li>
            <li class="list-inline-item m-1"><a href="/singleBlog">ui ux</a></li>
            <li class="list-inline-item m-1"><a href="/singleBlog">article</a></li>
            <li class="list-inline-item m-1"><a href="/singleBlog">developmetns</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
                <Footer/>
            </div>
        )
    }

}