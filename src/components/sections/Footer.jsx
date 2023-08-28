import Logo from "../Logo";

const Footer = () => {
  return (
    <div className="footer">
      <div className="desc">
        <div className="logo">
          <Logo footer />
          <h2>Boldo</h2>
        </div>

        <div className="text">
          <p>
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
          <p>All rights reserved.</p>
        </div>
      </div>
      <div className="links">
        <div className="link">
          <h3>Landings</h3>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Services</li>
          </ul>
        </div>
        <div className="link">
          <h3>Company</h3>
          <ul>
            <li>Home</li>
            <li>
              <span>Careers</span>
              <span>Hiring!</span>
            </li>
            <li>Services</li>
          </ul>
        </div>
        <div className="link">
          <h3>Resources</h3>
          <ul>
            <li>Blog</li>
            <li>Products</li>
            <li>Services</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
