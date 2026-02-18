"use client";

import { useRouter } from "next/navigation";

export default function EditProfile() {
  const router = useRouter();

  return (
    <div className="w-full">
      
      {/* Title */}
      <h2 className="text-center font-semibold text-lg mb-6">
        home/mate
      </h2>

      {/* Avatar */}
      <div className="flex justify-center mb-6">
        <img
          src="/avatar.jpg"
          alt="profile"
          className="w-20 h-20 rounded-full object-cover shadow-md"
        />
      </div>

      {/* Inputs */}
      <Input label="Name" defaultValue="Gaurav Singh" />
      <Input label="Location" defaultValue="Dadar West" />
      <Input label="Mobile no." defaultValue="9876543210" />
      <Input label="Email Id" defaultValue="gauravsingh@gmail.com" />
      <Input label="DOB" defaultValue="21/05/1990" />

      {/* Buttons */}
      <div className="flex gap-4 mt-8">
        <button className="flex-1 py-2 bg-teal-500 text-white rounded-xl font-medium hover:bg-teal-600 transition">
          Save changes
        </button>

        <button
          onClick={() => router.back()}
          className="flex-1 py-2 border border-gray-300 rounded-xl font-medium hover:bg-gray-100 transition"
        >
          Cancel
        </button>
      </div>

    </div>
  );
}

function Input({ label, defaultValue }: any) {
  return (
    <div className="mb-4">
      <label className="text-xs text-gray-400 block mb-1">
        {label}
      </label>
      <input
        defaultValue={defaultValue}
        className="w-full border-b border-gray-200 outline-none py-1 text-sm focus:border-teal-500 transition"
      />
    </div>
  );
}