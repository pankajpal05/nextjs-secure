import { NextResponse } from "next/server";
export async function GET() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  return NextResponse.json({
    message: "Request succesfull",
    user: data,
    status: 200,
  });
}
