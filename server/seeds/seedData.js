import { Types } from "mongoose";

const userIds = [new Types.ObjectId(), new Types.ObjectId()];

export const users = [
  {
    _id: userIds[0],
    firstName: "Olivia",
    lastName: "Lopez",
    email: "olivia@gmail.com",
    password: "$2b$10$DkcN3rYRsifuuqdxps4yQ.2sM/2mCCkUjWGp64eaJffRfGYnYBAWm",
    createdAt: Date.now(),
    updatedAt: Date.now(),
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Steve",
    lastName: "Olsen",
    email: "steve@gmail.com",
    password: "$2b$10$DkcN3rYRsifuuqdxps4yQ.2sM/2mCCkUjWGp64eaJffRfGYnYBAWm",
    createdAt: Date.now(),
    updatedAt: Date.now(),
    __v: 0,
  },
];

export const posts = [
  {
    _id: new Types.ObjectId(),
    userId: userIds[0],
    firstName: "Olivia",
    lastName: "Lopez",
    title: "Meditation and yoga",
    content:
      "Recent studies have shown the benefits of meditation and yoga for improving mental health. Our certified instructors provide personalized training to help you find your inner calm. Sign up for a free intro session today!",
  },
  {
    _id: new Types.ObjectId(),
    userId: userIds[1],
    firstName: "Steve",
    lastName: "Olsen",
    title: "Shortest war",
    content:
      "The shortest war in history was between Britain and Zanzibar on August 27, 1896. It lasted only 38 minutes.",
  },
];
