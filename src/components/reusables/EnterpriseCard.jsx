import PropTypes from "prop-types"; // Import PropTypes

const EnterpriseCard = ({ title, name, position, company, image }) => {
  return (
    <div className="testimonial__card">
      <h2>{title}</h2>

      <div className="author">
        <div>
          <img src={image} alt={`${name}'s Profile`} />{" "}
          {/* Added alt attribute */}
        </div>
        <div className="details">
          <h2>{name}</h2>
          <div className="company">
            <h3>{company}</h3>
            <h3> @ </h3>
            <h3>{position}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

EnterpriseCard.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default EnterpriseCard;
