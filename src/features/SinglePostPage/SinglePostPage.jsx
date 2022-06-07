import React, { useEffect, useState } from "react";
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
  // const [singlePost, setSinglePost] = useState(null);
  const [commentData, setCommentText] = useState("");

  useEffect(() => {
    // const post = allPosts.filter((current) => current?._id === id)[0];
    dispatch(getsinglePost(id));
  }, [allPosts, id]);

  return (
    <div>
      {post && <SinglePost posts={post} />}
      {post && (
        <div className="flex justify-between items-center bg-white p-2">
          <img
            className="h-7 w-7 rounded-full"
            src={
              user?.profilePic
                ? `${user?.profilePic}`
                : "https://res.clousdinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png"
            }
            alt="profilePic"
          />

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
