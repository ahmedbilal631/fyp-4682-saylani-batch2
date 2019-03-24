import React, { Component } from 'react';
import Navbar from '../Components/navbar'
import Footer from '../Components/footer';
import WPUC from '../images/staticImage/webPageX.jpg';
// import phyLab from '../images/Labs&Libr/phyLab.jpg';
// import staff from '../images/staticImage/staff.jpg';
// import teacherX from '../images/staticImage/teacherXii.jpg';
// import teacherXi from '../images/staticImage/teacher.jpg';

class AcademicsOther extends Component {
  render() {
    return (
      <div >
          <Navbar />
          <div className="ctmBgTeal">
          <br/>
          <br/>
          <br/>
          <center>
          <img src={WPUC} alt="WPUC" className="img-fluid"/>
          </center>
          </div>
          <Footer />
      </div>
    );
  }
}

export default AcademicsOther;
