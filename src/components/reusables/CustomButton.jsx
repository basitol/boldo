import PropTypes from "prop-types";

function CustomButton({
  label,
  onClick,
  small,
  white,
  green,
  transparent,
  className,
}) {
  const buttonClasses = `btn ${className} ${
    white ? "white" : green ? "green" : transparent ? "transparent" : ""
  } ${small ? "btn-small" : "btn-large"}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {label}
    </button>
  );
}

// Prop types for CustomButton component
CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  small: PropTypes.bool,
  white: PropTypes.bool,
  green: PropTypes.bool,
  transparent: PropTypes.bool,
  className: PropTypes.string,
};

export default CustomButton;
