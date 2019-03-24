//UnderConstructionPage

import React, { Component } from 'react';
import Navbar from '../Components/navbar.js';
import Footer from '../Components/footer.js';
import axios from 'axios';

// import {Link} from 'react-router-dom';
// import newAd from '../images/staticImage/webPageX.jpg';

class UnderConstruction extends Component {
  state = {
    List: [],
    Item: ""
  };
  constructor(props) {
    super(props);
    // this.state = { newsList: [] };
    axios.get('http://localhost:4000/static')
      .then(response => {
        this.setState({ List: response.data });
        console.log(response.data);
        for(var i = 0; i <= this.state.List.length -1; i = i+1){
          if(this.state.List[i].Category == "underConstruction" ){
            this.setState({
             Item: this.state.List[i].ImgUrl

            })
            // alert("Good");
            console.log(this.state.Item);
            
          }
          else{
            this.state.Item = "Na veere";
            // alert("Bad");
          }
        }

      })
      .catch(function (error) {
        console.log(error);
      })

  }
  render() {
    return (
      <div >
          <Navbar />
          <div className="ctmBgTeal">
          <br/>
          <br/>
          <center>
          <img src={this.state.Item} alt="Underconstruction" />
          </center>
          </div>

          <Footer />
      </div>
    );
  }
}

export default UnderConstruction;