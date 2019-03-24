import React, { Component } from 'react';
import Navbar from '../Components/navbar'
import { Link } from 'react-router-dom';
import './main.css';
import Footer from '../Components/footer';
// import '../bootstrap-4.3.1-dist/css/bootstrap.css'
// import '../Forms/formX/fonts/material-design-iconic-font/css/material-design-iconic-font.min.css'

class SuccessPage extends Component {
    goBack=()=>{
        window.history.go(-1);
    }
    render() {
        return (
            <div className="ctmBgTeal">
                <Navbar />
                <br />
                <br />
                <br />
                <br />
                <br />

                
                    <div className="row">
                    <div className="col-sm"></div>                    
                    <div className="col-sm">
                    <table>
                        <tr>
                            <td colSpan="2" className="ctmHeadingCenter text-light">
                            Successfully processed!!
                            </td>
                        </tr>
                        <tr>
                            <td>
                    <button className="btn btn-info" onClick={this.goBack}>Go Back!</button>
                            </td>
                            <td>
                    <Link to="/"><button className="btn btn-info">Home!</button></Link>
                            </td>
                        </tr>
                    </table>
                    </div>                    
                    <div className="col-sm"></div>                    
                    </div>

                    <br /><br />
                    <Footer />
                </div>
                );
            }
        }
        
        export default SuccessPage;
