import { NextResponse } from "next/server";
import clientPromise from "../../../../../lib/mongodb";

export async function GET(request, { params }) {
  const jobId = params.jobId;

  try {
    const client = await clientPromise;
    const db = client.db("test");

    // Perform actions on the database
    const data = await db.collection("jobs").find({ id: jobId }).toArray();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.error(e);
    return new Response(
      JSON.stringify({
        error: "An error occurred while connecting to the database",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
