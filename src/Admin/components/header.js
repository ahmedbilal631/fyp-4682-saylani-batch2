import React, { Component } from 'react';
import logo from '../../images/logo/logo.png';
import {Link} from 'react-router-dom';
import axios from 'axios'; 

class Header extends Component {
    state = {
        List: [],
        retreived: ''
    };
    constructor(props) {
        super(props);
        // this.state = { newsList: [] };
        axios.get('http://localhost:4000/session')
            .then(response => {
                this.setState({ List: response.data });
                this.state.retreived = this.state.List[0];
            })
            .catch(function (error) {
                console.log(error);
            })
            
            console.log(this.state.retreived);
           
    }
    signOut=(id)=> {
        axios.get('http://localhost:4000/session/delete/'+ id)
        .then(console.log('Deleted'))
        .catch(err => console.log(err))
        localStorage.removeItem("session");
        window.location.assign("https://fyp-4682-saylani-batch2.herokuapp.com/admin");
        // alert("working" + id);
    }

    render() {
    
        return (
            <div>
                                <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark text-dark">
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
                                    <Link className="nav-link" to="/adminPage">Main Page<span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle active" to="#" id="static" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Static</Link>
                                    <div className="dropdown-menu" aria-labelledby="static">
                                        <Link className="dropdown-item" to="/staticUploader">Add New</Link>
                                        <Link className="dropdown-item" to="/staticManipulation">Manage Post</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">Instructions</Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle active" to="#" id="slider" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Slider</Link>
                                    <div className="dropdown-menu" aria-labelledby="slider">
                                        <Link className="dropdown-item" to="/slideUploader">Add New</Link>
                                        <Link className="dropdown-item" to="/slideManipulation">Manage Slides</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">Instructions</Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle active" to="#" id="newsFeed" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">News Feed</Link>
                                    <div className="dropdown-menu" aria-labelledby="newsFeed">
                                        <Link className="dropdown-item" to="/newsUploader">Add New</Link>
                                        <Link className="dropdown-item" to="/newsManipulation">Manage news</Link>
                                        <Link className="dropdown-item" to="/underConstructoin" >Instructions</Link>

                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle active" to="#" id="advertiser" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Advertiser</Link>
                                    <div className="dropdown-menu" aria-labelledby="advertiser">
                                        <Link className="dropdown-item" to="/adUploader">Add New</Link>
                                        <Link className="dropdown-item" to="/adManipulation">Manage Ads</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">Instructions</Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle active" to="#" id="events" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Events</Link>
                                    <div className="dropdown-menu" aria-labelledby="events">
                                        <Link className="dropdown-item" to="/eventUploader">Add New</Link>
                                        <Link className="dropdown-item" to="/eventManipulation">Manage events</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">Instructions</Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle active" to="#" id="lifeAtCampus" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Life at campus</Link>
                                    <div className="dropdown-menu" aria-labelledby="academics">
                                        <Link className="dropdown-item" to="/LACUploader">Add New</Link>
                                        <Link className="dropdown-item" to="/LACManipulation">Manage posts</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">Instructions</Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle active" to="#" id="contacts" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Quick Contacts</Link>
                                    <div className="dropdown-menu" aria-labelledby="academics">
                                        <Link className="dropdown-item" to="/underConstructoin">Add Contact</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">Manage contacts</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">Instructions</Link>
                                    </div>
                                </li>


                            </ul>
                            <span>.......</span>
                            <span className=" ctmClrWhite" onClick={()=>{this.signOut(this.state.retreived._id)}} ><button> Sign out!</button></span>

                        </div>
                    </nav>
            </div>

                );
            }
}
export default Header