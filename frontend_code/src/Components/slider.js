import React, { Component } from 'react';
// import Navbar from '../Components/navbar'

import axios from 'axios';


class Slider extends Component {
  state = {
    List: [],
    slideX: "",
    slideXi: "",
    slideXii: "",
    slideXiii: ""
  };
  constructor(props) {
    super(props);
    // this.state = { newsList: [] };
    axios.get('http://localhost:4000/slider')
      .then(response => {
        this.setState({ List: response.data });
        console.log(response.data);

        this.setState({
          List: this.state.List.slice(-4)
        })
        this.setState({
          slideX: this.state.List[0],
          slideXi: this.state.List[1],
          slideXii: this.state.List[2],
          slideXiii: this.state.List[3]
        })

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
      <div >

        <div className="bd-example">
          <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" >
              <div class="carousel-item active">
                <img src={this.state.slideX.ImgUrl} class="d-block w-100" alt="..."/>
                  <div class="carousel-caption d-none d-md-block">
                    <h5>{this.state.slideX.Title}</h5>
                    <p>{this.state.slideX.Headline}</p>
                  </div>
      </div>
                <div class="carousel-item">
                  <img src={this.state.slideXi.ImgUrl} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>{this.state.slideXi.Title}</h5>
                      <p>{this.state.slideXi.Headline}</p>
                    </div>
      </div>
      <div class="carousel-item">
                  <img src={this.state.slideXii.ImgUrl} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>{this.state.slideXii.Title}</h5>
                      <p>{this.state.slideXii.Headline}</p>
                    </div>
      </div>
      {/* <div class="carousel-item">
                  <img src={this.state.slideXiii.ImgUrl} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>{this.state.slideXiii.Title}</h5>
                      <p>{this.state.slideXiii.Headline}</p>
                    </div>
      </div> */}

                  </div>


                  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>



                </div>
              </div>

            </div>
            );
          }
        }
        
export default Slider