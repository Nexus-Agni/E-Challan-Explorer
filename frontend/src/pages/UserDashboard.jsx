function UserDashboard() {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      <aside className=" h-screen w-64 flex-col overflow-y-auto border-r bg-gradient-to-r from-[#DE4982] to-[#EC8F4F] px-5 py-8">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-gray-300 rounded-full w-[60px] h-[60px]"></div>
          <span className="mt-2 text-gray-200">User</span>
        </div>
        <div className="mt-6 flex flex-1 flex-col justify-between">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
                href="#"
              >
                <span className="mx-2 text-sm font-medium">
                  Active Challans
                </span>
              </a>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <span className="mx-2 text-sm font-medium">History</span>
              </a>
            </div>
          </nav>
        </div>
      </aside>

      <div className="flex flex-col w-full">
        <header className="bg-white shadow">
          <div className="flex items-center justify-between py-4 px-8">
            <h1 className="text-2xl font-bold text-gray-800">User Dashboard</h1>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white shadow p-4">
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                Vehicle 1
              </h2>
              <ul>
                <li>Reg ID</li>
                <li>Number Plate</li>
                <li>Vehicle Type</li>
              </ul>
            </div>
            <div className="bg-white shadow p-4">
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                Vehicle 2
              </h2>
              <ul>
                <li>Reg ID</li>
                <li>Number Plate</li>
                <li>Vehicle Type</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default UserDashboard;
