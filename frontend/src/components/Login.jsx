import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [adminAccess, setAdminAccess] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    const formData = {
      username: username,
      password: password,
    }
    axios.post('http://localhost:8000/api/v1/users/login', formData) 
    .then((response) => {
      console.log(response.data)
      const data = response.data;

      if (data.data.user.adminAccess === true) {
        navigate("/admin");
      } else {
        navigate("/user");
      }
    })
    .catch((error) => {
      console.log(error)
    })
  };

  return (
    <section className="bg-gradient-to-r from-[#DE4982] to-[#EC8F4F] h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-1 bg-gradient-to-r from-[#DE4982] to-[#EC8F4F]">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 ">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md bg-black-25 px-4 py-6 border rounded-3xl backdrop-filter backdrop-blur">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Sign in
            </h2>
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <div className="space-x-2">
                  {/* <input type="checkbox" name="adminAccess" id="adminAccess" />
                  <label htmlFor="adminAccess" className="text-base font-medium text-gray-100">Are you an admin ?</label> */}
                      <label className="relative inline-flex items-center cursor-pointer">
                      <input
                          type="checkbox"
                          className="sr-only peer"
                          value={adminAccess}
                          onChange={(e) => {setAdminAccess(e.target.checked)}}
                      />
                      <div className="w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-whiteafter:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                      <span className="text-base font-medium text-gray-100 ml-2">Are you an admin ?</span>
                  </label>
                  </div>
                  <br />
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-100"
                  >
                    {" "}
                    Username{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-xl border border-gray-100 bg-transparent px-3 py-2 text-sm placeholder:text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="username"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => {setUsername(e.target.value)}}
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-100"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <a
                      href="#"
                      title=""
                      className="text-sm font-semibold text-white hover:underline"
                    >
                      {" "}
                      Forgot password?{" "}
                    </a>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-xl border border-gray-100 bg-transparent px-3 py-2 text-sm placeholder:text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => {setPassword(e.target.value)}}
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-3xl bg-gradient-to-r from-[#6749de] to-[#4fec57] px-3.5 py-2.5 font-semibold leading-7 text-black hover:scale-105"
                    onClick={handleLogin}
                  >
                    Get started <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>

               
              </div>
            </form>
            
          </div>
        </div>
        {/* <div className="h-full w-full">
          <img
            className="mx-auto h-full w-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
          />
        </div> */}
      </div>
    </section>
  );
}

export default Login;
