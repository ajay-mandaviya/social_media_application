import React from "react";
import { useSelector } from "react-redux";
import BookMarkCard from "./BookMarkCard";
export const BookMark = () => {
  const { bookMark } = useSelector((state) => state.post);
  return (
    <div>
      {bookMark.length > 0 ? (
        bookMark?.map((posts) => {
          return <BookMarkCard key={posts?._id} posts={posts} />;
        })
      ) : (
        <div className="text-center mt-4">
          <p>No Post Into BookMarks</p>
        </div>
      )}
    </div>
  );
};
