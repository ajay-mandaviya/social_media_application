import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SinglePost } from "../../components";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useAuth } from "../auth/authSlice";
import { getUserPostThunk } from "../Home/postSlice";
import ProfileModal from "./ProfileModal";
import { openEditModal } from "./userProfileSlice";
export const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { userPosts, allPosts } = useSelector((state) => state.post);
  const { isModalOpen, allUsers } = useSelector((state) => state.userProfile);
  useEffect(() => {
    dispatch(getUserPostThunk(user?.username));
  }, [allPosts, allUsers]);

  useDocumentTitle(`${user?.firstName} ${user?.lastName}`);

  return (
    <>
      <div className="">
        <div className="bg-white p-4 flex">
          <div>
            {user?.profilePic ? (
              <img src={user?.profilePic} className="w-16 h-16 rounded-full" />
            ) : (
              <div className="w-16 h-16  text-xl flex items-center justify-center font-semibold rounded-full bg-blue-400 text-white">
                {user?.firstName[0]?.toUpperCase()}
              </div>
            )}
          </div>
          <div className="ml-4">
            <div className="flex justify-between  mb-2">
              <div className="">
                <p className="text-sm font-bold text-slate-900">
                  {user?.firstName} {user?.lastName}
                </p>
                <p className="text-sm font-bold text-gray-400">
                  @{user?.username}
                </p>
              </div>
              <button
                className="px-2 py-1 rounded-md border-2 mb-2"
                onClick={() => {
                  dispatch(openEditModal());
                }}
              >
                Edit
              </button>
            </div>
            <p className="text-gray-500 font-semibold">{user.userBio}</p>
            <a
              href={user.userWebsite}
              className="text-blue-600 hover:underline decoration-1 break-all"
              target="_blank"
            >
              {user.userWebsite}
            </a>
            <div className=" text-gray-500 font-semibold flex gap-8 my-2 ">
              <div>{userPosts.length} Posts</div>
              <div>{user.followers.length} Followers</div>
              <div>{user.following.length} Following</div>
            </div>
          </div>
        </div>

        {userPosts?.map((post) => {
          return <SinglePost key={post?._id} posts={post} />;
        })}
      </div>
      {isModalOpen && <ProfileModal />}
    </>
  );
};
