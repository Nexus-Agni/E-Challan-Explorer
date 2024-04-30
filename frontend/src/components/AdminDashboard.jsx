import { Card } from "./Card";
import { Link } from "react-router-dom";

function AdminDashboard({data}) {
  const {username, fullname, vehicleNumbers} = data;
  return (
    data?
    <div className="bg-gray-100 min-h-screen flex">
      <aside className=" h-screen w-64 flex-col overflow-y-auto border-r bg-gradient-to-r from-[#DE4982] to-[#EC8F4F] px-5 py-8">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-gray-300 rounded-full w-[60px] h-[60px]"></div>
          <span className="mt-2 text-gray-200">Admin</span>
        </div>
        <div className="mt-6 flex flex-1 flex-col justify-between">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
                to="/adduser"
              >
                <span className="mx-2 text-sm font-medium"> Add User</span>
              </Link>
              
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                to="/showAllUsers"
              >
                <span className="mx-2 text-sm font-medium">
                  View User History
                </span>
              </Link>
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
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Welcome {fullname}
          </h2>
          <div className="flex flex-row justify-evenly flex-wrap p-4 ">
            {vehicleNumbers.map((vehicleNumber,index) => {
              return (
                <div key={index} className="bg-white shadow p-4 flex justify-center items-center rounded-2xl">
                  <Card username={username} fullname={fullname} vehicleNumber={vehicleNumber}/>
                </div>
              );
            }
            )}
            
          </div>
        </main>
      </div>
    </div>
    : <div> Unauthorized access </div>
  );
}

export default AdminDashboard;
