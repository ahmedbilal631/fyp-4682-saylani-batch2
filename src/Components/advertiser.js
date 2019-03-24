import React, { Component } from 'react';
// import img3 from '../images/Ads/adx.jpg';
import './main.css';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Advertiser extends Component {
  state = {
    List: []
    // slideX: "",
    // slideXi: "",
    // slideXii: "",
    // slideXiii: ""
  };
  constructor(props) {
    super(props);
    // this.state = { newsList: [] };
    axios.get('http://localhost:4000/ads')
      .then(response => {
        this.setState({ List: response.data });
        console.log(response.data);

        // this.setState({
        //   List: this.state.List.slice(-4)
        // })
        // this.setState({
        //   slideX: this.state.List[0],
        //   slideXi: this.state.List[1],
        //   slideXii: this.state.List[2],
        //   slideXiii: this.state.List[3]
        // })

      })
      .catch(function (error) {
        console.log(error);
      })

  }
  saveId = (id) => {
    //   alert(id);

    localStorage.setItem("savedId", id);
  }
  render() {
      return (
        <div>
            <br/>
          <h2 className="quickLinks text-light">LATEST UPDATE</h2>
            <br/>
            <div className="ctmBorderBU border-danger">
            <marquee behavior="" direction="" scrollamount="5" className="" >
            {this.state.List.map((n, i)=>{
              return <span key={i}>
              <Link to=""><img src={n.ImgUrl} alt="jksdnfkj" /><span>-{n.Title}..Click Here-</span>
              
              </Link>
              </span>
            })}
            </marquee>
            </div>


            <br/>

      </div>
    );
  }
}

export default Advertiser;