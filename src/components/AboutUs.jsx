import React, { Component } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';

export default class AboutUs extends Component {
    render() {
        return(
            <div>
                <Header/>
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2 className="mb-4">About Me</h2>
                                    <img src="images/author.jpg" alt="author" class="img-fluid w-100 mb-4"></img>
                                    <h3 class="font-weight-light">Hello, I’m <span class="font-weight-bold">Satyam Jaiswal</span></h3>
                                </div>
                            </div>
                        </div>
                    </section>
                <Footer/>
            </div>
        )
    }

}