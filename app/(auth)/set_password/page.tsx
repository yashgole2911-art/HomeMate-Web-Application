"use client";

import { useRouter } from "next/navigation";

export default function SetPasswordPage() {
  const router = useRouter();

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col gap-4">

      {/* Title */}
      <h1 className="text-2xl font-semibold text-center">
        Set a Password
      </h1>

      <p className="text-gray-400 text-sm text-center">
        Your password must be minimum 8 characters.
        You can change this later under the settings tab.
      </p>

      {/* Form */}
      <label className="block text-sm font-medium">
        Enter New Password
      </label>
      <input
        type="password"
        placeholder="Password"
        className="w-full border rounded-lg px-4 py-2"
      />

      <label className="block text-sm font-medium">
        Confirm Password
      </label>
      <input
        type="password"
        placeholder="Password"
        className="w-full border rounded-lg px-4 py-2"
      />

      {/* Confirm Button */}
      <button 
      onClick={() => router.push("/dashboard")}
      className="w-full bg-teal-500 text-white py-2 rounded-lg font-medium">
        Confirm
      </button>

      {/* Go back */}
      <button
        onClick={() => router.back()}
        className="mt-2 text-sm text-blue-500 hover:underline text-center"
      >
        Go back
      </button>

    </div>
  );
}