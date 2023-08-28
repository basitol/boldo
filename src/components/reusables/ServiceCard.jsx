import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

const ServiceCard = ({ image, title, text }) => {
  return (
    <div className="servicecard">
      <div className="img-con">
        <img src={image} />
      </div>

      <h2>{title}</h2>

      <p>{text}</p>

      <Link to="#" className="explore-link">
        <span className="text">
          <span>Explore Page</span>
          <span className="icon">
            <BsArrowRightShort />
          </span>
        </span>
      </Link>
    </div>
  );
};

// Prop types for ServiceCard component
ServiceCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ServiceCard;
