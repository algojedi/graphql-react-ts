/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import { Header } from './components/header/header'
import { MyForm, Values } from './myForm'
import { About } from './pages/about/about'
import { useRegister } from './hooks/useRegister'
import { useLogin } from './hooks/useLogin'

const App: React.FC = () => {
  const [user, setUser] = useState('')
  const registerUser = useRegister()
  const loginUser = useLogin()

  const handleRegisterSubmit = ({ email, password }: Values) => {
    // TODO: need validation
    registerUser({ variables: { email, password} })
    // set user according to success 
  }
  const handleLoginSubmit = async ({ email, password }: Values) => {

    const response = await loginUser({ variables: { email, password }})
    console.log({ response })
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
