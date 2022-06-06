import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SinglePost } from "../../components";
import { useAuth } from "../auth/authSlice";
import { getUserPostThunk } from "../Home/postSlice";
import { followUser, unfollowUser } from "./userProfileSlice";

export const UsersProfile = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { username } = useParams();
  console.log("username", username);
  const { userPosts, allPosts } = useSelector((state) => state.post);
  const { allUsers, loading } = useSelector((state) => state.userProfile);
  const [singleUser, setSingleUser] = useState({});

  useEffect(() => {
    setSingleUser(allUsers.find((user) => user.username === username));
  }, [allUsers, username]);

  useEffect(() => {
    dispatch(getUserPostThunk(singleUser?.username));
  }, [singleUser, allPosts]);

  const isUserInFollowing = singleUser?.followers?.some(
    (foloUser) => foloUser.username === user.username
  );

  const handleFollow = () => {
    if (isUserInFollowing) {
      dispatch(unfollowUser({ id: singleUser?._id, dispatch }));
    } else {
      dispatch(followUser({ id: singleUser?._id, dispatch }))
        .unwrap()
        .then(({ followUser }) => {
          toast.success(`You start Following ${followUser.username}`);
        })
        .catch(() => {
          toast.error("Some thing went wrong");
        });
    }
  };

  console.log("singleUser", singleUser);
  return (
    <>
      <div className="">
        <div className="bg-white p-4 flex">
          <div>
            <img
              src={singleUser?.profilePic}
              className="w-16 h-16 rounded-full"
            />
          </div>
          <div className="ml-4">
            <div className="flex justify-between  mb-2">
              <div className="">
                <p className="text-sm font-bold text-slate-900">
                  {singleUser?.firstName} {singleUser?.lastName}
                </p>
                <p className="text-sm font-bold text-gray-400">
                  @{singleUser?.username}
                </p>
              </div>
              <button
                disabled={loading}
                className={`px-2 py-1 rounded-md border-2 mb-2 ${
                  loading && "cursor-not-allowed"
                }`}
                onClick={handleFollow}
              >
                {isUserInFollowing ? "UnFollow" : "Follow"}
              </button>
            </div>
            <p className="text-gray-500 font-semibold">{singleUser?.userBio}</p>
            <a
              href={singleUser?.userWebsite}
              className="text-blue-600 hover:underline decoration-1 break-all"
              target="_blank"
            >
              {singleUser?.userWebsite}
            </a>
            <div className=" text-gray-500 font-semibold flex gap-8 my-2 ">
              <div>{userPosts.length} Posts</div>
              <div>{singleUser?.followers?.length} Followers</div>
              <div>{singleUser?.following?.length} Following</div>
            </div>
          </div>
        </div>

        {userPosts.length > 0 ? (
          userPosts?.map((post) => {
            return <SinglePost key={post?._id} posts={post} />;
          })
        ) : (
          <div className="text-center mt-4">
            <p className="font-semibold ">No Post Founds</p>
          </div>
        )}
      </div>
    </>
  );
};
