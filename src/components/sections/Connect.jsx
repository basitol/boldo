import { connectImage } from "../../assets/images";

const Connect = () => {
  return (
    <div className="connect">
      <div>
        <img src={connectImage} />
      </div>

      <div className="content">
        <div className="main">
          <h2>
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h2>
        </div>

        <div className="modals">
          <div className="modal">
            <h3>We connect our customers with the best.</h3>

            <div className="line"></div>
          </div>
          <div>
            <h3>Android research & development rockstar?</h3>

            <div className="line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
