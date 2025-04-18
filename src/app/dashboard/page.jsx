import React from "react";

const DashboardPage = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col p-6">
        <h2 className="text-2xl font-bold mb-10">Dashboard</h2>
        <nav className="space-y-4">
          <a href="#" className="hover:bg-gray-700 p-2 rounded">
            Home
          </a>
          <a href="#" className="hover:bg-gray-700 p-2 rounded">
            Analytics
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6">Welcome back, Admin!</h1>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: "Users", value: "1,204" },
            { title: "Revenue", value: "$12,340" },
            { title: "New Orders", value: "245" },
            { title: "Feedbacks", value: "87" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-4 text-center"
            >
              <p className="text-gray-500">{item.title}</p>
              <h2 className="text-2xl font-bold text-indigo-600">
                {item.value}
              </h2>
            </div>
          ))}
        </div>

        {/* Recent Activity Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul className="space-y-3 text-gray-700">
            <li>✔️ John Doe registered a new account.</li>
            <li>💬 Sarah commented on the blog.</li>
            <li>📦 Order #1293 was shipped.</li>
            <li>🔧 Admin updated settings.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;
