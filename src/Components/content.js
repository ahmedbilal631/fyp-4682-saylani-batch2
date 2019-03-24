import React, { Component } from 'react';
import './main.css';
// import principalImg from '../images/staticImage/raheelSharif.png';
import DisplayNews from './displayNews';
import axios from 'axios';


class Content extends Component {
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
              if(this.state.List[i].Category == "principal" ){
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
            <div>
            
            <div className="container msgDisplay">
          <div className="row">
          <div className="col-sm-4 ">
          <p className="quickLinks text-light">CAMPUS NEWS</p>
          <br/><br/>
          <DisplayNews />


          
          </div>
          <div className="col-sm-8">
          <div className="text-center">
              <img src={this.state.Item} className="rounded" alt='Principalimg'/>
          </div>
          <p className="quickLinks text-light">PRINCIPAL'S MESSAGE!</p>
          <p className="text-justify text-light">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin     literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>       
          
          </div>
          </div>
          </div>
          <br/>
          <hr/>
            
            </div>
        );
    }
}

export default Content;
