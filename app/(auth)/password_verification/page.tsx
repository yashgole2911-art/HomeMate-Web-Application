"use client";
import { useRouter } from "next/navigation";

export default function PasswordVerification() {
  const router = useRouter();

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[360px] px-4">

        {/* Title */}
        <h1 className="text-2xl font-semibold mb-1 text-center">
          Password Verification
        </h1>
        <p className="text-gray-500 mb-6 text-center">
          Enter the password to login
        </p>

        {/* Password Field */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-2 mb-5 outline-none"
          />

          {/* Login Button */}
          <button 
          onClick={() => router.push("/dashboard")}
          className="w-full bg-teal-500 text-white py-2 rounded-lg font-medium">
            Login
          </button>

          {/* Go back */}
          <button
            onClick={() => router.push("/login")}
            className="mt-4 block mx-auto text-sm text-blue-500"
          >
            Go back
          </button>
        </div>

      </div>
    </div>
  );
}