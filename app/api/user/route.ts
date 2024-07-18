import connectDB from "@/lib/mongodb";
import User from "@/model/user";
import { NextRequest, NextResponse } from "next/server";

// --- simple Get request Example
export const GET = async (request: NextRequest) => {
   await connectDB(); // connect to Database
   const allUsers = await User.find();
   return NextResponse.json(allUsers);
};

// --- simple POST request example
export const POST = async (request: NextRequest) => {
   await connectDB(); // connect to Database

  const body = await request.json();
  const { username, password } = body;

  //   Example of saving user to MongoDB using Mongoose
   const newUser = new User({ username, password });
   await newUser.save();

  return NextResponse.json({ username, password });
};
