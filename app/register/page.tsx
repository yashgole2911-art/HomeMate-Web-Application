export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-80 flex flex-col gap-4">

        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <p className="text-sm text-grey-500 text-center">
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
        <form>
        <div className="flex justify-center mt-4">
  <button className="bg-blue-500 text-white px-6 py-2 rounded-md">
    Sign up
  </button>
</div>
</form>
        

      </div>
    </div>
  );
}