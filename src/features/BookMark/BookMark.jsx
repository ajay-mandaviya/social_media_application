import React from "react";
import { useSelector } from "react-redux";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import BookMarkCard from "./BookMarkCard";
export const BookMark = () => {
  const { bookmarks } = useSelector((state) => state.post);
  useDocumentTitle("BookMark");
  return (
    <div>
      {bookmarks.length > 0 ? (
        bookmarks?.map((posts) => {
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
