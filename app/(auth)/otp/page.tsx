"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function OtpPage() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(120);

  useEffect(() => {
    if (timeLeft === 0) return;
    const timer = setInterval(() => {
      setTimeLeft((p) => p - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[360px] px-4">

        <h1 className="text-2xl font-semibold mb-2 text-center">
          OTP Verification
        </h1>

        <p className="text-gray-400 text-center mb-6">
          Enter the 4 digit code sent on your mobile number to login
        </p>

        {/* OTP Boxes */}
        <div className="flex justify-center gap-4 mb-6">
          {[1, 2, 3, 4].map((_, i) => (
            <input
              key={i}
              maxLength={1}
              className="w-14 h-14 border rounded-xl text-center text-xl outline-none"
            />
          ))}
        </div>

        {/* Login Button */}
        <button
        onClick={() => router.push("/dashboard")}
        className="w-full bg-teal-500 text-white py-3 rounded-xl mb-4">
          Login
        </button>

        {/* Timer */}
        {timeLeft > 0 ? (
          <p className="text-gray-400 text-sm text-center">
            Resend OTP in{" "}
            <span className="font-medium">
              {minutes}:{seconds.toString().padStart(2, "0")}
            </span>
          </p>
        ) : (
          <button
            onClick={() => setTimeLeft(120)}
            className="block mx-auto text-teal-500 text-sm font-medium"
          >
            Resend OTP
          </button>
        )}

        {/* Go back */}
        <button
          onClick={() => router.push("/login")}
          className="mt-4 block mx-auto text-sm text-blue-500"
        >
          Go back
        </button>
      </div>
    </div>
  );
}