import React, { Component } from 'react';
import Navbar from '../Components/navbar.js';
import Footer from '../Components/footer.js';
import {Link} from 'react-router-dom';
import newAd from '../images/Ads/kkscAdd.jpg';

class SamplePaper extends Component {
  render() {
    return (
      <div className="ctmBgTeal">
          <Navbar />
          <br/>
          <br/>
          <br/>
          <div className="">
          <div className="container generalInfoBg bg-light">
          <br/>
          <p className="ctmHeadingCenter text-black" id="school">Sample Papers for Entrance Test!</p>
          <hr/><hr/>
          <div className="school">
          <p className="ctmHeading text-black" id="school">Matriculation!</p>
          <p className="container text-center aboutPara text-danger">
            Sorry! No paper is available.
          </p>
          </div>
          <hr/>
          <div className="school">
          <p className="ctmHeading ctmClrBlack" id="school">Intermediate program!</p>
          <p className="container text-center aboutPara text-danger">
            Sorry! No paper is available.
          </p>
          </div>
          <hr/>
          <div className="school">
          <p className="ctmHeading ctmClrBlack" id="school">Undergraduate program!</p>
          <p className="container text-center aboutPara text-danger">
            Sorry! No paper is available.           
          </p>
          </div>

          <br/><br/>
          <div className="adPlace">
          <center>
           <img src={newAd} className="img-fluid" alt="Responsive" />
        </center>

          </div>
          <br/><br/>         
          

          </div>
          </div>
          <Footer />
      </div>
    );
  }
}

export default SamplePaper;