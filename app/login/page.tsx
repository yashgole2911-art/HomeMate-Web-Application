
    export default function Login() {
        return (
    <div className="flex flex-col items-center justify-center min-h-screen">

      <div className="flex flex-col items-center mb-6">
  <h1 className="text-3xl font-bold text-blue-500">
    Home/mate
  </h1>
  <p className="text-black text-lg mt-1">
    Welcome!
  </p>
</div>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form className="flex flex-col gap-3">
        <input type="email" placeholder="Email" className="border p-2 rounded"/>
        <input type="password" placeholder="Password" className="border p-2 rounded"/>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}