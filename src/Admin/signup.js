import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AdminFooter from './components/footer';
import Header from './components/header';

class AdminSignUp extends Component {
    state = {
        name: '',
        Pwd: '',
        pwdChecker: ''
    }

    onSubmit = () => {

        let enteredName = this.refs.txtName.value;
        let enteredPwd = this.refs.txtPwd.value;
        let enteredPwdC = this.refs.txtPwdC.value;
        console.log(enteredName + " " + enteredPwd);
        if (enteredPwd != enteredPwdC) {
            this.setState({
                pwdChecker: "Password doesn't match. Try again"
            })
        }
        else {
            // alert("Pwd passed");
            this.state.name = enteredName;
            this.state.Pwd = enteredPwd;

            console.log(this.state.name);

            const obj = {
                Name: this.state.name,
                Password: this.state.Pwd
            };
            console.log(obj);

            axios.post('http://localhost:4000/auth/add', obj)
                .then(res => console.log(res.data));

        }
    }
    render() {
        return (
            <div className="ctmBgTeal">
            <Header />
            <br/><br/>
            <br/><br/>
                <div className="row">
                    <div className="col-sm-4">
                        <br />
                        <p className="contactFormHeading">This is Admin Login Portal</p>
                        <p className="text-light" >This is portal is not for the visitors!</p>
                        {/* <Link to="/"> <button className="btn btn-info ctmBtnFontX">Home</button></Link> */}
                        {/* <Link to="/adminPage"> <button className="btn btn-info ctmBtnFontX">AdminPage</button></Link> */}

                    </div>
                    <div className="col-sm-5">

                        <div className="customBgFrom" >


                            <p className="contactFormHeading">Sign Up!</p>
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
                                    {this.state.pwdChecker}
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" ref="txtPwdC" className="form-control" name="fullName" placeholder="*************" />
                                <div className="text-danger">
                                </div>
                            </div>


                            <div className="form-group">
                                <button onClick={this.onSubmit} className="btn btn-info ctmBtnFontX">Submit</button>
                                <Link to="/admin" class="btn btn-link">Login</Link>
                                {/* <Link className="btn btn-secondary" to="/employee/list"><i class="fa fa-list-alt"></i> View All</Link> */}
                            </div>

                        </div>
                    </div>

                </div>
                <br /><br />
                <AdminFooter />
            </div>
        );
    }
}

export default AdminSignUp;
