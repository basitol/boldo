import Logo from "../Logo";
import { CustomButton } from "../reusables";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Logo />
        <h2>Boldo</h2>
      </div>

      <div className="nav-links">
        <ul>
          <li>liroduct</li>
          <li>Services</li>
          <li>About</li>
          <li>
            <CustomButton label="Login" small white />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
