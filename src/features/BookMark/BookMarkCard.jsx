import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { removeBookMark } from "../Home/postSlice";

const BookMarkCard = ({ posts }) => {
  const dispatch = useDispatch();
  const { allUsers } = useSelector((state) => state.userProfile);
  const userProfileInfo = allUsers?.find(
    (user) => user.username === posts.username
  );

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

  return (
    <div
      key={posts?._id}
      className="p-2 bg-white divide-y divide-stone-200 rounded-lg my-4	"
    >
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
            <p className="text-sm text-gray-400 ">{posts.username} </p>
            <p className="text-sm text-gray-400 ml-2">
              {`${date.getDate()} ${monthNames[date.getMonth()]}`}
            </p>
          </div>
        </div>
      </div>
      <div className="py-2">
        <p>{posts.content}</p>
      </div>
      <div className="flex items-center py-2">
        <div className="flex justify-between w-1/4	 items-center">
          <div>
            <button onClick={handleRemoveBookMark}>
              <i className="fa-solid fa-bookmark"></i>
            </button>
          </div>
        </div>
        <div className="ml-auto">
          <button>
            coments
            <i className="fa-solid fa-message-quote"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookMarkCard;
