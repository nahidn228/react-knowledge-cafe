import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  console.log(blog);
  const {
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashTags,
  } = blog;
  return (
    <div className="my-20 space-y-4">
      <img
        className="rounded-xl w-fit "
        src={cover}
        alt={`cover picture for ${title}`}
        srcSet=""
      />
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-6">
          <img className="rounded-full w-14" src={author_img} alt="" />
          <div>
            <h4 className="text-lg font-semibold"> {author} </h4>
            <p className="text-gray-500 font-medium text-base">
              {" "}
              {posted_date}
            </p>
          </div>
        </div>
        <div>
          <p className="text-gray-500 font-medium text-base">
            {reading_time} min read
          </p>
        </div>
      </div>
      <h2 className="text-2xl font-semibold">Title : {title}</h2>
      <p className="text-gray-500 font-medium text-base">
        {hashTags.map((hash, idx) => (
          <span key={idx}> {hash}</span>
        ))}
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
