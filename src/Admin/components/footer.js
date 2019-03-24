import React, { Component } from 'react';
// import './main.css';
import { Link } from 'react-router-dom';


class AdminFooter extends Component {
    render() {
        return (
            <div>
                <footer className="footer mt-auto py-3b ctmBgWhite">
                <br/>
                    <div className="container">
                        <p className="displayTxt">&copy;ISH2019</p>
                        <p className="displayLinks"> <Link to="#">Terms & Conditions</Link> ||
                    <Link to="#">Feedback & FAQ</Link> ||
                    <Link to="/adminPage">Main page</Link> 
                     </p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default AdminFooter;
