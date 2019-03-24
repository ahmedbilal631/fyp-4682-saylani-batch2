// eventDetails.js

import React, { Component } from 'react';
import axios from 'axios';
import '../Components/main.css';
import { Link } from 'react-router-dom';

import Header from '../Components/navbar';
import Footer from '../Components/footer';

class DetailPage extends Component {
    state = {
        List: []
    };
    constructor(props) {
        super(props);
        // this.state = { newsList: [] };

        const ctg = localStorage.getItem("category");
        console.log(ctg);
        switch (ctg) {
            case 'event':

                axios.get('http://localhost:4000/event')
                    .then(response => {
                        this.setState({ List: response.data });
                        this.extraction();
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                break
            case 'news':

                axios.get('http://localhost:4000/news')
                    .then(response => {
                        this.setState({ List: response.data });
                        this.extraction();
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                break
            case 'slider':

                axios.get('http://localhost:4000/slider')
                    .then(response => {
                        this.setState({ List: response.data });
                        this.extraction();
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                break
            case 'LAC':

                axios.get('http://localhost:4000/LAC')
                    .then(response => {
                        this.setState({ List: response.data });
                        this.extraction();
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                break
        }

    }
    extraction = () => {
        let requiredId = localStorage.getItem("savedId");
        // alert("ID" + requiredId);
        let getState = this.state.List;
        console.log(getState.length);
        // console.log(getState[2]._id);

        for (var i = 0; i <= getState.length - 1; i = i + 1) {
            if (getState[i]._id == requiredId) {
                // alert("Mil Gaiee");
                this.setState({
                    List: getState[i]
                })
                console.log(this.state.List);
            }
            else {
                // alert("Nahi mili");
            }
        }
    }
moveTo=() =>{
    window.history.go(-1);
    // window.location.replace(document.referrer)    
    // window.location.replace("http://localhost:3000")    
}



    render() {
        let getState = this.state.List;

        return (
            <div className="ctmBgTeal">
                <Header />

                <br />
                <br />
                <div className="container">


                    <div className="row  ctmRowMargin">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10" >
                            <div className="card" >
                                <div className="card-body">
                                    <h5 className="card-title ctmHeadingCenter">{getState.Title}</h5>
                                    <p className="card-text text-justify">{getState.Headline}</p>
                                    <img src={getState.ImgUrl} className="card-img-top" alt="..." />
                                    <br /><br />
                                    <p className="card-text text-justify">{getState.Detail}</p>
                                    <br /><br />
                                    <center>
                                        <Link to="" onClick={this.moveTo} className="btn btn-primary">Home</Link>
                                    </center>
                                </div>
                            </div>

                        </div>

                        <div className="col-sm-1"></div>
                    </div>

                </div>
                <br /><br />
                <Footer />
            </div>
        );
    }
}

export default DetailPage;