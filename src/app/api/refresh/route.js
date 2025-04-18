// /app/api/refresh/route.ts
import jwt from "jsonwebtoken";

export async function POST(req) {
  const cookie = req.headers.get("cookie") || "";
  const refreshToken = cookie
    .split("; ")
    .find((row) => row.startsWith("refreshToken="))
    ?.split("=")[1];

  if (!refreshToken) {
    return new Response(JSON.stringify({ error: "No token" }), { status: 401 });
  }

  try {
    jwt.verify(refreshToken, process.env.REFRESH_SECRET);

    const sessionId = crypto.randomUUID();
    const payload = {
      sessionId,
    };
    const newAccessToken = jwt.sign(payload, process.env.ACCESS_SECRET, {
      expiresIn: "1m",
    });

    return new Response(JSON.stringify({ accessToken: newAccessToken }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Invalid refresh token" }), {
      status: 403,
    });
  }
}
