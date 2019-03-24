//ViewMore page
// eventDetails.js

import React, { Component } from 'react';
import axios from 'axios';
import '../Components/main.css';
import { Link } from 'react-router-dom';

import Header from '../Components/navbar';
import Footer from '../Components/footer';

class ViewMore extends Component {
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
                        // this.extraction();
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                break
            case 'news':

                axios.get('http://localhost:4000/news')
                    .then(response => {
                        this.setState({ List: response.data });
                        // this.extraction();
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                break
            case 'slider':

                axios.get('http://localhost:4000/slider')
                    .then(response => {
                        this.setState({ List: response.data });
                        // this.extraction();
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                break
            case 'LAC':

                axios.get('http://localhost:4000/LAC')
                    .then(response => {
                        this.setState({ List: response.data });
                        // this.extraction();
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                break
        }

    }
    saveId = (id) => {
        //   alert(id);

        localStorage.setItem("savedId", id);
        //   localStorage.setItem("category", "event");
    }
    moveTo = () => {
        window.history.go(-1);
        // window.location.replace(document.referrer)    
        // window.location.replace("http://localhost:3000")    
    }


    render() {


        // let getState = this.state.List;

        return (
            <div className="ctmBgTeal">
                <Header />

                <br />
                <br />
                <div className="container">


                    <div className="row  ctmRowMargin">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10 ctmBgWhite" >
                            <br /><br />
                            <table>
                                <tbody>
                                    {this.state.List.map((n, i) => {
                                        return <tr key={i} className=" ctmPaddingX">
                                            <td><img src={n.ImgUrl} alt="img" className=" card-img-top img-fluid" /></td>

                                            <td className="card-text" colSpan="3">{n.Headline}</td>
                                            <td colSpan="2"><Link to="/detailPage" onClick={() => { this.saveId(n._id) }} className="btn btn-primary">Read More!</Link></td>

                                        </tr>

                                    })}
                                </tbody>
                            </table>
                            <br /><br />
                            <center>
                                <Link to="" onClick={this.moveTo} className="btn btn-danger">Home!</Link>
                            </center>
                            <br /><br />
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

export default ViewMore;
