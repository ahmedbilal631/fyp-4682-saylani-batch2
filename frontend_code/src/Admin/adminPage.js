import React, { Component } from 'react';
import Header from './components/header';
// import SideBar from './components/sideBar';
import Content from './components/content';
import SecNav from './components/secNav'
import AdminFooter from './components/footer';
import AdminLogIn from './adminLogin';
import axios from 'axios';

class AdminPage extends Component {
  state = {
    List: [],
    session: 0,
    x: 1,
    y: 1
  };
  constructor(props) {
    super(props);
    // this.state = { newsList: [] };
    axios.get('http://localhost:4000/session')
      .then(response => {
        this.setState({ List: response.data });
        console.log(response.data);
        if(this.state.List.length != 0){
          // alert("Passed");
          this.state.session = this.state.List[0]
           
            console.log(this.state.session.sessionDB);
            let localSession = Number( localStorage.getItem("session"));
            console.log(localSession);
            if(this.state.session.sessionDB == localSession){
            }
            else{
              window.location.assign("http://localhost:3000/admin")
              
            }
          }
          else{
            window.location.assign("http://localhost:3000/admin")
            
          }
          
        })
        .catch(function (error) {
          console.log(error);
        })
        
      }
      
      
      

      
      
      render() {
        if (this.state.x == this.state.y) {
          return (<div className="ctmBgTeal ">
        <Header />

        <div className="welcomeAdmin">
          <br />
          Welcome Admin!
      <br />
        </div>
        <SecNav />
        <br />
        <div className="">
          <Content />
        </div>
        <br />
        <AdminFooter />
      </div>)
    }
    else {
      return (
        <AdminLogIn />
      )
    }
  }
}

export default AdminPage;