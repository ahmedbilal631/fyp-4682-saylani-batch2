// eventDetails.js

import React, { Component } from 'react';
import axios from 'axios';
// import '../Components/main.css';
import {Link} from 'react-router-dom';
import Header from '../components/header';
import AdminFooter from '../components/footer';

class LACManipulation extends Component {
    state = {
        Instructions: "Inst",
        DataList: [],
        List: [],
        session: 0
    };

        //Session Checker
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
                        axios.get('http://localhost:4000/LAC')
                        .then(response => {
                            this.setState({ DataList: response.data });
                        })
                        .catch(function (error) {
                            console.log(error);
                        })
                    
                    }
                    else{
                      window.location.assign("https://fyp-4682-saylani-batch2.herokuapp.com/admin")
                      
                    }
                  }
                  else{
                    window.location.assign("https://fyp-4682-saylani-batch2.herokuapp.com/admin")
                    
                  }
                  
                })
                .catch(function (error) {
                  console.log(error);
                })
                
              }





    delete=(id)=> {
        alert(id);
        axios.get('http://localhost:4000/LAC/delete/'+ id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
    Edit=(id)=> {
        localStorage.setItem("savedId", id);
        alert(id);
        axios.get('http://localhost:4000/LAC/edit/'+ id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }


    render() {

        return (
            <div className="ctmBgTeal">
            <Header />
            <br/><br/>
            <br/><br/>
                <h3 className="quickLinks text-light">LAC</h3>
                <br />
                <div className="container ctmBgWhite">
                <table border="2">
                    <tr className="ctmHeadingCenter">
                        <th>Title</th>
                        <th>HeadLine</th>
                        <th>Image</th>
                        <th>Image URL</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                        {this.state.DataList.map((n, i) => {
                            return (
                                <tbody>
                                    <tr key={i}>
                                    <td className="ctmHeading">{n.Title}</td>
                                    <td>{n.Headline}</td>
                                    <td><img src={n.ImgUrl} alt="img" class="img-thumbnail"/></td>
                                    <td>{n.ImgUrl}</td>
                                    <td>{n._id}</td>
                                    <td><Link to="/LACEdit"><button onClick={()=>{this.Edit(n._id)}} className="btn btn-primary">Edit</button></Link></td>
                                    <td><button onClick={()=>{this.delete(n._id)}} className="btn btn-danger">Delete</button></td>

                                    </tr>
                                </tbody>
                                
                                )
                            })}
                       </table> 
                </div>
                <br/><br/>
                <AdminFooter />
            </div>
        );
    }
}

export default LACManipulation;