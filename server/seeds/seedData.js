import { Types } from 'mongoose';

const userIds = [new Types.ObjectId(), new Types.ObjectId()];

export const users = [
  {
    _id: userIds[0],
    firstName: "Peter",
    lastName: "Aasen",
    email: "peter@gmail.com",
    password: "123456",
    createdAt: Date.now(),
    updatedAt: Date.now(),
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Steve",
    lastName: "Ralph",
    email: "steve@gmail.com",
    password: "123456",
    createdAt: Date.now(),
    updatedAt: Date.now(),
    __v: 0,
  },
];

export const posts = [
  {
    _id: new Types.ObjectId(),
    // userId: userIds[0],
    firstName: "Peter",
    lastName: "Aasen",
    content:
      "Recent studies have shown the benefits of meditation and yoga for improving mental health. Our certified instructors provide personalized training to help you find your inner calm. Sign up for a free intro session today!",
  },
  {
    _id: new Types.ObjectId(),
    // userId: userIds[1],
    firstName: "Steve",
    lastName: "Ralph",
    content:
      "Hey, I'm Steve.",
  },
]