import React, { Component } from 'react';

export default class Homepage extends Component {
    render() {
        return (
            <section>
                <div class="hero">
                    <div class="container">
                        <div class="row">

                            <div class="col-md-7">
                                <h1 class="display-3 text-white">Hello, world!</h1>
                                <p class="text-white">This is a template for a simple marketing or informational website. It includes a
                                large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                                <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>

                            </div>

                            <div class="col-md-5">
                                <div class="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="container-md">
                    <div className="card-deck">

                        <div className="card shadow border-0">
                            <div className="card-body">
                                <h5 className="card-title"><b>Easy Submission Online</b></h5>
                                <p className="card-text">Now you can arrive at the verification site is easier</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>

                        <div className="card shadow border-0">
                            <div className="card-body">
                                <h5 className="card-title"><b>Easy Submission Online</b></h5>
                                <p className="card-text">Now you can arrive at the verification site is easier</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>

                        <div className="card shadow border-0">
                            <div className="card-body">
                                <h5 className="card-title"><b>Easy Submission Online</b></h5>
                                <p className="card-text">Now you can arrive at the verification site is easier</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>

                    </div>
                </section>
            </section>
        )
    }
}
