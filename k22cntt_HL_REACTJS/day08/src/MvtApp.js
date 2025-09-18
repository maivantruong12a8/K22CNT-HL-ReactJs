import React from 'react'
import MvtUseState from './components/MvtUseState'
import MvtListStudent from './components/MvtListStudent'
import MvtUseEffectDemo from './components/MvtUseEffectDemo'
import MvtExampleContext from './components/MvtExampleContext'

export default function MvtApp() {
  return (
    <div className='container border'>
        <h1>React Hook - Demo [Trịnh Văn Chung]</h1>
        <hr/>

        <MvtUseState />

        <MvtListStudent />

        <MvtUseEffectDemo /> 

        <MvtExampleContext />
    </div>
  )
}