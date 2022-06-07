import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../features/auth/authSlice";
import { setPostEdit } from "../features/Home/PostModaSlice";
import {
  deletePostThunk,
  dislikeUserPost,
  likeUserPost,
} from "../features/Home/postSlice";
import { addBookMark, removeBookMark } from "../features/Home/postSlice";

export const SinglePost = ({ posts }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { user } = useAuth();
  const postOptionRef = useRef(null);
  const [postOptionVisible, setPostOptionVisible] = useState(false);

  const { allUsers } = useSelector((state) => state.userProfile);
  const { bookmarks } = useSelector((state) => state.post);
  const {
    likes: { likedBy },
  } = posts;

  const isPostLike = likedBy?.some((like) => like?.username === user.username);

  const userProfileInfo = allUsers?.find(
    (user) => user.username === posts.username
  );

  const isInBookMark = bookmarks?.some(
    (bookpost) => bookpost?._id === posts?._id
  );

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
  const date = new Date(posts.createdAt);

  const handleEditPost = () => {
    setPostOptionVisible(!postOptionVisible);
  };

  const deletePost = () => {
    dispatch(deletePostThunk(posts._id));
    if (pathname.includes("post")) {
      navigate("/");
    }
  };

  const editPost = () => {
    dispatch(
      setPostEdit({
        isEditing: true,
        post: posts,
      })
    );
  };

  const handleLike = () => {
    dispatch(likeUserPost(posts?._id));
  };

  const handleremoveLike = () => {
    dispatch(dislikeUserPost(posts?._id));
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

  const handleAddBookMark = () => {
    dispatch(addBookMark(posts?._id))
      .unwrap()
      .then(() => {
        toast.success(`Post BookMark SuccessFully`);
      })
      .catch((error) => {
        toast.error("Some thing went wrong");
      });
  };
  const handleRemoveBookMark = () => {
    dispatch(removeBookMark(posts?._id))
      .unwrap()
      .then(() => {
        toast.success(`Post Remove BookMark SuccessFully`);
      })
      .catch((error) => {
        toast.error("Some thing went wrong");
      });
  };

  return (
    <div className="p-2 bg-white divide-y divide-stone-200 rounded-lg my-4	">
      <div className="flex p-2 mb-2">
        {userProfileInfo?.profilePic ? (
          <img
            src={userProfileInfo?.profilePic}
            alt={`${userProfileInfo?.username}`}
            className="w-10 h-10 rounded-full"
          />
        ) : (
          <div className="w-10 h-10  text-xl flex items-center justify-center font-semibold rounded-full bg-blue-400 text-white">
            {user?.firstName[0]?.toUpperCase()}
          </div>
        )}

        {/* <img
          className="h-10 w-10 rounded-full"
          src={
            userProfileInfo?.profilePic
              ? `${userProfileInfo?.profilePic}`
              : "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png"
          }
          alt="profilePic"
        /> */}
        <div
          className="ml-3 overflow-hidden cursor-default"
          onClick={() =>
            user.username === userProfileInfo?.username
              ? navigate("/profile")
              : navigate(`/user/${userProfileInfo?.username}`)
          }
        >
          <p className="text-sm font-bold text-slate-900">
            {userProfileInfo?.firstName} {userProfileInfo?.lastName}
          </p>
          <div className="flex">
            <p className="text-sm text-gray-400 ">@{posts.username} </p>
            <p className="text-sm text-gray-400 ml-2">
              {" "}
              {`${date.getDate()} ${monthNames[date.getMonth()]}`}
            </p>
          </div>
        </div>

        {user.username === posts?.username && (
          <div className="relative ml-auto" ref={postOptionRef}>
            <div className=" cursor-pointer relative" onClick={handleEditPost}>
              <i className="fa-solid fa-ellipsis"></i>
            </div>
            {postOptionVisible && (
              <div className="p-2 bg-white flex flex-col justify-center items-center w-28 z-[2] rounded-lg absolute top-4 right-4 shadow-md	shadow-indigo-500/40">
                <button
                  onClick={editPost}
                  className="w-full py-2 px-4 flex items-center text-blue-500 hover:bg-blue-100"
                >
                  <i className="fa-solid fa-square-pen mr-2"></i>
                  Edit
                </button>

                <button
                  onClick={deletePost}
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
      <Link to={`/post/${posts._id}`} className="py-2 cursor-default">
        <p>{posts.content}</p>
      </Link>
      <div className="flex items-center">
        <div className="flex justify-between w-1/4	 items-center">
          <div>
            {isPostLike ? (
              <button onClick={handleremoveLike}>
                <i className="fa-solid fa-heart"></i>{" "}
                {posts.likes.likeCount === 0 ? "" : posts.likes.likeCount}
              </button>
            ) : (
              <button onClick={handleLike}>
                <i className="fa-regular fa-heart"></i>
                {posts.likes.likeCount === 0 ? "" : posts.likes.likeCount}
              </button>
            )}
          </div>
          <div>
            {isInBookMark ? (
              <button onClick={handleRemoveBookMark}>
                <i className="fa-solid fa-bookmark"></i>
              </button>
            ) : (
              <button onClick={handleAddBookMark}>
                <i className="fa-regular fa-bookmark"></i>
              </button>
            )}
          </div>
        </div>

        <Link to={`/post/${posts._id}`} className="py-2 cursor-default ml-auto">
          <i className="fa-regular fa-comment-dots"></i>
        </Link>
      </div>
    </div>
  );
};
