import React from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../features/auth/authSlice";

export const SuggestFollower = () => {
  // const {user} = useSelector(state => state.)

  const { allUsers } = useSelector((state) => state.userProfile);

  const { user } = useAuth();

  const suggestUserFilter = () => {
    let suggestion;
    suggestion = allUsers.filter(
      (allUser) => allUser.username !== user.username
    );

    return suggestion;
  };

  const suggestUser = suggestUserFilter();

  return (
    <ul
      role="list"
      className=" divide-y bg-white divide-slate-200 sticky top-3 mr-4 w-full mt-4 p-4 "
    >
      <p>Suggestions for you</p>
      {suggestUser.length > 0 ? (
        suggestUser.map((user) => {
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
              <button className="ml-auto">Follow</button>
            </li>
          );
        })
      ) : (
        <p>No Suggestions</p>
      )}
    </ul>
  );
};
