export default function PasswordPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      
      {/* Title */}
      <h1 className="text-2xl font-semibold mb-1">
        Password Verification
      </h1>
      <p className="text-gray-500 mb-6">
        Enter the password to login
      </p>

      {/* Password Field */}
      <div className="w-[320px]">
        <label className="block text-sm font-medium mb-1">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg px-4 py-2 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Login Button */}
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition">
          Login
        </button>
      </div>

    
    </div>
  );
}