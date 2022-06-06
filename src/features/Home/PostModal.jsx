import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, setPostEdit, setPostText } from "./PostModaSlice";
import { createPostThunk, editUserPostThunk } from "./postSlice";

export const PostModal = () => {
  const dispatch = useDispatch();
  const { post, isPostEdit } = useSelector((state) => state.postModal);
  console.log("post content d", post.content);
  const { loading } = useSelector((state) => state.post);
  const handlePostChange = (e) => {
    dispatch(setPostText({ ...post, content: e.target.value }));
  };
  const handlePost = () => {
    if (isPostEdit) {
      dispatch(editUserPostThunk(post))
        .unwrap()
        .then(() => {
          toast.success(`Post Edit SuccessFully`);
          dispatch(
            setPostEdit({
              isEditing: false,
              post: {},
            })
          );
        })
        .catch(() => {
          toast.error("Some thing went wrong");
        });
    } else {
      dispatch(createPostThunk(post))
        .unwrap()
        .then(() => {
          toast.success(`Post Create SuccessFully`);
          dispatch(setPostText({}));
          dispatch(closeModal());
        })
        .catch(() => {
          toast.error("Some thing went wrong");
        });
    }
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
    dispatch(setPostText({}));
  };

  return (
    <div className="flex flex-col justify-center items-center z-50 fixed top-0 left-0 w-full h-full post-modal">
      <div className="max-w-lg bg-white p-4">
        <div className="rounded-lg border-2 border-blue-400 p-2">
          <textarea
            maxLength={200}
            placeholder="What's your on Mind"
            className="outline-none resize-none h-32"
            onChange={handlePostChange}
            value={post.content ? post.content : ""}
          ></textarea>
        </div>
        <div className="flex items-center">
          <button
            disabled={loading}
            className="btn bg-sky-600 py-1 w-full my-2 border-2 rounded-lg border-blue-400 text-white"
            onClick={handlePost}
          >
            {isPostEdit ? "Edit Post" : "Add Post"}
          </button>
          <button
            className="btn bg-white py-1 w-full my-2 border-2 rounded-lg border-blue-400 text-blue-500 ml-2 "
            onClick={handleCloseModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
