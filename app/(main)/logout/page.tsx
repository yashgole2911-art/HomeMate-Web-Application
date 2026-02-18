"use client";

import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  return (
    <div className="w-full h-full flex flex-col">
      
      {/* Top text */}
      <p className="text-sm text-gray-500">
        logout confirmation
      </p>

      {/* Center but slightly lower */}
      <div className="flex flex-col items-center justify-center flex-1 mt-16">
        
        <h2 className="text-lg font-medium mb-8">
          Log out?
        </h2>

        <div className="flex gap-4">
          <button
            onClick={() => router.push("/login")}
            className="w-28 py-2 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition"
          >
            Yes
          </button>

          <button
            onClick={() => router.push("/setting")}
            className="w-28 py-2 border border-gray-400 rounded-lg text-gray-600 font-medium hover:bg-gray-100 transition"
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
}