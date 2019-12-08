import React, { Component } from 'react';

import NotesContainer from "../../Events/Notes/NotesContainer";

class SignUpContainer extends Component {
    state = {
        Heading: 'Current Plans',
        HeadingBtnText: 'Add Course',
        AddBtnText: 'Add Course',
        AddModalText: 'Course',
        AddBtnDisplay: true,
        hasModal: true,
        SubSection: [
            { heading: 'Planned Courses',
                Notes: [
                    { title: 'CS 3380', text: 'Advanced Javascript Programming - Professor Wagstaff - 3 Credits - T TH: 4:00 PM - 5:15 PM\n'},
                    { title: 'CS 3410', text: 'Human Factors in Software Development - Dr. Anderson - 3 Credits - T TH: 2:30 PM -3:45 PM\n'},
                ]},
            { heading: 'Plan Alternatives',
                Notes: [
                    { title: 'CS 3520', text: 'Database Theory - Professor Jolly - 3 Credits - T TH: 4:00 PM - 5:15 PM\n'},
                ]
            }],
        Notes: [
            { title: 'Happy Registering!', text: 'Tip: If you need help choosing classes, you have your adviser help you out!'},
        ],
    };

    render() {
        return(
                <NotesContainer state={this.state}/>
        )
    }
}

export default SignUpContainer;
