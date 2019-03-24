import React, { Component } from 'react';
import Navbar from '../Components/navbar'
import { Link } from 'react-router-dom';
import './main.css';
import Footer from '../Components/footer';
// import '../bootstrap-4.3.1-dist/css/bootstrap.css'
// import '../Forms/formX/fonts/material-design-iconic-font/css/material-design-iconic-font.min.css'

class Contact extends Component {
    render() {
        return (
            <div className="ctmBgTeal">
                <Navbar />
                <br />
                <br />
                <br />

                <div >
                    <div className="row">
                    <div className="col-sm-1"></div>
                        <div className="col-sm-4">
                        <br/>
                            <p className="quickLinks text-light">Contact List</p>
                            <p className="text-light">Contact List will be displayed here. In which phone numbers and mail address of organizing staff will me mentioned.</p>
                        
                        </div>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-5">
        
                          <div className="customBgFrom" >

                                <form action="/employee" method="POST" autocomplete="off">
                                    <p className="quickLinks">Feel free to contact us!</p>
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input type="text" className="form-control" name="fullName" placeholder="Full Name" />
                                        <div className="text-danger">
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="text" className="form-control" name="email" placeholder="Email" />
                                        <div className="text-danger">
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>State</label>
                                            <input type="text" className="form-control" name="state" placeholder="State" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>City</label>
                                            <input type="text" className="form-control" name="city" placeholder="City" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>You are</label>
                                            <select className="custom-select">
                                                <option sdefaultValue>Choose one!</option>
                                                <option value="1">Student</option>
                                                <option value="2">Teacher</option>
                                                <option value="3">Parent</option>
                                                <option value="3">Other</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Subject</label>
                                            <select className="custom-select">
                                                <option selected>Choose one!</option>
                                                <option value="1">Feedback</option>
                                                <option value="2">Suggestion</option>
                                                <option value="3">Complain</option>
                                                <option value="3">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                            <label>Message!</label>
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>


                                        </div>

                                    <div className="form-group">
                                        <Link to="/success"><button type="submit" className="btn btn-info"><i className="fa fa-database"></i> Submit</button></Link>
                                        {/* <Link className="btn btn-secondary" to="/employee/list"><i class="fa fa-list-alt"></i> View All</Link> */}
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
                <br/><br/>
                <Footer />
            </div>
        );
    }
}

export default Contact;
