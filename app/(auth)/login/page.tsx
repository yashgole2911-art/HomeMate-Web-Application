"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [mobile, setMobile] = useState("");

  return (
    <div className="flex flex-col">
      {/* App Name */}
      <h1 className="text-3xl font-semibold text-teal-500 mb-2 text-center">
        home/mate
      </h1>

      {/* Welcome Text */}
      <h2 className="text-xl font-medium mb-1 text-center">Welcome!</h2>
      <p className="text-gray-500 mb-8 text-center">
        Please Login or SignUp to continue
      </p>

      {/* Mobile Number */}
      <div className="w-full max-w-sm mb-6 mx-auto">
        <label className="block text-sm font-medium mb-1">
          Mobile no.
        </label>
        <div className="flex items-center border rounded-lg px-3 py-2">
          <span className="text-gray-500 mr-2">+91</span>
          <input
            type="tel"
            placeholder="xxxxxxxxxx"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="flex-1 outline-none"
          />
        </div>
      </div>

      {/* Send OTP Button */}
      <button
        onClick={() => {
          if (mobile.length !== 10) {
            alert("Please enter a valid mobile number");
            return;
          }
          router.push("/otp");
        }}
        className="bg-teal-500 text-white px-10 py-3 rounded-lg mb-6 hover:bg-teal-600 mx-auto"
      >
        Send OTP
      </button>

      {/* Divider */}
      <p className="text-gray-400 mb-4 text-center">Or use</p>

      {/* Password Button */}
      <button
        onClick={() => router.push("/password_verification")}
        className="border px-10 py-3 rounded-lg mb-8 mx-auto"
      >
        Password
      </button>

      {/* Sign Up */}
      <button
        onClick={() => router.push("/register")}
        className="text-sm text-gray-400 text-center"
      >
        New user?{" "}
        <span className="text-teal-500 cursor-pointer">Sign up</span>
      </button>
    </div>
  );
}