import React, { Component } from 'react';
import Navbar from '../Components/navbar'
import Footer from '../Components/footer';
import libX from '../images/Labs&Libr/libX.jpg';
import libXi from '../images/Labs&Libr/libXi.jpg';
import libXii from '../images/Labs&Libr/libXii.jpg';
class Library extends Component {
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
          <p className="ctmHeadingCenter">Smart Library!</p>
          <hr/>
          <br/>
          <p className="container text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <br/>
          <center>
              <img src={libX} className="img-fluid"  alt="LibraryFigure" />
          </center>
          <br/>
          <p className="container text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <br/>
          <center>
              <img src={libXi} className="img-fluid" alt="LibraryFigure" />
          </center>
          <br/>
          <p className="container text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <br/>
          <center>
              <img src={libXii} className="img-fluid" alt="LibraryFigure" />
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

export default Library;
