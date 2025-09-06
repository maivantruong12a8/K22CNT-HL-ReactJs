import React, { Component } from 'react';
import mvtFuncComp from './components/mvtFuncComp';
import mvtClassComp from './components/mvtClassComp';
import mvtRenderList from './components/mvtRenderList';
import mvtListStudent from './components/mvtListStudent';

class MvtApp extends Component {
  constructor(props){
    super(props);
    this.state = {
            students: [
                { id: 1, name: "Nguyễn Văn A", age: 20, gender: "Nam", isActive: true },
                { id: 2, name: "Trần Thị B", age: 21, gender: "Nữ", isActive: true },
                { id: 3, name: "Lê Văn C", age: 22, gender: "Nam", isActive: false },
                { id: 4, name: "Phạm Thị D", age: 19, gender: "Nữ", isActive: true },
                { id: 5, name: "Hoàng Văn E", age: 23, gender: "Nam", isActive: false }
            ],
        }
  }
  render() {
    return (
      <div className='container border'>
        <h1>Mai văn trường</h1>
        <h2>Ôn tập: conponent / props / state / Render ListKey</h2>
        <hr/>
        <mvtFuncComp />
        <hr/>
        <mvtFuncComp fullName="mai trường" address="FitNTU" email="maitruong@gmail.com"></mvtFuncComp>

        <mvtClassComp />
        <mvtClassComp name="trường" age="21" phone = "0346952572" email="maitruong@gmaill.com"></mvtClassComp>

        <hr/>
        <mvtRenderList />
        <hr/>
        <mvtListStudent students = {this.state.students} />
      </div>
    );
  }
}

export default MvtApp;