import { EnterpriseCard } from "../reusables";
import { enterpriseData } from "../../assets/data";

const Enterprise = () => {
  return (
    <div className="testimonial">
      <div className="content">
        <h1>
          An enterprise template to ramp
          <br />
          up your company website
        </h1>

        <div className="cards">
          {enterpriseData.map((item, index) => (
            <EnterpriseCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Enterprise;
