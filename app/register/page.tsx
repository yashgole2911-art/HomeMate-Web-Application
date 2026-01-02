export default function register() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form className="flex flex-col gap-3">
        <input type="email" placeholder="Email" className="border p-2 rounded"/>
        <input type="password" placeholder="Password" className="border p-2 rounded"/>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
}