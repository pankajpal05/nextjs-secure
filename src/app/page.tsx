import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-indigo-600 flex justify-between text-white p-4 shadow">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Authentiation App</h1>
        </div>
        <Link href={"/login"}>
          <button className="bg-green-500 px-5 rounded-2xl py-3 font-bold">
            Login
          </button>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-6 space-y-12">
        {/* Hero Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to Our Platform</h2>
          <p className="text-gray-600 mb-6">
            Everything you need in one place.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
            Get Started
          </button>
        </section>

        {/* Cards Section */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Fast", "Secure", "Responsive"].map((title, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 border"
              >
                <h4 className="text-lg font-bold mb-2">{title}</h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, quidem!
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gray-100 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Platform Stats</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-indigo-600">1M+</p>
              <p className="text-gray-700">Users</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-indigo-600">500+</p>
              <p className="text-gray-700">Projects</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-indigo-600">99.9%</p>
              <p className="text-gray-700">Uptime</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-indigo-600">24/7</p>
              <p className="text-gray-700">Support</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 mt-auto text-center">
        &copy; {new Date().getFullYear()} My Cool App. All rights reserved.
      </footer>
    </div>
  );
}
