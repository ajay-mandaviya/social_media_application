import React, { useState } from "react";
import { useSelector } from "react-redux";
import { SinglePost } from "../../components";
import { useAuth } from "../auth/authSlice";
export const Home = () => {
  const { allPosts } = useSelector((state) => state.post);
  const { user } = useAuth();
  const [sortType, setSortType] = useState("");
  const setPost = () => {
    let sortPost = allPosts.filter(
      (currPost) =>
        user.following.find(
          (followingUser) => followingUser.username === currPost.username
        ) || user.username === currPost.username
    );
    if (sortType === "Trending") {
      return (sortPost = sortPost?.sort(
        (a, b) => b.likes.likeCount - a.likes.likeCount
      ));
    }
    if (sortType === "Recent") {
      return (sortPost = sortPost.sort(
        (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
      ));
    }
    return sortPost;
  };
  const homePosts = setPost();
  return (
    <div>
      <div className="flex item-center justify-between">
        <div>
          <button
            onClick={() => setSortType("Trending")}
            className={`p-2 bg-blue-300 text-white ${
              sortType === "Trending" && "bg-blue-500"
            } hover:bg-blue-500 w-full`}
          >
            <i className="fa-solid fa-fire pr-2" /> Trending
          </button>
        </div>
        <div>
          <button
            onClick={() => setSortType("Recent")}
            className={`p-2 bg-blue-300 text-white hover:bg-blue-500 w-full ${
              sortType === "Recent" && "bg-blue-500"
            }`}
          >
            <i className="fa-solid fa-sort pr-2" />
            Recent
          </button>
        </div>
        <div>
          <button
            className="p-2 bg-blue-300 text-white hover:bg-blue-500 w-full"
            onClick={() => setSortType("")}
          >
            Clear
          </button>
        </div>
      </div>

      {homePosts?.length > 0 ? (
        homePosts?.map((post) => {
          return <SinglePost key={post?._id} posts={post} />;
        })
      ) : (
        <p>No Post Avible Start Follow User or Explore </p>
      )}
    </div>
  );
};
