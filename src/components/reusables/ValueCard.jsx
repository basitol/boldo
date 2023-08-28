import propTypes from "prop-types";

const ValueCard = ({ image, title, reverse, list, list2 }) => {
  return (
    <div className={`value__card ${reverse ? "reverse" : ""}`}>
      <div className="img">
        <img src={image} alt="" />
      </div>

      <div className="content">
        <h2>{title}</h2>

        {list
          ? list.map((item, index) => {
              return (
                <div key={index} className="list">
                  <p>{item}</p>
                </div>
              );
            })
          : list2 &&
            list2.map((item, index) => {
              return (
                <div className="list2" key={index}>
                  <div className="img">
                    <img src={item.image} alt="" />
                  </div>
                  <p>{item.title}</p>
                </div>
              );
            })}
      </div>
    </div>
  );
};

ValueCard.propTypes = {
  title: propTypes.string,
  image: propTypes.string,
  reverse: propTypes.bool,
  list: propTypes.array,
  list2: propTypes.array,
};

export default ValueCard;
