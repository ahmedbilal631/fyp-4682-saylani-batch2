//HomePage

import React, { Component } from 'react';
import Navbar from '../Components/navbar'
import Slider from '../Components/slider';
import NavbarSec from '../Components/secondNav';
import Advertiser from '../Components/advertiser';

import Events from '../Components/events';
import Footer from '../Components/footer';
import LifeAtCampus from '../Components/lifeAtCampus';
import Paragraph from '../Components/staticParagragh';
import Content from '../Components/content';
class Home extends Component {
  componentDidMount(){
    setTimeout(()=>{
    // alert("Hello")
    }, 5000)
}


  render() {
    return (
      <div >
          <Navbar />
          <br/>
          <br/>
          <br/>
          <Slider />
          <NavbarSec />
          <div className="customBg">
          <Advertiser />
          <Content />
          
          <Events />
          <Paragraph />
          <LifeAtCampus />
          </div>
          <Footer />
      </div>
    );
  }
}

export default Home;
