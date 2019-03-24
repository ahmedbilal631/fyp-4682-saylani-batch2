import React, { Component } from 'react';
import Navbar from '../Components/navbar'
import Footer from '../Components/footer';

class Academics extends Component {
    state = {
        List: []
      };
      constructor(props) {
        super(props);
        // this.state = { newsList: [] };
        axios.get('http://localhost:4000/static')
          .then(response => {
            this.setState({ List: response.data });
            console.log(response.data);    
          })
          .catch(function (error) {
            console.log(error);
          })
    
      }

    render() {
        return (
            <div >
                <Navbar />
                <br />
                <br />
                <div className="ctmBgTeal">
                    <div className="container ctmBgWhite">
                        <br />
                        <br />
                        <br />
                        <h3 className="quickLinks text-light">EVENTS</h3>
                        <br />
                        <div className="container">
                            <div className="row">
                                {this.state.List.map((n, i) => {
                                    return (
                                        <div key={i} className="col-sm">
                                            <div className="card" >
                                                <img src={n.ImgUrl} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{n.Title}</h5>
                                                    <p className="card-text">{n.Headline}</p>
                                                    <Link to="/detailPage" onClick={() => { this.saveId(n._id) }} className="btn btn-primary">Read More!</Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                            <br /><br />
                            <center>
                                <Link to="/viewMore" onClick={() => { this.saveVM() }} className="btn btn-danger">View More!</Link>
                            </center>
                        </div>
                        <br /><br />
                        <br />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Academics;
