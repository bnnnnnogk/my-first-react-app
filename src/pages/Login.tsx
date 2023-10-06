import { FormEvent, useState } from 'react'
import classes from './Login.module.css'

const Login = () => {
  const { login } = useAuth()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await login(username, password)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form className={classes.loginForm} onSubmit={handleSubmit}>
      <label>Username:</label>
      <input type="text" />

      <label>Password:</label>
      <input type="Password" />

      <input type="submit" value="Login" />
    </form>
  )
}

export default Login
