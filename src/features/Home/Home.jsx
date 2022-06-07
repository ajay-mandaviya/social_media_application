import React from "react";
import { useSelector } from "react-redux";
import { SinglePost } from "../../components";
import { useAuth } from "../auth/authSlice";
export const Home = () => {
  const { allPosts } = useSelector((state) => state.post);
  const { user } = useAuth();
  const setPost = () => {
    return allPosts.filter(
      (currPost) =>
        user.following.find(
          (followingUser) => followingUser.username === currPost.username
        ) || user.username === currPost.username
    );
  };

  const homePosts = setPost();
  console.log("homePosts", homePosts);

  return (
    <div>
      {homePosts.length > 0 ? (
        homePosts?.map((post) => {
          return <SinglePost key={post?._id} posts={post} />;
        })
      ) : (
        <p>No Post Avible Start Follw User or Explore </p>
      )}
    </div>
  );
};
