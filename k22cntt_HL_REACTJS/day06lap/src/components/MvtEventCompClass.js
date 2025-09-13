import React, { Component } from 'react';

class MvtEventCompClass extends Component {

    Mvt_Func1 = ()=>{
        alert("Hàm không có tham số")
    }

    Mvt_Func2 = (param)=>{
        alert("Hàm có tham số:\n"+ param)
    }

    render() {
        return (
            <div>
                <h2>Event in class component</h2>
                <button onClick={this.Mvt_Func1}>Click</button>
                <button onClick={()=>this.Mvt_Func2("mai văn trường")}>Click Param</button>
            </div>
        );
    }
}

export default MvtEventCompClass;