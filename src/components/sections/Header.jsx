import Navbar from "./Navbar";
import { CustomButton } from "../reusables";
import { heroGraphics, hero, logos } from "../../assets/images";

function Header() {
  return (
    <header className="header">
      <Navbar />
      <img className="hero" src={hero} />

      {/* Content Section */}
      <div className="header-content">
        <div className="textButtons">
          <h1>Save time by building fast with Boldo Template</h1>
          <p>
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>

          <div className="buttons">
            <CustomButton label="Buy template" green />
            <CustomButton label="Explore" transparent />
          </div>
        </div>

        <div className="imageSection">
          {/* Insert your images here */}
          <img src={heroGraphics} alt="Image 1" />
        </div>
      </div>

      <div className="header-logos">
        <img src={logos} />
      </div>
    </header>
  );
}

export default Header;
