import React, { Component } from 'react';
import Navbar from '../Components/navbar'
import Footer from '../Components/footer';
import banner from '../images/staticImage/facultyBanner.png';
// import phyLab from '../images/Labs&Libr/phyLab.jpg';
import staff from '../images/staticImage/staff.jpg';
import teacherX from '../images/staticImage/teacherXii.jpg';
import teacherXi from '../images/staticImage/teacher.jpg';

class Faculty extends Component {
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
          <p className="ctmHeadingCenter">College Faculty!</p>
          <hr/>
          <hr/>
          <br/>
          <br/>
          <center>
              <img src={banner} className="img-fluid" alt="LibraryFigure" />
          </center>
          <br/>
          <p className="container text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <br/>
          <center>
              <img src={staff} className="img-fluid" alt="LibraryFigure" />
          </center>
          <br/>
          <p className="container text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>

          <br/>
          <center>
              <img src={teacherX} className="img-fluid" alt="LibraryFigure" />
          </center>
          <br/>
          <p className="container text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        
          <center>
              <img src={teacherXi} className="img-fluid" alt="LibraryFigure" />
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

export default Faculty;
