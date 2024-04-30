import { Card } from "./Card";

function UserDashboard({data}) {
  const {username, fullname, vehicleNumbers} = data;
  return (
    data?
    <div className="bg-gray-100 min-h-screen flex">
      <aside className=" h-screen w-64 flex-col overflow-y-auto border-r bg-gradient-to-r from-[#DE4982] to-[#EC8F4F] px-5 py-8">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-gray-300 rounded-full w-[60px] h-[60px]"></div>
          <span className="mt-2 text-gray-200">User</span>
        </div>
        <div className="mt-6 flex flex-1 flex-col justify-between">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              
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
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Welcome {fullname}
          </h2>
          <div className="flex flex-row justify-evenly flex-wrap p-4 ">
            {vehicleNumbers.map((vehicleNumber, index) => {
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
    : <h1>Unauhorized Access</h1>
  );
}

export default UserDashboard;
