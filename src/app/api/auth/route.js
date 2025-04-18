import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

function generateAccessToken(payload) {
  return jwt.sign(payload, process.env.ACCESS_SECRET, {
    expiresIn: "1m",
  });
}

function generateRefreshToken(payload) {
  return jwt.sign(payload, process.env.REFRESH_SECRET, {
    expiresIn: "7h",
  });
}

export async function GET() {
  const sessionId = crypto.randomUUID();
  const payload = {
    sessionId,
  };
  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);
  const cookieStore = await cookies();
  cookieStore.set("refreshToken", refreshToken, {
    secure: true,
    httpOnly: true,
    sameSite: "Strict",
  });
  return Response.json({
    message: "login successfully",
    accessToken: accessToken,
  });
}
