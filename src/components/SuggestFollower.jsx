import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../features/auth/authSlice";
import { followUser } from "../features/profile/userProfileSlice";

export const SuggestFollower = () => {
  const dispatch = useDispatch();
  const { allUsers } = useSelector((state) => state.userProfile);

  const { user } = useAuth();

  const getSuggest = () => {
    let suggestUser = allUsers
      .filter((current) => current.username !== user.username)
      .filter(
        (ele) =>
          !user.following.find((followingUsr) => followingUsr._id === ele._id)
      );
    return suggestUser;
  };
  let suggestion = getSuggest();

  const handleFollow = (id) => {
    dispatch(followUser({ id, dispatch }))
      .unwrap()
      .then(({ followUser }) => {
        toast.success(`You start Following ${followUser.username}`);
      })
      .catch(() => {
        toast.error("Some thing went wrong");
      });
  };
  return (
    <ul
      role="list"
      className=" divide-y bg-white divide-slate-200 sticky top-20 mr-4 w-full mt-4 p-4 "
    >
      <p>Suggestions for you</p>
      {suggestion.length > 0 ? (
        suggestion.slice(0, 4).map((user) => {
          return (
            <li className="flex p-2  bg-white mb-2" key={user._id}>
              <img
                className="h-10 w-10 rounded-full"
                src={
                  user?.profilePic
                    ? `${user?.profilePic}`
                    : "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png"
                }
                alt="suggest"
              />
              <div className="ml-3 overflow-hidden">
                <p className="text-sm font-bold text-slate-900">
                  {user?.firstName} {user?.lastName}
                </p>
                <p className="text-sm text-gray-400 ">{user?.username}</p>
              </div>
              <button
                className="ml-auto"
                onClick={() => {
                  handleFollow(user._id);
                }}
              >
                Follow
              </button>
            </li>
          );
        })
      ) : (
        <p>No Suggestions</p>
      )}
    </ul>
  );
};
