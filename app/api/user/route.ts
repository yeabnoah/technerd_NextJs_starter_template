import connectDB from "@/lib/mongodb";
import User from "@/model/user";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  await connectDB();

  const allUsers = await User.find();

  return NextResponse.json(allUsers);
};

export const POST = async (request: NextRequest) => {
  await connectDB();

  const body = await request.json();
  const { username, password } = body; // Corrected destructuring

  //   Example of saving user to MongoDB using Mongoose
  const newUser = new User({ username, password });
  await newUser.save();

  return NextResponse.json({ username, password });
};
