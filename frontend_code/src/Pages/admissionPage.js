import React, { Component } from 'react';
// import Navbar from '../Components/navbar'
// import Footer from '../Components/footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import {Link} from 'react-router-dom';
// import newAd from '../images/Ads/kkscAdd.jpg'
import SchoolAdmission from '../Components/Admission/school';

class mainAdmissionPage extends Component {
  render() {
    return (
        <BrowserRouter>
      <div >
       <Route exact path='/school' component={SchoolAdmission} />
        {/* <Route  path='/home' component={} /> */}

      </div>
         </BrowserRouter>
    );
  }
}

export default mainAdmissionPage;
