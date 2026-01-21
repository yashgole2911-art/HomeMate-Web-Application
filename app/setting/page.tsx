"use client";

import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      
      {/* BIG BOX */}
      <div className="w-[360px] min-h-[520px] bg-white rounded-xl shadow-md p-6 flex flex-col">
        
        {/* Title */}
        <h2 className="text-center font-semibold text-gray-800 mb-6">
          home/mate
        </h2>

        {/* Buttons */}
        <div className="flex-1 space-y-2">
          
          <button
            onClick={() => router.push("/set_password")}
            className="w-full text-left py-4 px-3 border-b hover:bg-gray-50 transition font-medium"
          >
            Change password
          </button>

          <button
           
            onClick={() => router.push("/login")
              
            }
            className="w-full text-left py-4 px-3 border-b hover:bg-gray-50 transition font-medium"
          >
            Delete account
          </button>

          <button
            onClick={() => router.push("/logout")}
            className="w-full text-left py-4 px-3 hover:bg-red-50 transition font-medium text-red-600"
          >
            Logout
          </button>

        </div>

      </div>
    </div>
  );
}