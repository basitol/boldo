import { blogData } from "../../assets/data";
import { BlogCard, CustomButton } from "../reusables";

const Blogs = () => {
  return (
    <div className="blog">
      <div className="content">
        <div className="top">
          <p>Our Blog</p>

          <h1>Value proposition accelerator product management venture</h1>
        </div>

        <div className="cards">
          {blogData.map((item, index) => (
            <BlogCard key={index} {...item} />
          ))}
        </div>

        <div className="button">
          <CustomButton label="Load More" className={"btn-custom"} />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
