// eventDetails.js

import React, { Component } from 'react';
import axios from 'axios';
// import '../Components/main.css';
import { Link } from 'react-router-dom';
//FireBase 
// import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
// import config from '../../imageUploader/FB_config';
// firebase.initializeApp(config);
import firebase from '../../imageUploader/FB_config';
import Header from '../components/header';
import AdminFooter from '../components/footer';

class NewsEdit extends Component {
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
                        axios.get('http://localhost:4000/news')
                        .then(response => {
                            this.setState({ DataList: response.data });
                            let requiredId = localStorage.getItem("savedId");
                            // alert("ID" + requiredId);
                            let getState = this.state.DataList;
                            console.log(getState.length);
                            // console.log(getState[2]._id);
                    
                    
                    
                            for (var i = 0; i <= getState.length - 1; i = i + 1) {
                                if (getState[i]._id == requiredId) {
                                    // alert("Mil Gaiee");
                                    this.setState({
                                        DataList: getState[i]
                                    })
                                    console.log(this.state.DataList);
                                    this.refs.txtTitle.value = this.state.DataList.Title;
                                    this.refs.txtHeadline.value = this.state.DataList.Headline;
                                    this.refs.txtDetail.value = this.state.DataList.Detail;
                    
                                }
                                else {
                                    // alert("Nahi mili");
                                }
                            }
                    
                        })
                        .catch(function (error) {
                            console.log(error);
                        })
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







        //this section is for on change state
        onTitleChange = ()=>{
            const title = this.refs.txtTitle.value;
            if(title.length > 20){
                // alert("Exeeds");
                this.setState({
                    Instructions: "Title Exeeds limit. It should be under 25 characters." 
                });
            }
            else
            {
                this.setState({
                    Instructions:"Title is acceptable. It should be under 25 characters."
                })       
            this.setState({
                Title:title 
            });
        }
        }
        onHeadlineChange = ()=>{
            const headline = this.refs.txtHeadline.value;
            if(headline.length > 100){
                // alert("Exeeds");
                this.setState({
                    Instructions: "HeadLine Exeeds limit. It should be under 100 characters." 
                });
            }
            else
            {
                this.setState({
                    Instructions:"Headline is acceptable. It should be under 100 characters."
                })
            this.setState({
                Headline: headline
            });
        }
        }
        onDetailChange = ()=>{
            this.setState({
                Detail: this.refs.txtDetail.value
            });
        }
    
        //News image management
        handleUploadStart = () => this.setState({
            isUploading: true,
            progress: 0
        });
        handleProgress = progress => this.setState({ progress });
        handleUploadError = error => {
            this.setState({ isUploading: false });
            console.error(error);
        };
        handleUploadSuccess = filename => {
    
            this.setState({
                avatar: filename,
                progress: 100,
                isUploading: false
            });
            firebase
                .storage()
                .ref("images")
                .child(filename)
                .getDownloadURL()
                .then(url => this.setState({ ImgUrl: url }));
        };
    
        //now submit to DB
        onSubmit =(id) => {
            // this.onSend();
            // alert("Clicked");
            const obj = {
                
                Title: this.state.Title,
                Headline: this.state.Headline,
                Detail: this.state.Detail,
                ImgUrl: this.state.ImgUrl
    
            };
            console.log(obj);
            
            axios.post('http://localhost:4000/news/edit' + id)
                .then(res => console.log(res.data));

                alert("Sent");
                

        }

    render() {

        return (
            <div className="ctmBgTeal">
                <Header/>
                <br />
                <br />
                <br />
                <br />
                <div className="container ">
                    <div >
                        <div className="ctmHeadingCenter text-light">News Editing</div>
                    <div className="text-danger">
                            {this.state.Instructions}
                            </div>
                    <form action="/employee" onSubmit={()=>{{this.onSubmit(this.state.DataList._id)}}} autoComplete="false">
                        <div className="form-group" >
                            <label>News Title</label>
                            <input type="text"
                                className="form-control"
                                ref="txtTitle"
                                name="Title"
                                // placeholder="event title"
                                // value={this.state.DataList.Title}
                            onChange={this.onTitleChange}

                            />
                            
                        </div>
                        <div className="form-group" >
                            <label>News HeadLine</label>
                            <input type="text"
                                className="form-control"
                                ref="txtHeadline"
                                name="eventHeadline"
                                // placeholder="event title"
                                // value={this.state.DataList.eventHeadline}
                            onChange={this.onHeadlineChange}

                            />
                            <div className="text-danger">
                            
                            </div>
                        </div>
                        <div className="form-group">
                            <label>News Detail!</label>
                            <textarea class="form-control"
                                id="exampleFormControlTextarea1"
                                ref="txtDetail"
                                rows="3"
                                // value={this.state.DataList.eventDetail}
                                onChange={this.onDetailChange}
                            ></textarea>


                        </div>

                        <div>
                            <label>Image:</label>
                            {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
                            <FileUploader
                                ref="eventImg"
                                accept="image/*"
                                name="avatar"
                                randomizeFilename
                            storageRef={firebase.storage().ref("images")}
                            onUploadStart={this.handleUploadStart}
                            onUploadError={this.handleUploadError}
                            onUploadSuccess={this.handleUploadSuccess}
                            onProgress={this.handleProgress}
                            />
                        </div>
                        <div className="form-group">
                                <button type="submit" className="btn btn-info ctmBtnFontX"><i className="fa fa-database"></i> Submit</button>
                                {/* <Link className="btn btn-secondary" to="/employee/list"><i class="fa fa-list-alt"></i> View All</Link> */}
                         </div>
                         </form>

                    </div>
                </div>
                <br/><br/>
                <AdminFooter/>
            </div>
        );
    }
}

export default NewsEdit;