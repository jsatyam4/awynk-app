import React, { Component } from 'react';


export default class Pagination extends Component {
    render() {
        return(
            <div>
                 <div class="row">
      <div class="col-12">
        <nav>
          <ul class="pagination justify-content-center align-items-center">
            <li class="page-item">
              <span class="page-link">&laquo; Previous</span>
            </li>
            <li class="page-item"><a class="page-link" href="#">01</a></li>
            <li class="page-item active">
              <span class="page-link">02</span>
            </li>
            <li class="page-item"><a class="page-link" href="/#">03</a></li>
            <li class="page-item"><a class="page-link" href="#">04</a></li>
            <li class="page-item"><a class="page-link" href="#">05</a></li>
            <li class="page-item"><a class="page-link" href="#">06</a></li>
            <li class="page-item">
              <a class="page-link" href="#">Next &raquo;</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
            </div>
        )
    }

}