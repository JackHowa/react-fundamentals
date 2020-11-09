// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useRef, useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  const [isError, setError] = useState('Type something')
  const usernameRef = useRef('')
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitUsername(usernameRef.current.value)
  }

  const isLowerCase = (string) => string === string.toLowerCase();

  const handleChange = (event) => {
    const newUsernameValue = event.target.value;
    if (!isLowerCase(newUsernameValue)) {
      setError('Username must be lower case')
    } else if (!newUsernameValue) {
      setError('Type something')
    } else {
      setError(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input onChange={handleChange} ref={usernameRef} id="username" type="text" />
        {isError && <p role="alert">{isError}</p>}
      </div>
      <button disabled={isError} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
