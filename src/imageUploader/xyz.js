import React, { Component } from "react";
// import firebase from "firebase";
// import FileUploader from "react-firebase-file-uploader";
// import config from './FB_config';
// firebase.initializeApp(config);

class ImageUploader extends Component {
  state = {
    username: "",
    avatar: "",
    isUploading: false,
    progress: 0,
    imageURL: ""
  };
 
  handleChangeUsername = event =>
    this.setState({ username: event.target.value });
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
      .then(url => this.setState({ imageURL: url }));
  };
 
  render() {
    
    return (
      <div>
        <form>
          <label>Username:</label>
          <input
            type="text"
            value={this.state.username}
            name="username"
            onChange={this.handleChangeUsername}
          />
          <label>Avatar:</label>
          {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
          {this.state.avatarURL && <img src={this.state.avatarURL} />}
          <FileUploader
            accept="image/*"
            name="avatar"
            randomizeFilename
            storageRef={firebase.storage().ref("images")}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
        </form>
        <div><p>This is the url:</p>{this.state.imageURL}</div>
        <div><img src="https://firebasestorage.googleapis.com/v0/b/fyp2019-1eb65.appspot.com/o/images%2F81de4eeb-f77e-4bb1-8aa3-727684020a7a.png?alt=media&token=507c4811-116d-4d2c-811a-181ce3a341c4" alt="This si img" /></div>
      </div>
    );
  }
}
 
export default ImageUploader;