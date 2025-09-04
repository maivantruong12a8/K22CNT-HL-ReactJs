import React from 'react'

export default function MvtFuncComp(MvtProps) {
  return (
    <div className='alert alert-danger'>
        <h2>Function Component Demo</h2>
        <h3>Welcome to, {MvtProps.name} - {MvtProps.age}</h3>
    </div>
  )
}