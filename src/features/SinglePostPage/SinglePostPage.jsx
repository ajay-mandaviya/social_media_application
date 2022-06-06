import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SinglePost, Comment } from "../../components";
import { addComment, getsinglePost } from "../Home/postSlice";
import { useAuth } from "../auth/authSlice";
import toast from "react-hot-toast";
export const SinglePostPage = () => {
  const dispatch = useDispatch();
  const { allPosts, post } = useSelector((state) => state.post);
  const { id } = useParams();
  const { user, token } = useAuth();
  const [commentData, setCommentText] = useState("");

  useEffect(() => {
    dispatch(getsinglePost(id));
  }, [allPosts, id]);

  return (
    <div>
      {post && <SinglePost posts={post} />}
      {post && (
        <div className="flex justify-between items-center bg-white p-2">
          {user?.profilePic ? (
            <img src={user?.profilePic} className="w-7 h-7 rounded-full" />
          ) : (
            <div className="w-7 h-7  text-xl flex items-center justify-center font-semibold rounded-full bg-blue-400 text-white">
              {user?.firstName[0]?.toUpperCase()}
            </div>
          )}
          <input
            onChange={(e) => setCommentText(e.target.value)}
            value={commentData}
            placeholder="Write Your Comment"
            className="flex-grow ml-2 mr-2 outline-none"
          />

          <button
            onClick={() => {
              dispatch(
                addComment({
                  postId: id,
                  commentData,
                  token,
                })
              )
                .unwrap()
                .then(() => {
                  toast.success(`Comment Added`);
                  setCommentText("");
                })
                .catch((error) => {
                  toast.error(`Some thing went wrong`);
                });
            }}
          >
            Post
          </button>
        </div>
      )}
      {post &&
        post?.comments &&
        post?.comments.map((comment, index) => {
          return <Comment key={index} comment={comment} postId={id} />;
        })}
    </div>
  );
};
