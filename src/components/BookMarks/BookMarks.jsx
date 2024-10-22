import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const BookMarks = ({ bookMarks, readingTime }) => {
  return (
    <div className="md: w-1/3 bg-gray-300 rounded-xl p-4">
      <div className="text-center border-b-2">
        <h3 className="text-lg font-semibold">Reading Time : {readingTime} </h3>

      </div>
      <h2 className="text-lg font-semibold text-center">
        Bookmarked Blogs: {bookMarks.length}
      </h2>
      {bookMarks.map((bookMark) => (
        <Bookmark key={bookMark.id} bookMark={bookMark}></Bookmark>
      ))}
    </div>
  );
};

BookMarks.propTypes = {
  bookMarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default BookMarks;
