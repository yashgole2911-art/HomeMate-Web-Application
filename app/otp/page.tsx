"use client";
import { useEffect, useState } from "react";

export default function OtpPage() {
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes = 120 sec

  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const resendOtp = () => {
    setTimeLeft(120); // reset timer
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-2xl font-semibold mb-2">OTP Verification</h1>
      <p className="text-gray-400 text-center mb-6">
        Enter the 4 digit code sent on your mobile number to login
      </p>

      {/* OTP Boxes */}
      <div className="flex gap-4 mb-6">
        {[1, 2, 3, 4].map((_, i) => (
          <input
            key={i}
            maxLength={1}
            className="w-14 h-14 border rounded-xl text-center text-xl focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        ))}
      </div>

      {/* Login Button */}
      <button className="bg-teal-500 text-white px-10 py-3 rounded-xl mb-4 hover:bg-teal-600">
        Login
      </button>

      {/* Timer */}
      {timeLeft > 0 ? (
        <p className="text-gray-400 text-sm">
          Resend OTP in{" "}
          <span className="font-medium">
            {minutes}:{seconds.toString().padStart(2, "0")}
          </span>
        </p>
      ) : (
        <button
          onClick={resendOtp}
          className="text-teal-500 text-sm font-medium"
        >
          Resend OTP
        </button>
      )}
    </div>
  );
}