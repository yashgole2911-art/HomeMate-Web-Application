"use client";

import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  return (
    <div className="w-full">
      
      {/* App Title */}
      <h2 className="text-center font-semibold text-lg mb-6">
        home/mate
      </h2>

      {/* Avatar */}
      <div className="flex justify-center mb-6">
        <img
          src="/avatar.JPG"
          alt="profile"
          className="w-20 h-20 rounded-full object-cover"
        />
      </div>

      {/* Fields */}
      <ProfileField label="Name" value="Gaurav Singh" />
      <ProfileField label="Location" value="Dadar West" />
      <ProfileField label="Mobile no." value="9876543210" />
      <ProfileField label="Email Id" value="gauravsingh@gmail.com" />
      <ProfileField label="DOB" value="21/05/1990" />

      {/* Button */}
      <button
        onClick={() => router.push("/edit_profile")}
        className="w-full mt-6 py-2 bg-teal-500 text-white rounded-xl font-medium hover:bg-teal-600 transition"
      >
        Edit Info
      </button>
    </div>
  );
}

function ProfileField({ label, value }: any) {
  return (
    <div className="mb-4">
      <p className="text-xs text-gray-400 mb-1">{label}</p>
      <p className="border-b border-gray-200 pb-1 text-sm">
        {value}
      </p>
    </div>
  );
}