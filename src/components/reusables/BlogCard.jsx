import propTypes from "prop-types";

const BlogCard = ({ image, title, profile, name }) => {
  return (
    <div className="card">
      <div className="img">
        <img src={image} />
      </div>
      <div className="content">
        <div className="category">
          <h3>Category</h3>
          <p>November 22, 2021</p>
        </div>

        <h1>{title}</h1>

        <div className="details">
          <div className="profile">
            <img src={profile} />
          </div>

          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  profile: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
};

export default BlogCard;
