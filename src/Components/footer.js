import React, { Component } from 'react';
import './main.css';
import { Link } from 'react-router-dom';
import fbicon from '../images/socialMediaIcons/fbicon.png';
import twticon from '../images/socialMediaIcons/twticon.png';
import yticon from '../images/socialMediaIcons/yticon.png';
import inicon from '../images/socialMediaIcons/inicon.png';
import gmicon from '../images/socialMediaIcons/gmicon.png';
import linicon from '../images/socialMediaIcons/linicon.png';


class Footer extends Component {
    admin=()=>{
        let ifSession = localStorage.getItem("session");
        if(ifSession !== ""){
            window.location.assign("https://fyp-4682-saylani-batch2.herokuapp.com/adminPage")
        }
        else{
            window.location.assign("https://fyp-4682-saylani-batch2.herokuapp.com/admin")
        }

    }
    render() {
        return (
            <div>
                <footer className="footer mt-auto py-3 bg-danger footerBg">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <p className="quickLinks text-light">Quick Links</p>
                                <ul className="list-group list-group footerList">
                                    <li className="list-group-item"><Link to="/home">Home</Link></li>
                                    <li className="list-group-item"><Link to="/contact">Contact</Link></li>
                                    <li className="list-group-item"><Link to="/collegeAdmission">Admission</Link></li>
                                    <li className="list-group-item"><Link to="/underConstructoin">Academics</Link></li>
                                    <li className="list-group-item"><Link to="/underConstructoin">Facilities</Link></li>
                                </ul>
                            </div>
                            <div className="col-sm-4">
                                <p className="quickLinks text-light">Exact Location</p>
                                <div className="list-group text-light">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">Main Campus</h5>
                                    </div>
                                    <p className="mb-1">Talagang road, Teh Kallar Kahar, Chakwal.</p>
                                    <small>PH : 0543000000</small>
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">Talagang Campus</h5>
                                    </div>
                                    <p className="mb-1">Chakwal Mianwali road, Teh Talagang, Chakwal.</p>
                                    <small >PH : 0543000000</small>
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">Choa Campus</h5>
                                    </div>
                                    <p className="mb-1">Pind_Dadan Khan road, Teh Choa Syden_Shah, Chakwal.</p>
                                    <small >PH : 0543000000</small>

                                </div>
                            </div>
                            <div className="col-sm-4">
                                <p className="quickLinks text-light">Join us</p>
                                <center>
                                    <Link to="#" ><img src={fbicon} width="45" height="45" alt="FB"  title="FaceBook" /></Link>
                                    <Link to="#"><img src={twticon} alt="TWT" width="45" height="45" title="Twitter" /></Link>
                                    <Link to="#"><img src={yticon} alt="YT" width="45" height="45" title="YouTube" /></Link>
                                    <Link to="#"><img src={inicon} alt="IN" width="45" height="45" title="Instagram" /></Link>
                                    <Link to="#"><img src={linicon} alt="LIN" width="45" height="45" title="Linkedin" /></Link>
                                    <Link to="#"><img src={gmicon} alt="GM" width="45" height="45" title="Google+" /></Link>
                                </center>
                                <br/>
                                <div className="d-flex w-100 justify-content-between ">
                                    <h5 className="mb-1 text-light">Quick Contact</h5>
                                </div>
                                <p className="mb-1 text-light">Head Office, KKSC main campus, Milaad Choke, Teh Kallar Kahar, Chakwal.</p>
                                <small className="text-light">PH : 0543000000</small> <br />
                                <small className="text-light">kksc@xyz.com</small> <br />
                                <small className="text-light">WhatsApp: 03440009090</small>


                            </div>

                        </div>

                    </div>
                </footer>
                <footer className="footer mt-auto py-3b ctmBgWhite">
                <br/>
                    <div className="container">
                        <p className="displayTxt">&copy;ISH2019</p>
                        <p className="displayLinks"> <Link to="#">Terms & Conditions</Link> ||
                    <Link to="#">Feedback & FAQ</Link> ||
                    <p onClick={this.admin}>Admin</p> || 
                     </p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
