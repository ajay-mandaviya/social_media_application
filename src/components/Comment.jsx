import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../features/auth/authSlice";
import { deleteComment, editComment } from "../features/Home/postSlice";

const Comment = ({ comment, postId }) => {
  const dispatch = useDispatch();
  const { allUsers } = useSelector((state) => state.userProfile);
  const { user, token } = useAuth();
  const postOptionRef = useRef(null);
  const userProfileInfo = allUsers?.find(
    (user) => user.username === comment.username
  );
  const [postOptionVisible, setPostOptionVisible] = useState(false);
  const [isedit, setIsEdit] = useState(false);
  const [editCommentText, setEditCommetText] = useState("");
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  console.log();

  // const date = new Date(posts.createdAt);
  const handleEditPost = () => {
    setPostOptionVisible(!postOptionVisible);
  };
  const handledeleteComment = () => {
    dispatch(deleteComment({ postId, commentId: comment?._id, token }))
      .unwrap()
      .then(() => {
        toast.success(`Comment Deleted`);
        setPostOptionVisible(false);
      })
      .catch((error) => {
        toast.error(`Some thing went wrong `);
      });
  };

  useEffect(() => {
    const handleOutSideClick = (e) => {
      if (
        postOptionVisible &&
        postOptionRef?.current &&
        !postOptionRef?.current?.contains(e.target)
      ) {
        setPostOptionVisible(false);
      }
    };
    document.addEventListener("mousedown", handleOutSideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [postOptionVisible]);

  // postId, commentId, commentData, token
  const handleEditComment = () => {
    dispatch(
      editComment({
        postId,
        commentId: comment?._id,
        commentData: editCommentText,
        token,
      })
    )
      .unwrap()
      .then(() => {
        toast.success(`Comment Edited`);
        setIsEdit(false);
      })
      .catch((error) => {
        toast.error(`Some thing went wrong ${error.message}`);
      });
  };
  return (
    <div className="bg-white divide-y my-4">
      <div className="flex p-2 mb-2">
        <img
          className="h-10 w-10 rounded-full"
          src={
            userProfileInfo?.profilePic
              ? `${userProfileInfo?.profilePic}`
              : "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png"
          }
          alt="profilePic"
        />
        <div className="ml-3 overflow-hidden">
          <p className="text-sm font-bold text-slate-900">
            {userProfileInfo?.firstName} {userProfileInfo?.lastName}
          </p>
          <div className="flex">
            <p className="text-sm text-gray-400 ">
              @ {userProfileInfo?.username}{" "}
            </p>
          </div>
        </div>
        {comment.username === user?.username && (
          <div className="relative ml-auto" ref={postOptionRef}>
            <div className=" cursor-pointer relative" onClick={handleEditPost}>
              <i className="fa-solid fa-ellipsis"></i>
            </div>
            {postOptionVisible && (
              <div className="p-2 bg-white flex flex-col justify-center items-center w-28 z-[2] rounded-lg absolute top-4 right-4 shadow-md	shadow-indigo-500/40">
                <button
                  onClick={() => {
                    setIsEdit(true);
                    setEditCommetText(comment.text);
                  }}
                  className="w-full py-2 px-4 flex items-center text-blue-500 hover:bg-blue-100"
                >
                  <i className="fa-solid fa-square-pen mr-2"></i>
                  Edit
                </button>

                <button
                  onClick={handledeleteComment}
                  className="w-full py-2 px-4 flex items-center text-red-500 hover:bg-red-100 hover:text-red-500"
                >
                  <i className="fa-solid fa-trash-can mr-2 "></i>
                  Delete
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {isedit ? (
        <div className="flex p-2 ml-4 	">
          <input
            value={editCommentText}
            onChange={(e) => setEditCommetText(e.target.value)}
            className="outline-none border-slate-500 border-b-2	flex-1"
          />
          <div className="flex ml-auto">
            <div className="mr-2" onClick={handleEditComment}>
              <i className="fa-regular fa-square-check"></i>
            </div>
            <div
              onClick={() => {
                setIsEdit(false);
                setEditCommetText("");
              }}
            >
              <i className="fa-regular fa-rectangle-xmark"></i>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-2 ml-4">
          <p>{comment.text}</p>
        </div>
      )}
    </div>
  );
};

export { Comment };
