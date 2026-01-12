export default function PersonalDetailsPage() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white w-[360px] rounded-xl shadow-md p-6">

        {/* App Name */}
        <h2 className="text-center text-sm font-semibold text-gray-700 mb-4">
          home/mate
        </h2>

        {/* Title */}
        <h1 className="text-lg font-semibold mb-4">
          Personal details
        </h1>

        {/* Form */}
        <div className="space-y-4">

          <div>
            <label className="text-sm font-medium">First Name*</label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="w-full border rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Last Name*</label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="w-full border rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Mobile No.*</label>
            <input
              type="text"
              placeholder="Enter your number"
              className="w-full border rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Location*</label>
            <input
              type="text"
              placeholder="Enter your location"
              className="w-full border rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium">DOB</label>
            <input
              type="date"
              className="w-full border rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600">
            Continue
          </button>

          <button className="flex-1 bg-gray-300 text-gray-600 py-2 rounded-lg font-medium">
            Discard
          </button>
        </div>
      </div>
    </div>
  );
}