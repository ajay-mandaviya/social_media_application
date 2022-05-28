import React from "react";

export const SinglePost = ({ post }) => {


  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    const date = new Date(post.createdAt)


  return (
    <div className="p-2 bg-white divide-y divide-stone-200 rounded-lg my-4	">
      <div className="flex p-2 mb-2">
        <img
          className="h-10 w-10 rounded-full"
          src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png"
          alt=""
        />
        <div className="ml-3 overflow-hidden">
          <p className="text-sm font-bold text-slate-900">{post.username}</p>
          <div className="flex">
            <p className="text-sm text-gray-400 ">ajay!123 </p>
            <p className="text-sm text-gray-400 ml-2"> {`${date.getDate()} ${ monthNames[date.getMonth()]}`}</p>
          </div>
        </div>
        <div className="ml-auto cursor-pointer">
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      </div>

      <div className="py-2">
        <p>{post.content}</p>
      </div>
      <div className="flex items-center py-2">
        <div className="flex justify-between w-1/4	 items-center">
          <div>
            <button>
              <i className="fa-solid fa-heart"></i> {post.likes.likeCount}
            </button>
          </div>
          <div>
            <button>
              {/* <i class="fa-solid fa-bookmark"></i> */}
              <i className="fa-regular fa-bookmark"></i>
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
