import PropTypes from "prop-types";
import { logoImage, logoFooter } from "../assets/images"; // Import your logo image

function Logo({ footer }) {
  return (
    <div className="logo-con">
      <img src={footer ? logoFooter : logoImage} alt="Logo" />
    </div>
  );
}

// Prop types for Logo component
Logo.propTypes = {
  footer: PropTypes.bool,
};

export default Logo;
