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
    password: "adarshBalika123",
    email: "balika@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "ajay",
    lastName: "mandaviya",
    username: "ajay",
    password: "ajay123",
    email: "ajay@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
