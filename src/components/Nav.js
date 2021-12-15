import classes from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.nav__container}>
        <Link style={{textDecoration: 'none', color: 'white'}} to="/hotels">Hotels</Link>
        <Link style={{textDecoration: 'none', color: 'white'}} to="/new">Add new</Link>
      </div>
    </div>
  );
};

export default Nav;
