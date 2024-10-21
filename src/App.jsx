import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import Header from "./components/Header/Header";

function App() {
  const [bookMarks, setBookMarks] = useState([]);

  const handleAddToBookmarks = (blog) => {
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks);
  };

  return (
    <>
      <Header></Header>
      <div className="flex max-w-screen-xl mx-auto gap-8">
        <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
        <BookMarks bookMarks={bookMarks}></BookMarks>
      </div>
    </>
  );
}

export default App;
