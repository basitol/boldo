import { ctaImage } from "../../assets/images";
import { CustomButton } from "../reusables";

const CallToAction = () => {
  return (
    <div className="cta">
      <div className="cta-bg">
        <img src={ctaImage} />
      </div>
      <div className="content">
        <h2>An enterprise template to ramp up your company website</h2>

        <div className="form">
          <input placeholder="Enter email address" />
          <CustomButton green label="Start now" />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
