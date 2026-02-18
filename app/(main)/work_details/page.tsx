export default function WorkDetailsPage() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[360px] bg-white rounded-xl p-6">

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
              className="w-full border rounded-lg px-4 py-2 mt-1 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Pay cycle*</label>
            <input
              type="text"
              placeholder="Monthly"
              className="w-full border rounded-lg px-4 py-2 mt-1 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Pay</label>
            <input
              type="text"
              placeholder="Rs 5000/month"
              className="w-full border rounded-lg px-4 py-2 mt-1 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Paid leaves</label>
            <input
              type="text"
              placeholder="02"
              className="w-full border rounded-lg px-4 py-2 mt-1 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Visiting time</label>
            <input
              type="text"
              placeholder="8:00 am"
              className="w-full border rounded-lg px-4 py-2 mt-1 outline-none"
            />
          </div>
        </div>

        {/* Confirm Button */}
        <button className="w-full bg-teal-500 text-white py-2 rounded-lg mt-6 font-medium">
          Save Profile
        </button>
      </div>
    </div>
  );
}