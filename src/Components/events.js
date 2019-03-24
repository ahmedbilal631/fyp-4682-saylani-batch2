import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import axios from 'axios';
// import eImgX from '../images/events/event9.jpg';
// import eImgXi from '../images/events/event10.jpg';
// import eImgXii from '../images/events/event8.jpg';


// import { connect } from 'react-redux'


class Events extends Component {
    state = {
        List: []
      };
      constructor(props) {
        super(props);
        // this.state = { newsList: [] };
        axios.get('http://localhost:4000/event')
          .then(response => {
            this.setState({ List: response.data });
            console.log(response.data);
            this.setState({
                List: this.state.List.slice(-4)
            })
            
          })
          .catch(function (error) {
            console.log(error);
          })
    
      }
      saveId=(id)=>{
        //   alert(id);
          
          localStorage.setItem("savedId", id);
          localStorage.setItem("category", "event");
      }
      saveVM=()=>{
        //   alert(id);
          localStorage.setItem("category", "event");
      }

    render() {
        return (
            <div>
                <h3 className="quickLinks text-light">EVENTS</h3>
                <br />
                <div className="container">
                    <div className="row">
                        {this.state.List.map((n, i)=>{return(
                                                    <div key={i} className="col-sm">
                                                    <div  className="card" >
                                                    <img src={n.ImgUrl} className="card-img-top" alt="..." />
                                               <div className="card-body">
                                               <h5 className="card-title">{n.Title}</h5>
                                               <p className="card-text">{n.Headline}</p>
                                               <Link to="/detailPage" onClick={()=>{this.saveId(n._id)}} className="btn btn-primary">Read More!</Link>
                                               </div>
                                               </div>
                                            </div>
                                               )
                                            }) }

                    </div>
                    <br/><br/>
                    <center>
                    <Link to="/viewMore" onClick={()=>{this.saveVM()}} className="btn btn-danger">View More!</Link>
                    </center>
                </div>
                <br/><br/>

            </div>
        );
    }
}
export default Events;