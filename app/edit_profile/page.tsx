"use client";
import { useRouter } from "next/navigation";

export default function EditProfile() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white w-[350px] p-6 rounded-lg shadow">

        <h2 className="text-center font-semibold mb-4">home/mate</h2>

        <div className="flex justify-center mb-4">
          <img
            src="/avatar.jpg"
            className="w-20 h-20 rounded-full"
            alt="profile"
          />
        </div>

        <Input label="Name" defaultValue="Gaurav Singh" />
        <Input label="Location" defaultValue="Dadar West" />
        <Input label="Mobile no." defaultValue="9876543210" />
        <Input label="Email Id" defaultValue="gauravsingh@gmail.com" />
        <Input label="DOB" defaultValue="21/05/1990" />

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            className="flex-1 bg-teal-500 text-white py-2 rounded"
          >
            Save changes
          </button>

          <button
            onClick={() => router.back()}
            className="flex-1 border py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

function Input({ label, defaultValue }: any) {
  return (
    <div className="mb-3">
      <label className="text-sm text-gray-400">{label}</label>
      <input
        defaultValue={defaultValue}
        className="w-full border-b outline-none py-1"
      />
    </div>
  );
}