import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, handleBookmark, handleReadTime }) => {
  const {
    title,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  // console.log(handleBookmark);
  return (
    <>
      <div className="px-4">
        <img
          className="w-full mb-8"
          src={cover}
          alt={`Cover picture ${title}`}
        />
        <div className="flex justify-between mb-4 items-center">
          <div className="flex gap-5 items-center">
            <img className="w-20" src={author_img} alt="" />
            <div>
              <h2 className="text-2xl font-bold">{author}</h2>
              <p>{posted_date}</p>
            </div>
          </div>
          <div>
            <p>
              {reading_time} min read{" "}
              <button onClick={() => handleBookmark(blog)}>
                <FaBookmark />
              </button>
            </p>
          </div>
        </div>
        <h2 className="text-4xl font-bold my-4">{title}</h2>
        <div>
          {hashtags.map((hash, indx) => (
            <p className="inline mx-2 my-2" key={indx}>
              #{hash}
            </p>
          ))}
        </div>
        <button
          onClick={() => handleReadTime(reading_time)}
          className="underline text-[#6047EC] mx-2 my-6"
        >
          <span>Mark as Read</span>
        </button>
      </div>
    </>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmark: PropTypes.func.isRequired,
  handleReadTime: PropTypes.func.isRequired,
};
export default Blog;
