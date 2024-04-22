import mongoose from "mongoose";
import Questions from "@/models/questions";
import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest } from "next";
import { AnswerContext } from "../context/AnswerContext";
import { useContext } from "react";

export async function POST(request: Request) {
  try {
    const obj = await request.json();

    const newClient = new Questions({
      email: "shivsatyam86@gmail.com",
      answers: obj.soln,
    });

    try {
      await newClient.save();
      return new NextResponse("task completed!!! (at route.ts)");
    } catch (error) {
      console.log(error);
      return new NextResponse(
        `task failed!!! (at route.ts) with the error: ${error}`
      );
    }
  } catch (error) {
    console.log(error);
  }
}
