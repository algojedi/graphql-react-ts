/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import './App.css'
import { MyForm, Values } from './myForm'

const App: React.FC = () => {
  const handleSubmit = ({ email, password } : Values ) => {
    console.log('and the shit is for email and pw: ')
    console.log({ email })
    console.log({ password })
    // TODO: make fetch call here
  }
  return (
    <div className='App'>
      <MyForm onSumbit={handleSubmit} />
    </div>
  )
}

export default App
