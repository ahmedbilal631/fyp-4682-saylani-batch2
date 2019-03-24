//Project info page

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class ProjectInfo extends Component {
    componentDidMount() {
        setTimeout(() => {
            // alert("Hello")
        }, 5000)
    }
    viewAdmin=()=>{
// alert("Hey");
window.location.assign("http://localhost:3000/admin")
    }


    render() {
        return (
            <div >
                <div>

                    <div class="modal fade" id="exampleModalCenter" tabindex="-1" data-keyboard="false" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="ctmHeadingCenter" id="exampleModalLongTitle">Project at a glance!!</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                <p className="ctmHeading">Submitted By:</p>
                                <p className="ctmFontX">AHMED BILAL</p>
                                <p className="ctmFontX">Roll no # 4682 </p>
                                <p className="ctmFontX">MSD Batch #2 - Saylani FSD </p>
                                <hr/>
                                <p className="ctmHeading">Project intro :</p>
                                <p className="ctmFontX">This is a web for a bording college, from someone can get the information about institute in aspect of admission or exams dates, or result report and prospectus as well.</p>
                                <hr/>
                                <p className="ctmHeading">Admin side :</p>
                                <p className="ctmFontX">Fully functional admin side is available/made in this project!</p>
                                <p className="ctmFontX"><Link to="" onClick={this.viewAdmin}>Click here</Link> to visit</p>
                                <p className="ctmFontX">You can find admin link in end footer under copyright tag.</p>
                                <hr/>
                                <p className="ctmHeading">Specifications :</p>
                                <p className="ctmFontX">There is total information about the institute and its sub-campuses is available. It is easy to use. And all the media is stored online clouds.</p>
                                <hr/>
                                <p className="ctmHeading">Data Base : </p>
                                <p className="ctmFontX">MongoDB atlas online cluster is used!</p>
                                <hr/>
                                <p className="ctmHeading">Images  storing : </p>
                                <p className="ctmFontX">Online firebase storage is used!</p>
                                <hr/>
                                <p className="ctmHeading">Styling : </p>
                                <p className="ctmFontX">Bootstrap styling is used!</p>
                                <hr/>
                                <p className="ctmHeading">Front end : </p>
                                <p className="ctmFontX">Based React js</p>
                                <hr/>
                                <p className="ctmHeading">Backend : </p>
                                <p className="ctmFontX">Node js framework</p>

                        
                               </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ProjectInfo;




