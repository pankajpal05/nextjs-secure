import { verifyToken } from "./app/lib/verifyToken";
import { NextResponse } from "next/server";
export async function middleware(request) {
  const authHeader = request.headers.get("authorization");
  const token = authHeader?.split(" ")[1];
  const isTokenValid = await verifyToken(token);
  if (!isTokenValid) {
    console.log("call from here token unvalid");
    return NextResponse.json(
      { success: false, message: "authentication failed" },
      { status: 401 }
    );
  }
  console.log("call from next route");
  return NextResponse.next();
}

export const config = {
  matcher: ["/api/user"],
};
