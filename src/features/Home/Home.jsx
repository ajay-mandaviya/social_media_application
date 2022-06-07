import React from "react";
import { useSelector } from "react-redux";
import { SinglePost } from "../../components";
import { PostModal } from "./PostModal";

export const Home = () => {
  const { allPosts } = useSelector((state) => state.post);
  return (
    <div>
      {allPosts?.map((post) => {
        return <SinglePost key={post?._id} posts={post} />;
      })}
    </div>
  );
};
