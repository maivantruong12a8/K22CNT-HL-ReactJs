import React, { Component } from 'react';
import MvtEventComp from './components/MvtEventComp';
import MvtEventCompClass from './components/MvtEventCompClass';
import MvtEventForm1 from './components/MvtEventForm1';
import MvtEventForm2 from './components/MvtEventForm2';

class MvtApp extends Component {
  render() {
    return (
       <div className='container border'>
          <h1 className='text-center'> mai văn trường <br/>ReactJs - Form - Event</h1>
          <hr/>

          <MvtEventComp />

          <MvtEventCompClass />

          <MvtEventForm1 />

          <MvtEventForm2 />
      </div>
    );
  }
}

export default MvtApp;