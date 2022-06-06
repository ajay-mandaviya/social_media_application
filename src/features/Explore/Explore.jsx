import React from "react";
import { useSelector } from "react-redux";
import { SinglePost } from "../../components";

export const Explore = () => {
  const { allPosts } = useSelector((state) => state.post);

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
