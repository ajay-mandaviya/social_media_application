import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, useAuth } from "../auth/authSlice";
import { closeEditModal } from "./userProfileSlice";
const ProfileModal = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [initialUser, setInitialUser] = useState({});
  const { bookmarks } = useSelector((state) => state.post);
  useEffect(() => {
    setInitialUser(user);
  }, [user]);

  return (
    <div className="flex flex-col justify-center items-center z-50 fixed top-0 left-0 w-full h-full post-modal ">
      <div className="max-w-lg bg-gray-100 p-4">
        <div className=" p-2 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div className="text-gray-600 font-semibold">Link</div>
            <div className="ml-6">
              <input
                type={"text"}
                placeholder="Enter a link"
                className="outline-none"
                value={initialUser.userWebsite}
                onChange={(e) =>
                  setInitialUser({
                    ...initialUser,
                    userWebsite: e.target.value,
                  })
                }
              ></input>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-gray-600 font-semibold">Bio</div>
            <div className="w-10/12">
              <textarea
                type={"text"}
                placeholder="Enter a Bio"
                className="outline-none w-full"
                value={initialUser.userBio}
                onChange={(e) =>
                  setInitialUser({ ...initialUser, userBio: e.target.value })
                }
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <button
            className="btn bg-sky-600 py-1 w-full my-2 border-2 rounded-lg border-blue-400 text-white"
            onClick={() => {
              dispatch(updateUser({ ...initialUser, bookmarks: bookmarks }))
                .unwrap()
                .then(() => {
                  toast.success(`Profile Update SuccessFully`);
                  dispatch(closeEditModal());
                })
                .catch((error) => {
                  toast.error("Some thing went wrong");
                });
            }}
          >
            Update
          </button>
          <button
            className="btn bg-white py-1 w-full my-2 border-2 rounded-lg border-blue-400 text-blue-500 ml-2"
            onClick={() => {
              dispatch(closeEditModal());
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
