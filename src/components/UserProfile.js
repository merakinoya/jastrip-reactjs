import React, { Component } from 'react';

export default class UserProfile extends Component {
    render() {
        return (
            <div className="container mt-7">
                <div className="row">
                    <div className="col-md-4 mt-3">
                        <div className="d-flex flex-row bd-highlight mb-4">
                            <img className="rounded-circle mb-4" src="https://source.unsplash.com/b1Hg7QI-zcc/52x52" alt="Profile" />
                            <div className="list-group ml-3">
                                <h2 className="">Ilham Arl</h2>
                                <a href="edit-profile.html">Edit Profil</a>
                            </div>
                        </div>
                        <div className="nav-scroller">
                            <div className="nav nav-pills scrollable flex-sm-column flex-row sticky-top-tabs" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                                <a className="nav-item nav-link text-nowrap active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">My Products</a>
                                <a className="nav-item nav-link text-nowrap" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Transaction</a>
                                <a className="nav-item nav-link text-nowrap" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Settings</a>
                                <a className="nav-item nav-link text-nowrap" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Change Password</a>

                            </div>
                        </div>
                    </div>


                    <div className="col-md-8 mt-3">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <h4 className="font-weight-bolder mb-4">My Products</h4>

                                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2">
                                    <div className="col mb-4">
                                        <div className="card border-0 shadow rounded-lg">
                                            <a className="position-absolute-custom text-white" href="" data-toggle="tooltip" data-placement="top" title="Wishlist"><i data-feather="heart"></i></a>
                                            <img className="card-img-top rounded-top" src="https://source.unsplash.com/x9I-6yoXrXE" alt="Card image cap" />

                                            <div className="card-body" href="">

                                                <span className="badge badge-info mb-2 mr-2">Camp</span>

                                                <h4 className="card-title mb-1 font-weight-bold text-black text-capitalize">Mount Merbabu Trips
                                            </h4>
                                                <p><small>2 days</small> • <small>10 orang</small> </p>
                                                <p className="card-text text-muted text-truncate">This is a wider card with supporting text below as a natural
                                                lead-in to
                                                additional content<a href="products-detail.html" className="text-muted stretched-link"> lihat detail</a></p>
                                            </div>

                                            <div className="card-footer">
                                                <small className="text-black-50">Last updated 3 mins ago</small>
                                                <button className="btn btn-primary float-right">Book Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                <h4 className="font-weight-bolder mb-4">Transaction</h4>
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">Transaction</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">001</th>
                                                <td>Mark</td>
                                                <td>Done</td>
                                                <td>12 March 2020</td>
                                                <td>Show</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">002</th>
                                                <td>Jacob</td>
                                                <td>Failed</td>
                                                <td>12 March 2020</td>
                                                <td>Show</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">003</th>
                                                <td colSpan="2">Larry the Bird</td>
                                                <td>12 March 2020</td>
                                                <td>Show</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                <h4 className="font-weight-bolder">Settings</h4>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label class="form-check-label" for="defaultCheck1">
                                        Default checkbox</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled />
                                    <label class="form-check-label" for="defaultCheck2">
                                        Disabled checkbox</label>
                                </div>

                            </div>
                            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                <h4 className="font-weight-bolder mb-4">Change Password</h4>
                                <form class="mt-4">
                                    <div class="form-group">
                                        <label for="old-password">Password Lama</label>
                                        <input type="password" class="form-control" id="old-password" placeholder="Masukkan password lama" />
                                        <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <hr />
                                    <div class="form-group">
                                        <label for="new-password">Password Baru</label>
                                        <input type="password" class="form-control" id="new-password" placeholder="Masukkan password baru" />
                                    </div>
                                    <div class="form-group">
                                        <label for="confirm-password">Konfirmasi Password Baru</label>
                                        <input type="password" class="form-control" id="confirm-password" placeholder="Masukkan ulang password baru" />
                                    </div>
                                    <button class="btn btn-primary">Save Password</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
