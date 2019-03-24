import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import NewsDisplay from './manageNews'

//FireBase 
// import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
// import config from '../../imageUploader/FB_config';
// firebase.initializeApp(config);
import firebase from '../../imageUploader/FB_config';
import Header from '../components/header';
import AdminFooter from '../components/footer';

class LACUploader extends Component {
    state = {
        Instructions:'instruction',
        Title: '',
        Headline: '',
        Detail: '',
        isUploading: false,
        avatar: '',
        progress: 0,
        ImgUrl: '',
        session: 0,
        List:[]
    }

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
    onSubmit =() => {
        // this.onSend();
        // alert("Clicked");
        const obj = {
            
            Title: this.state.Title,
            Headline: this.state.Headline,
            Detail: this.state.Detail,
            ImgUrl: this.state.ImgUrl

        };
        console.log(obj);
        
        axios.post('http://localhost:4000/LAC/add', obj)
            .then(res => console.log(res.data));

        this.setState({
            Title: '',
            Headline: '',
            Detail: '',
            isUploading: false,
            progress: 0,
            ImgUrl: ''
        })
    }




    render() {
        return (
            <div className="ctmBgTeal">
            <Header/>
            <br/><br/>
            <br/><br/>

                <div className="">
                    <div className="row">
                        <div className="col-sm-1">
                            <Link to="/"> <button className="btn btn-info ctmBtnFontX">Home</button></Link>
                            <br />
                            <br />
                            <Link to="/adminPage"> <button className="btn btn-info ctmBtnFontX">AdminPage</button></Link>
                        </div>
                        <div className="container col-sm-4">
                            <br />
                            <p className="contactFormHeading">LAC Instructions</p>
                            <p className="text-light" >This is portal is not for the visitors!</p>
                            <p className="text-light" >Allowed image size: </p>
                            <label className="text-light ctmHeading ctmClrRed" ref="inst">{this.state.Instructions}</label>
                            {/* < NewsDisplay /> */}

                        </div>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-5">

                            <div className="customBgFrom" >

                                 <form action="/employee" onSubmit={this.onSubmit} autoComplete="false">
                                    <p className="contactFormHeading">Add LAC !</p>
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input type="text"
                                            className="form-control"
                                            ref="txtTitle"
                                            name="newsTitle"
                                            placeholder="event title"
                                            onChange={this.onTitleChange}

                                        />
                                        <div className="text-danger">
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>HeadLine</label>
                                        <input type="text"
                                            className="form-control"
                                            name="headline"
                                            ref="txtHeadline"
                                            placeholder="Headline"
                                            onChange={this.onHeadlineChange}

                                        />
                                        <div className="text-danger">
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Detail!</label>
                                        <textarea class="form-control"
                                            id="exampleFormControlTextarea1"
                                            ref="txtDetail"
                                            rows="3"
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

                    </div>
                   
                </div>
                <br/><br/>
                <AdminFooter/>
         </div>
        );
    }
}

export default LACUploader;
