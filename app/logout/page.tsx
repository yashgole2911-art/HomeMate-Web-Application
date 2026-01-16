"use client";

import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      
      <div className="w-[360px] h-[520px] bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
        
        <p className="text-sm text-gray-500 self-start">
          logout confirmation
        </p>

        <div className="flex-1 flex flex-col items-center justify-center">
          <h2 className="text-lg font-medium text-gray-700 mb-6">
            Log Out?
          </h2>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleLogout}
              className="w-28 py-2 rounded-md bg-sky-500 text-white font-medium hover:bg-sky-600 transition"
            >
              Yes
            </button>

            <button
              onClick={() => router.push("/setting")}
              className="w-28 py-2 rounded-md border border-gray-400 text-gray-600 font-medium hover:bg-gray-100 transition"
            >
              Cancel
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}