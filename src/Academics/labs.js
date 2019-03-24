import React, { Component } from 'react';
import Navbar from '../Components/navbar'
import Footer from '../Components/footer';
import compLab from '../images/Labs&Libr/cmpLabX.jpg';
import phyLab from '../images/Labs&Libr/phyLab.jpg';
import bioLab from '../images/Labs&Libr/bioLab.jpg';
import chemLab from '../images/Labs&Libr/chemLab.jpg';

class Labs extends Component {
  render() {
    return (
      <div >
          <Navbar />
          <br/>
          <br/>
          <div className="ctmBgTeal">
          <div className="container ctmBgWhite">
          <br/>
          <br/>
          <p className="ctmHeadingCenter">College Laboratories!</p>
          <hr/>
          <hr/>
          <br/>
          <p className="ctmHeading">Physics Labs!</p>
          <hr/>
          <br/>
          <center>
              <img src={phyLab} className="img-fluid" alt="LibraryFigure" />
          </center>
          <br/>
          <p className="container text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <br/>
          <p className="ctmHeading">Bio Labs!</p>
          <hr/>
          <br/>
          <center>
              <img src={bioLab} className="img-fluid" alt="LibraryFigure" />
          </center>
          <br/>
          <p className="container text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <br/>
          <p className="ctmHeading">Chemistry Labs!</p>
          <hr/>
          <br/>
          <center>
              <img src={chemLab} className="img-fluid" alt="LibraryFigure" />
          </center>
          <br/>
          <p className="container text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <br/>
          <p className="ctmHeading">Computer Labs!</p>
          <hr/>
          <br/>
          <center>
              <img src={compLab} className="img-fluid" alt="LibraryFigure" />
          </center>
          <br/>
          <p className="container text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <br/>
          <br/>
          </div>
          </div>
          <Footer />
      </div>
    );
  }
}

export default Labs;
