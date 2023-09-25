import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState(" ")
  const [password, setPassword] = useState(" ")

  const handleNameChange = event => {
    setName(event.target.value)
    console.log(name)
  }

  const handlePasswordChange = event => {
    setPassword(event.target.value)
    console.log(name)
  }

  /*useEffect(() => {
    console.log(name)
  }, [name])*/

  const handleSubmitForm = (event) => {
    event.preventDefault()
    alert("name" + name + password)
    setName("")
    setPassword("")
  }

  return (
    <>
    <h1>Login:</h1>
      <form onSubmit={handleSubmitForm}>
        <div>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleNameChange}/>
        </label>
        </div>
        <div>
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
        </label>
        </div>
        <input type="submit" value="Potvrdi" />
      </form>
    </>
  )
}
export default App
