export default function WorkDetailsPage() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white w-[360px] rounded-xl shadow-md p-6">

        {/* App Name */}
        <h2 className="text-center text-sm font-semibold text-gray-700 mb-4">
          home/mate
        </h2>

        {/* Title */}
        <h1 className="text-lg font-semibold mb-4">
          Work details
        </h1>

        {/* Form */}
        <div className="space-y-4">

          <div>
            <label className="text-sm font-medium">Category*</label>
            <input
              type="text"
              placeholder="Cook"
              className="w-full border rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Pay cycle*</label>
            <input
              type="text"
              placeholder="Monthly"
              className="w-full border rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium">pay</label>
            <input
              type="text"
              placeholder="Rs 5000/month"
              className="w-full border rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Paid leaves</label>
            <input
              type="text"
              placeholder="02"
              className="w-full border rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium">visiting time</label>
            <input
              type="text"
              placeholder="8:00 am"
              className="w-full border rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        
        {/* Confirm Button */}
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg mt-6 font-medium hover:bg-blue-600 transition">
          Save Profile
        </button>
      </div>

        </div>
      
    
  );
}