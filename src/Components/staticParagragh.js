import React, { Component } from 'react';
import './main.css';

class Paragraph extends Component {
    
    render() {
        return (
            <div className="">
                <div className="paragraph">
                    <br />
                    <br />
                    <br />
                    <p className="h2 text-center text-light">Why Boarding?</p>
                    <br />
                    <br />
                    <blockquote className="blockquote ">
                        <p className="mb-0 text-center text-light">
                        You know dear parents, your child spends more time in commuting to school than in the Class. 
                    <br />
                        Daily travelling hazardous, fatigue, pollution and energy sapping.
                    <br />
                        Hostel peaceful environment, safe and enjoyable. Safe from media ills.
                    <br />
                    <br />

                       <strong> Remember :</strong> Environmental conditions provide a stimulus to a person cognitive and emotional growth.</p>
                    </blockquote>

                    <br />

                    <br />
                    <br />
                </div>
            </div>
        );
    }
}

export default Paragraph;
