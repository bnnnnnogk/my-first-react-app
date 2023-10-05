import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div>
        <NavLink to="/"></NavLink>
        <p>Navbar</p>
      </div>
      <div>
        <NavLink to="/profile"></NavLink>
        <button className={classes.login}>Login</button>
      </div>
    </nav>
  )
}
export default Navbar
