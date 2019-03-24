import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo/logo.png';
import ProjectInfo from '../Pages/projectAtAglance';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-danger text-dark">
                    {/* <!-- Image and text --> */}
                        <Link className="navbar-brand" to="#">
                            <img src={logo} width="45" height="45" className="d-inline-block  align-self-center" alt="LOGO" />
                               <strong> KKSC</strong>
                              </Link>
                              
                        {/* <a className="navbar-brand text-white font-weight-bolder" to="/">KKSC</a> */}
                        <button className="navbar-toggler collapsed " type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon active"></span>
                        </button>

                        <div className="navbar-collapse collapse" id="navbarsExample04">
                            <ul className="navbar-nav ml-auto ">
                                <li className="nav-item active ">
                                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle active" to="#" id="admission" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Admission</Link>
                                    <div className="dropdown-menu" aria-labelledby="admission">
                                        <Link className="dropdown-item" to="/schoolAdmission">School Section</Link>
                                        <Link className="dropdown-item" to="/collegeAdmission">Intermediate</Link>
                                        <Link className="dropdown-item" to="/ugAdmission" >Undergraduate</Link>
                                        <Link className="dropdown-item" to="/fee">Fee Structure</Link>
                                        <Link className="dropdown-item" to="/scholarship">Scholarships</Link>
                                        <Link className="dropdown-item" to="/samplePaper">Sample Papers</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">FAQ</Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle active" to="#" id="academics" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Academics</Link>
                                    <div className="dropdown-menu" aria-labelledby="academics">
                                        <Link className="dropdown-item" to="/faculty">Faculty</Link>
                                        <Link className="dropdown-item" to="/library">Library</Link>
                                        <Link className="dropdown-item" to="/labs">Laboratories</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">Courses Details</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">Results</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">Study strategy</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">Others</Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle active" to="#" id="facilities" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Facilities</Link>
                                    <div className="dropdown-menu" aria-labelledby="facilities">
                                        <Link className="dropdown-item" to="/underConstructoin">Class Rooms</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">Labs and Library</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">Hostels</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">Dining Hall</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">Health & Care</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">Security system</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">Mosque</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">Electricity Backup</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">Sports Fields</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">Swimming Pool</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">Others</Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle active" to="#" id="students" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Students</Link>
                                    <div className="dropdown-menu" aria-labelledby="students">
                                        <Link className="dropdown-item" to="/underConstructoin">Rules & Regulations</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">Typical day routine</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">Events Calender</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">Societies & Clubs</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">Sports</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">Festival & Functions</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">Others</Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle active" to="#" id="parents" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Parents</Link>
                                    <div className="dropdown-menu" aria-labelledby="parents">
                                        <Link className="dropdown-item" to="/underConstructoin">Class Attendence</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">Monthly Test Report</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">Instructions</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">Hostel Wardens</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">Others</Link>
                                    </div>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-md-0">
                                <input className="form-control" type="text" placeholder="Search" />
                                <button type="submit" className="btn btn-primary ">GO!</button>
                            </form>
                        </div>
                    </nav>
                    <ProjectInfo />
                    </div>

                );
              }
            }
            
            export default Navbar;
