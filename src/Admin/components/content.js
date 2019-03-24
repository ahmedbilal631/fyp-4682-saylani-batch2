import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsList: [],
            adsList:[],
            staticList:[],
            LACList:[],
            eventList: [],
            slidesList: [],
            updatationDate: ""
        };
        
    }
    componentDidMount(){

        axios.get('http://localhost:4000/news')
        .then(response => {
            this.setState({ newsList: response.data });
        })
        .catch(function (error) {
            console.log(error);
        })
        
        axios.get('http://localhost:4000/event')
        .then(response => {
            this.setState({ eventList: response.data });
        })
        .catch(function (error) {
            console.log(error);
        })
        axios.get('http://localhost:4000/ads')
        .then(response => {
            this.setState({ adsList: response.data });
        })
        .catch(function (error) {
            console.log(error);
        })
        axios.get('http://localhost:4000/LAC')
        .then(response => {
            this.setState({ LACList: response.data });
        })
        .catch(function (error) {
            console.log(error);
        })
        axios.get('http://localhost:4000/static')
        .then(response => {
            this.setState({ staticList: response.data });
        })
        .catch(function (error) {
            console.log(error);
        })
        axios.get('http://localhost:4000/slider')
        .then(response => {
            this.setState({ slidesList: response.data });
        })
        .catch(function (error) {
            console.log(error);
        })

    }
    statusUpdate = ()=>{
        
        var getDate = new Date();
        var year =getDate.getFullYear();
        var month =getDate.getMonth();
        var date =getDate.getDate();
         getDate = date+ "/" + month + "/" + year ;
        console.log(date+ "/" + year + "/" + month);
      }
  

    render(){
        
        return (
            <div className="container">
            <div className="row">
            <div className="col-sm">
            <div className="container ctmStatusBoxBgWhiteFcBlack">
            <div className="ctmStatusTitle">News Feed!</div>
            <br/>
            <span className="ctmStatusTagLineCenter">Available news : </span>
            <span className="ctmStatusValue"> {this.state.newsList.length} </span>
            <hr/>
            <span className="ctmStatusTagLineCenter">Last update : </span>
            <span className="ctmStatusValue"> {this.getDate} </span>
            <hr/>
            <br/>
            <div >
                <center>
                <Link to="/newsManipulation"><button onClick={this.statusUpdate} className="btn btn-primary">Manage!</button></Link>
                </center>
                </div>
                <br/>


            <div></div>
            </div>
            
            </div>
            <div className="col-sm">
            <div className="container ctmStatusBoxBgWhiteFcBlack">
            <div className="ctmStatusTitle">Events!</div>
            <br/>
            <span className="ctmStatusTagLineCenter">Available events : </span>
            <span className="ctmStatusValue"> {this.state.eventList.length} </span>
            <hr/>
            <span className="ctmStatusTagLineCenter">Last update : </span>
            <span className="ctmStatusValue"> {this.getDate} </span>
            <hr/>
            <br/>
            <div >
                <center>
                <Link to="/eventManipulation"><button onClick={this.statusUpdate} className="btn btn-primary">Manage!</button></Link>
                </center>
                </div>
                <br/>
            </div>
            </div>

            <div className="col-sm">
            <div className="container ctmStatusBoxBgWhiteFcBlack">
            <div className="ctmStatusTitle">Advertiser!</div>
            <br/>
            <span className="ctmStatusTagLineCenter">Available ads : </span>
            <span className="ctmStatusValue"> {this.state.adsList.length} </span>
            <hr/>
            <span className="ctmStatusTagLineCenter">Last update : </span>
            <span className="ctmStatusValue"> {this.getDate} </span>
            <hr/>
            <br/>
            <div >
                <center>
                <Link to="/adManipulation"><button onClick={this.statusUpdate} className="btn btn-primary">Manage!</button></Link>
                </center>
                </div>
                <br/>
            </div>
            </div>
            
            </div>
            <div className="row">
            <div className="col-sm">
            <div className="container ctmStatusBoxBgWhiteFcBlack">
            <div className="ctmStatusTitle">Slider!</div>
            <br/>
            <span className="ctmStatusTagLineCenter">Available slides : </span>
            <span className="ctmStatusValue"> {this.state.slidesList.length} </span>
            <hr/>
            <span className="ctmStatusTagLineCenter">Last update : </span>
            <span className="ctmStatusValue"> {this.getDate} </span>
            <hr/>
            <br/>
            <div >
                <center>
                <Link to="/slideManipulation"><button onClick={this.statusUpdate} className="btn btn-primary">Manage!</button></Link>
                </center>
                </div>
                <br/>


            <div></div>
            </div>
            
            </div>
            <div className="col-sm">
            <div className="container ctmStatusBoxBgWhiteFcBlack">
            <div className="ctmStatusTitle">Life at campus!</div>
            <br/>
            <span className="ctmStatusTagLineCenter">Available LAC : </span>
            <span className="ctmStatusValue"> {this.state.LACList.length} </span>
            <hr/>
            <span className="ctmStatusTagLineCenter">Last update : </span>
            <span className="ctmStatusValue"> {this.getDate} </span>
            <hr/>
            <br/>
            <div >
                <center>
                <Link to="/LACManipulation"><button onClick={this.statusUpdate} className="btn btn-primary">Manage!</button></Link>
                </center>
                </div>
                <br/>
            </div>
            </div>

            <div className="col-sm">
            <div className="container ctmStatusBoxBgWhiteFcBlack">
            <div className="ctmStatusTitle">Static posts!</div>
            <br/>
            <span className="ctmStatusTagLineCenter">Available : </span>
            <span className="ctmStatusValue"> {this.state.staticList.length} </span>
            <hr/>
            <span className="ctmStatusTagLineCenter">Last update : </span>
            <span className="ctmStatusValue"> {this.getDate} </span>
            <hr/>
            <br/>
            <div >
                <center>
                <Link to="/staticManipulation"><button onClick={this.statusUpdate} className="btn btn-primary">Manage!</button></Link>
                </center>
                </div>
                <br/>
            </div>
            </div>
            
            </div>
            </div>
        );
    }
}