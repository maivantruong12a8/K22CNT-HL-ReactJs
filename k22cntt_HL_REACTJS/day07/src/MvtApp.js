import React from 'react'
import MvtUseState from './components/MvtUseState'
import MvtListStudent from './components/MvtListStudent'

export default function MvtApp() {
  return (
    <div className='container border'>
        <h1>React Hook - Demo [Mai Văn Trường ]</h1>
        <hr/>

        <MvtUseState />

        <MvtListStudent />
    </div>
  )
}