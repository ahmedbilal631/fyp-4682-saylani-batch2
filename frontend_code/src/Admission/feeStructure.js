import React, { Component } from 'react';
import Navbar from '../Components/navbar.js';
import Footer from '../Components/footer.js';
import {Link} from 'react-router-dom';
import newAd from '../images/Ads/kkscAdd.jpg';

class FeeStructure extends Component {
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
          <p className="ctmHeadingCenter text-black" id="school">Our Fee Structure!</p>
          <hr/><hr/>
          <div className="school">
          <p className="ctmHeading text-black" id="school">Matriculation!</p>
          <p className="container text-justify aboutPara text-dark">
             Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

             The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections           1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
          </p>
          </div>
          <hr/>
          <div className="school">
          <p className="ctmHeading ctmClrBlack" id="school">Intermediate program!</p>
          <p className="container text-justify aboutPara text-dark">
             Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

             The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections           1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
          </p>
          </div>
          <hr/>
          <div className="school">
          <p className="ctmHeading ctmClrBlack" id="school">Undergraduate program!</p>
          <p className="container text-justify aboutPara text-dark">
             Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

             The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections           1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
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

export default FeeStructure;