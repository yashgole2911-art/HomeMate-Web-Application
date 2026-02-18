"use client";

import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  return (
    <div className="w-full max-w-sm flex flex-col gap-4 mx-auto">

      <h1 className="text-2xl font-bold text-center">Sign Up</h1>

      <p className="text-sm text-gray-500 text-center">
        Let's create a new account to get started
      </p>

      <p>Full name*</p>
      <input
        type="text"
        placeholder="Full Name"
        className="border p-2 rounded"
      />

      <p>Mobile No.*</p>
      <input
        type="text"
        placeholder="Mobile No."
        className="border p-2 rounded"
      />

      <p>Email Id</p>
      <input
        type="email"
        placeholder="Email id"
        className="border p-2 rounded"
      />

      <p>Location</p>
      <input
        type="text"
        placeholder="Location"
        className="border p-2 rounded"
      />

      <button
        onClick={() => router.push("/set_password")}
        className="bg-teal-500 text-white py-2 rounded-md mt-4"
      >
        Sign up
      </button>

      <button
        type="button"
        onClick={() => router.push("/login")}
        className="mt-4 text-sm text-blue-500 hover:underline text-center"
      >
        Go back
      </button>

    </div>
  );
}