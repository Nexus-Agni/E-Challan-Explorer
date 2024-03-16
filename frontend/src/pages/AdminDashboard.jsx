function AdminDashboard() {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      <aside className=" h-screen w-64 flex-col overflow-y-auto border-r bg-gradient-to-r from-[#DE4982] to-[#EC8F4F] px-5 py-8">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-gray-300 rounded-full w-[60px] h-[60px]"></div>
          <span className="mt-2 text-gray-200">Admin</span>
        </div>
        <div className="mt-6 flex flex-1 flex-col justify-between">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
                href="#"
              >
                <span className="mx-2 text-sm font-medium">Add User</span>
              </a>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <span className="mx-2 text-sm font-medium">
                  Add New Challan
                </span>
              </a>

              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <span className="mx-2 text-sm font-medium">Add Vehicle</span>
              </a>

              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <span className="mx-2 text-sm font-medium">
                  View User History
                </span>
              </a>
            </div>
          </nav>
        </div>
      </aside>

      <div className="flex flex-col w-full">
        <header className="bg-white shadow">
          <div className="flex items-center justify-between py-4 px-8">
            <h1 className="text-2xl font-bold text-gray-800">
              Admin Dashboard
            </h1>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white shadow p-4">
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                Currently Due{" "}
              </h2>
              <ul>
                <li>User 1</li>
                <li>User 2</li>
                <li>User 3</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
