"use client";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white w-[350px] p-6 rounded-lg shadow">
        
        <h2 className="text-center font-semibold mb-4">home/mate</h2>

        <div className="flex justify-center mb-4">
          <img
            src="/avatar.JPG"
            className="w-20 h-20 rounded-full"
            alt="profile"
          />
        </div>

        <ProfileField label="Name" value="Gaurav Singh" />
        <ProfileField label="Location" value="Dadar West" />
        <ProfileField label="Mobile no." value="9876543210" />
        <ProfileField label="Email Id" value="gauravsingh@gmail.com" />
        <ProfileField label="DOB" value="21/05/1990" />

        <button
          onClick={() => router.push("/edit_profile")}
          className="w-full bg-teal-500 text-white py-2 rounded-lg font-medium hover:bg-teal-600 transition">
        
          Edit Info
        </button>
      </div>
    </div>
  );
}

function ProfileField({ label, value }: any) {
  return (
    <div className="mb-3">
      <p className="text-sm text-gray-400">{label}</p>
      <p className="border-b pb-1">{value}</p>
    </div>
  );
}