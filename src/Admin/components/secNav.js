import React, { Component } from 'react';
import logo from '../../images/logo/logo.png';
import {Link} from 'react-router-dom';
class SecNav extends Component {

    render() {
    
        return (
            <div>
                                <nav className="navbar navbar-expand-md navbar-dark bg-dark text-dark">
                        

                        
                            <ul className="navbar-nav m-auto ">
                                <li className="nav-item active ">
                                    <Link className="nav-link" to="/underConstructoin">Help</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/underConstructoin">Extensions</Link>
                                </li>

                                <li className="nav-item active">
                                    <Link className="nav-link" to="/underConstructoin">Mails</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/underConstructoin">Report</Link>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle active" to="#" id="advertiser" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Admin</Link>
                                    <div className="dropdown-menu" aria-labelledby="advertiser">
                                        <Link className="dropdown-item" to="/adminSignUp">Add New</Link>
                                        <Link className="dropdown-item" to="/adminManipulation">Manage Admins</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">Instructions</Link>
                                    </div>
                                </li>

                                </ul>
                        
                    </nav>
            </div>

                );
            }
}
export default SecNav