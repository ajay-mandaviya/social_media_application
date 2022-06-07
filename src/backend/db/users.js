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
    following: [
      {
        _id: uuid(),
        firstName: "Sarah",
        lastName: "Walkman",
        username: "SarahW",
        avatarURL:
          "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
      },
      {
        _id: uuid(),
        firstName: "Lizzie",
        lastName: "Anne",
        username: "itsLizzie",
        avatarURL:
          "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181762/socmedia/pic4_dtzqlj.jpg",
      },
      {
        firstName: "Jane",
        lastName: "Doe",
        username: "janedoe",
        avatarURL:
          "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181761/socmedia/pic3_py263g.jpg",
      },
      {
        firstName: "Anna",
        lastName: "Baker",
        username: "annahere",
        avatarURL:
          "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181889/socmedia/pic5_qq8ne3.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Sarah",
        lastName: "Walkman",
        username: "SarahW",
        avatarURL:
          "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
      },

      {
        _id: uuid(),
        firstName: "Lizzie",
        lastName: "Anne",
        username: "itsLizzie",
        avatarURL:
          "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181762/socmedia/pic4_dtzqlj.jpg",
      },
    ],
    userWebsite: "https://adarshbalika.netlify.app",
    profilePic:
      "https://pbs.twimg.com/profile_images/1421500413174456323/e4ayMO4F_400x400.jpg",
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
      "https://pbs.twimg.com/profile_images/1402380989566013448/Ec0CGqzW_400x400.png",
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

  {
    _id: uuid(),
    firstName: "Subham ",
    lastName: "Soni",
    username: "shubhamsoni",
    password: "subhamsoni04",
    profilePic:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/man_3_dfq8h3.png",
    userBio: "Building NativeBase ",
    userWebsite: "https://www.ankittailor.tech/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
