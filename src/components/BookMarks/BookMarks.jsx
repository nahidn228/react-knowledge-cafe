import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const BookMarks = ({ bookMarks }) => {
  return (
    <div className="md: w-1/3 bg-gray-300 rounded-xl p-4">
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
};

export default BookMarks;
