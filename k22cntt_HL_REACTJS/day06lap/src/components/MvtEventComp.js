import React from 'react'

export default function MvtEventComp() {

    const Mvt_Func1 = ()=>{
        alert("Xin chào")
    }
    const Mvt_Func2 = (param)=>{
        alert(param)
    }
    return (
        <div>
        <h1>Event - Component Function</h1>
            <button onClick={Mvt_Func1}>Click Here</button>
            
            {/* gọi lần đầu tiên và duy nhất khi load */}
            {/* <button onClick={mvt_Func1()}>Click Here</button>ss */}

            {/* gọi hàm có tham số */}
            <button onClick={()=>Mvt_Func2('mai trường')}>Click Here Param</button>

        </div>
    )
}