"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthTokens } from "@/app/service/fetchAuthTokens.service";
import { setToken } from "@/app/redux/feature/Token/tokenSlice";
import { httpService } from "@/app/lib/httpService";
const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const bearerToken = useSelector((state) => state.token.accessToken);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const fetchToken = await fetchAuthTokens();
      dispatch(setToken(fetchToken.accessToken));
      setFormData({ email: "", password: "" });
    } catch (err) {
      console.error(err);
    }
  };

  const handlegetUser = async () => {
    const res = await httpService.get("/api/user", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    console.log(res, "response");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
              value={formData.email}
              name="email"
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="••••••••"
              value={formData.password}
              name="password"
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200"
            >
              Sign In
            </button>
          </div>

          {/* Additional Links */}
          <div className="text-sm text-center mt-4">
            <a href="#" className="text-indigo-600 hover:underline">
              Forgot password?
            </a>
            <span className="mx-2 text-gray-400">|</span>
            <a href="#" className="text-indigo-600 hover:underline">
              Sign up
            </a>
          </div>
        </form>
        <button
          onClick={handlegetUser}
          type="submit"
          className="w-full my-5 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200"
        >
          Get User
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
