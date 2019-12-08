import React, { Component } from 'react';

import NotesContainer from "../../Events/Notes/NotesContainer";

class ClassesContainer extends Component {
    state = {
        SubSection: [
            { heading: 'Available Courses',
                Notes: [
                    { title: 'CS 3370', text: 'Advanced C++ Programming - Professor Allison - 3 Credits - M W: 4:00 PM - 5:15 PM\n'},
                    { title: 'CS 3380', text: 'Advanced Javascript Programming - Professor Wagstaff - 3 Credits - T TH: 4:00 PM - 5:15 PM\n'},
                    { title: 'CS 3410', text: 'Human Factors in Software Development - Dr. Anderson - 3 Credits - T TH: 2:30 PM -3:45 PM\n'},
                    { title: 'CS 3520', text: 'Database Theory - Professor Jolly - 3 Credits - T TH: 4:00 PM - 5:15 PM\n'},
                    { title: 'CS 4380', text: 'Advanced High Performance Computer Architecture - Professor Allison - 3 Credits - M W: 10:00 AM - 11:15 AM\n'},
                    { title: 'CS 4470', text: 'Artificial Intelligence - Professor Jensen - 3 Credits - M W: 1:00 PM - 2:15 PM\n'},
                ]},
            ],
    };
    selected = {
        AddBtnDisplay: false,
        hasModal: false,
        SubSection: [
            { heading: 'Selected Courses',
                Notes: [
                    { title: 'CS 2450', text: 'Software Engineering - Professor Ling - 3 Credits - T Th: 10:00 AM - 11:15 AM\n'},
                    { title: 'ECE 3710', text: 'Engineering Analysis - Professor Knadler - 3 Credits - M W: 11:00 AM - 12:15 PM\n'},
                ]
            }],
    };

    render() {

        return(
          <div className={'courses-container'}>
              <NotesContainer state={this.state}/>
              <NotesContainer state={this.selected}/>
          </div>


        )
    }
}

export default ClassesContainer;