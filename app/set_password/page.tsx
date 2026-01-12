"use client";
import { useRouter } from "next/navigation";
export default function SetPasswordPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      
      {/* Title */}
      <h1 className="text-2xl font-semibold mb-1">
        Set a Password
      </h1>
      <p className="text-gray-400 text-sm mb-6 text-center max-w-xs">
        Your password must be minimum 8 characters.
        You can change this later under the settings tab.
      </p>

      {/* Form */}
      <div className="w-[320px]">
        <label className="block text-sm font-medium mb-1">
          Enter New Password
        </label>
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="block text-sm font-medium mb-1">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Confirm Button */}
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition">
          Confirm
        </button>

          {/*go back */}
        <button
        onClick={() => router.push("/register")}
         className="mt-4 block mx-auto text-sm text-blue-500 hover:underline"
        >
           Go back
        </button>
      </div>

    </div>
  );
}