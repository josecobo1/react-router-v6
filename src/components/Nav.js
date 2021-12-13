import classes from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className={classes.nav}>
      <Link to="/hotels">Hotels</Link>
      <Link to="/new">Add new</Link>
    </div>
  );
};

export default Nav;
