import { Link } from "react-router-dom";
import Nav, { Logo } from "./Navbar.styled";
const Navbar = () => {
  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo to="/">
        <i>{"<Chef-Ali/>"}</i>
        <span>Recipe</span>
      </Logo>
      <div>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="register">Register</Link>
        <Link to="login">Login</Link>
      </div>
    </Nav>
  );
};

export default Navbar;
