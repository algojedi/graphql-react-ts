/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import { Header } from './components/header/header'
import { MyForm, Values } from './myForm'
import { About } from './pages/about/about'
import { useRegister } from './hooks/useRegister'

const App: React.FC = () => {
  const [user, setUser] = useState('')
  const registerUser = useRegister()

  const handleRegisterSubmit = ({ email, password }: Values) => {
    // TODO: need validation
    registerUser({ variables: { email, password} })
    // set user according to success 
  }
  const handleLoginSubmit = ({ email, password }: Values) => {
    setUser(email)
    // TODO: make fetch call here
    // set user according to success 
  }
  return (
      <Router>
        <div className='App'>
          <Header user={user} />
          <Switch>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/login'>
              <MyForm name='LOGIN' onSumbit={handleLoginSubmit} />
            </Route>
            <Route path='/'>
              <MyForm name='REGISTER' onSumbit={handleRegisterSubmit} />
            </Route>
          </Switch>
        </div>
      </Router>
  )
}

export default App
