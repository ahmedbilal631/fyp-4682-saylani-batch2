import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


class AdminLogIn extends Component {
    state={
        List: [],
        retreived : '',
        sessionDB: 0,
        inst: 'hello'
    } 

    onSubmit =()=>{

        let enteredName = this.refs.txtName.value;
        let enteredPwd = this.refs.txtPwd.value;
        if(enteredName === "" && enteredPwd === ""){
            this.state.inst = 'Please fill form correctly'
        }
        else{
            axios.get('http://localhost:4000/auth')
            .then(response => {
              this.setState({ List: response.data });
            })
            .catch(function (error) {
              console.log(error);
            })
            for(var i = 0; i <= this.state.List.length - 1; i = i + 1){
                this.state.retreived = this.state.List[i];
                console.log(this.state.retreived._id);
                
                if(this.state.retreived.Password == enteredPwd && this.state.retreived.Name == enteredName){

                    let sessionNum = Math.round(Math.random() * 1000000);
                    console.log(sessionNum);
                    this.state.sessionDB = sessionNum;
                    localStorage.setItem("session", sessionNum);
                    const obj = {
    
                        sessionDB: sessionNum
            
                    };
                    console.log(obj);
            
                    axios.post('http://localhost:4000/session/add', obj)
                        .then(res => console.log(res.data));
                        window.location.assign("http://localhost:3000/adminPage")
                         // alert("Passed");
                }
                else{
                    this.state.inst = "User name or password is incorrect";
                    // alert("Failed");
                }
            }

        }

    }
  render() {
    return (
        <div>
            <div className="adminWelcome">
            <br/>
            <br/>
            <br/>
            </div>

        <br />
        <br />

        <div className="ctmBgTeal">
            <div className="row">
                <div className="col-sm-4">
                <br/>
                    <p className="contactFormHeading">This is Admin Login Portal</p>
                    <p className="text-light" >This is portal is not for the visitors!</p>
                    <Link to="/"> <button className="btn btn-info ctmBtnFontX">Home</button></Link>
                    {/* <Link to="/adminPage"> <button className="btn btn-info ctmBtnFontX">AdminPage</button></Link> */}
                    <p className="text-light" >Please Login to initiate your session!</p>
                
                </div>
                <div className="col-sm-5">

                  <div className="customBgFrom" >

                        
                            <p className="contactFormHeading">Login!</p>
                            <div className="text-danger">
                            {this.state.inst}
                                </div>
                            <div className="form-group">
                                <label>Admin Name</label>
                                <input type="text" ref="txtName" className="form-control" name="adminName" placeholder="userName" />
                                <div className="text-danger">
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" ref="txtPwd" className="form-control" name="fullName" placeholder="*************" />
                                <div className="text-danger">
                                </div>
                            </div>

                            <div className="form-group">
                             <button onClick={this.onSubmit} className="btn btn-info ctmBtnFontX">Submit</button>
                                <Link to="/adminSignUp" class="btn btn-link">Signup</Link>
                                {/* <Link className="btn btn-secondary" to="/employee/list"><i class="fa fa-list-alt"></i> View All</Link> */}
                            </div>
                        
                    </div>
                </div>

            </div>
       <br/><br/>
        </div>
       
    </div>
    );
  }
}

export default AdminLogIn;
