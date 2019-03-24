import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarSec extends Component {
    saveVM=()=>{
        //   alert(id);
          localStorage.setItem("category", "news");
      }
    render() {
        return (
            <div>
                <nav className="navbar navCustom navbar-expand-md navbar-dark bg-danger text-dark">
                              <ul className="navbar-nav m-auto ">
                              <li className="nav-item active ">
                              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Project at a glance(Removable)</button>
                                </li>
                                <li className="nav-item active ">
                                    <Link className="nav-link" onClick={()=>{this.saveVM()}} to="/viewMore">Campus News</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="#">Faculty</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/underConstructoin">Publications</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle active" to="#" id="campuses" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Campuses</Link>
                                    <div className="dropdown-menu" aria-labelledby="campuses">
                                        <Link className="dropdown-item" to="/home">Main Campus</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">Choa Campus</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">Talagang Campus</Link>
                                        <Link className="dropdown-item" to="/underConstructoin">Mulhal Mughalan Campus</Link>
                                    </div>
                                </li>
                            </ul>
                        
                    </nav>
                    </div>

                );
              }
            }
            
            export default NavbarSec;
