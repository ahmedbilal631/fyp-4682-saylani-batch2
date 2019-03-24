import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


//Main pages Routes
import Home from './Pages/home.js';
import About from './Pages/about';
import Contact from './Pages/contact.js';
import ViewMore from './Pages/viewMore.js';
import DetailPage from './Pages/DetailPage.js';


//Admission routes
import SchoolAdmission from './Admission/school.js';
import CollegeAdmission from './Admission/college.js';
import UGAdmission from './Admission/undergratuate.js';
import AdmissionFAQ from './Admission/admissionFAQ.js';
import FeeStructure from './Admission/feeStructure.js';
import Scholarships from './Admission/scholarship.js';
import SamplePaper from './Admission/samplePapers.js';

//Academics rourtes
import Faculty from './Academics/faculty.js';
import Library from './Academics/library.js';
import Labs from './Academics/labs.js';
import AcademicsOther from './Academics/other.js';


//Admin Routes
import AdminLogIn from './Admin/adminLogin.js';
import AdminPage from './Admin/adminPage.js';


//News Routes
import NewsUploader from './Admin/newsFieldManagement/newsUploader.js';
// import NewsDetail from './Pages/newsDetailPage.js';
import NewsManipulation from './Admin/newsFieldManagement/manipulateNews.js';
import NewsEdit from './Admin/newsFieldManagement/newsEdit.js';

//Event Components routes
import EventUploader from './Admin/eventManagement/eventUploader.js';
// import EventDetail from './Pages/eventDetails.js';
import EventManipulation from './Admin/eventManagement/manipulateEvent.js';
import EventEdit from './Admin/eventManagement/editEvents.js';

//Slider
import SlideUploader from './Admin/sliderManagement/slideUploader.js';

//Advertiser
import AdsUploader from './Admin/adsManagement/adsUploader.js';
import LACUploader from './Admin/lifeAtCampusManagement/LACUploader.js';
import LACEdit from './Admin/lifeAtCampusManagement/editLAC.js';
import LACManipulation from './Admin/lifeAtCampusManagement/LACManipulation.js';

//Academics
import ACDUploader from './Admin/academicsManagement/ACDUpload.js';
import UnderConstruction from './Pages/UNDERCONSTRUCTION.js';
import StaticUploader from './Admin/staticManagment/staticUploader.js';
import AdminSignUp from './Admin/signup.js';
import SlideManipulation from './Admin/sliderManagement/sliderManipulator.js';
import SuccessPage from './Pages/successPage.js';
import AdManipulation from './Admin/adsManagement/adManipulation.js';
import AdEdit from './Admin/adsManagement/adEdit.js';
import StaticManipulation from './Admin/staticManagment/staticManipulation.js';
import ProjectInfo from './Pages/projectAtAglance.js';
import AdminManipulation from './Admin/adminManipulation.js';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      

        <Route exact path='/' component={Home} />
        <Route  path='/home' component={Home} />
        <Route  path='/about' component={About} />
        <Route  path='/contact' component={Contact} />
        <Route  path='/detailPage' component={DetailPage} />
        <Route  path='/viewMore' component={ViewMore} />
        <Route  path='/success' component={SuccessPage} />
        <Route path='/underConstructoin' component={UnderConstruction} />
        <Route path='/projectInfo' component={ProjectInfo} />


        {/* <Route path='/newsDetail' component={NewsDetail} />
        <Route path='/eventDetail' component={EventDetail} /> */}


        <Route  path='/adminSignUp' component={AdminSignUp} />
        <Route  path='/admin' component={AdminLogIn} />
        <Route path='/adminPage' component={AdminPage} />
        <Route path='/adminManipulation' component={AdminManipulation} />
      
        <Route path='/schoolAdmission' component={SchoolAdmission} />
        <Route path='/collegeAdmission' component={CollegeAdmission} />
        <Route path='/ugAdmission' component={UGAdmission} />
        <Route path='/fee' component={FeeStructure} />
        <Route path='/scholarship' component={Scholarships} />
        <Route path='/samplePaper' component={SamplePaper} />
        <Route path='/library' component={Library} />
        <Route path='/labs' component={Labs} />
        <Route path='/faculty' component={Faculty} />
        <Route path='/academicsOther' component={AcademicsOther} />
      
      
        <Route path='/newsUploader' component={NewsUploader} />
        <Route path='/newsManipulation' component={NewsManipulation} />
        <Route path='/newsEdit' component={NewsEdit} />
      
      
        <Route path='/eventUploader' component={EventUploader} />
        <Route path='/eventManipulation' component={EventManipulation} />
        <Route path='/eventEdit' component={EventEdit} />


        <Route path='/slideUploader' component={SlideUploader} />
        <Route path='/slideManipulation' component={SlideManipulation} />
      
        
        <Route path='/adUploader' component={AdsUploader} />
        <Route path='/adManipulation' component={AdManipulation} />
        <Route path='/adEdit' component={AdEdit} />
        
        <Route path='/LACUploader' component={LACUploader} />
        <Route path='/LACEdit' component={LACEdit} />
        <Route path='/LACManipulation' component={LACManipulation} />
        
        <Route path='/ACDUploader' component={ACDUploader} />


        <Route path='/staticUploader' component={StaticUploader} />
        <Route path='/staticManipulation' component={StaticManipulation} />



      </div>
      </BrowserRouter>
    );
  }
}

export default App;
