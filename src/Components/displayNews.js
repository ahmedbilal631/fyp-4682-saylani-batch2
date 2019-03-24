// index.component.js

import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class DisplayNews extends Component {

  constructor(props) {
      super(props);
      this.state = {List: []};
      
    }
    componentDidMount(){
      axios.get('http://localhost:4000/news')
        .then(response => {
          this.setState({ List: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    readMore =(newsId)=>{
      alert(newsId);
      console.log(newsId);
      
      localStorage.setItem("savedId", newsId);
      localStorage.setItem("category", "news");

    }
    saveVM=()=>{
      //   alert(id);
        localStorage.setItem("category", "news");
    }

    render() {
      var arrLength = this.state.List.length;
      console.log(arrLength);
      
      var x = this.state.List.slice(-6);
      return (
        <div className="container ctmBorderRight ctmClrWhite newsFeed" >
            <marquee behavior="" direction="up" scrollamount="2" className="" >
            <ul className="text-black ">
            {x.map((value, index)=>{
                return <li key={index}>{value.Headline}<Link to="/detailPage/" onClick={()=>{this.readMore(value._id)}} className="ctmClrWhite ctmBorderDbBottomWhite">.........Read more</Link></li>
            })}

            </ul>
            </marquee>
            <br/><br/>
                    <center>
                    <Link to="/viewMore" onClick={()=>{this.saveVM()}} className="btn btn-danger">View More!</Link>
                    </center>
        </div>
      );
    }
  }
