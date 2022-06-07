import React from "react";
import { useSelector } from "react-redux";
import { SinglePost } from "../../components";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export const Explore = () => {
  const { allPosts } = useSelector((state) => state.post);

  useDocumentTitle("Explore");

  return (
    <div>
      {allPosts.length > 0 ? (
        allPosts?.map((post) => {
          return <SinglePost key={post?._id} posts={post} />;
        })
      ) : (
        <p>No Post Avible Start Follow User </p>
      )}
    </div>
  );
};
