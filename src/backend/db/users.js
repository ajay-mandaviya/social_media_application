import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    profilePic:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png",
    password: "adarshBalika123",
    userBio: "this is adarshbalika you can find me every where as guest",
    userWebsite: "https://adarshbalika.netlify.app",

    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "ajay",
    lastName: "mandaviya",
    username: "ajay",
    password: "ajay123",
    userBio: "this is adarshbalika you can find me every where as guest",
    userWebsite: "https://adarshbalika.netlify.app",
    profilePic:
      "https://pbs.twimg.com/profile_images/1521957986335297536/itVSA7l0_400x400.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Elon",
    lastName: "Musk",
    username: "elonmusk",
    password: "tesla",
    profilePic:
      "https://pbs.twimg.com/profile_images/1521957986335297536/itVSA7l0_400x400.jpg",
    userBio: "Working under the Richest Person on earth the Legend Richie Rich",
    userWebsite: "https://www.tesla.com/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "brad",
    lastName: "gibson",
    username: "brad gibson05",
    password: "gibson05 ",
    profilePic: "https://randomuser.me/api/portraits/men/75.jpg",
    userBio: "exploring... learning.....",
    userWebsite: "https://www.tesla.com/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "guest",
    lastName: "guesting",
    username: "guest123",
    password: "guest",
    profilePic:
      "https://pbs.twimg.com/profile_images/1521957986335297536/itVSA7l0_400x400.jpg",
    userBio: "exploring... learning.....working as tester user everywhere",
    userWebsite: "https://www.tesla.com/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Ankit",
    lastName: "Tailor",
    username: "ankittailor_",
    password: "akkiiii123",
    profilePic: "https://avatars.githubusercontent.com/u/44310861?v=4",
    userBio: "Building NativeBase ",
    userWebsite: "https://www.ankittailor.tech/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
