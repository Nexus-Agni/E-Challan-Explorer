import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Background from "../assets/Background.svg";

function Login({ setData }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = {
      username: username,
      password: password,
    };
    axios
      .post("http://localhost:8000/api/v1/users/login", formData)
      .then((response) => {
        // console.log(response.data)
        const data = response.data;
        const userData = data ? data.data.user : null;
        setData(userData);
        if (userData.adminAccess === true) {
          navigate("/admin");
        } else {
          navigate("/user");
        }
      })
      .catch((error) => {
        setError(error.response.data.message);
        console.log(error);
      });
  };

  return (
    <section className="bg-gradient-to-r from-[#DE4982] to-[#EC8F4F] h-screen overflow-hidden">
      <div
        className="grid grid-cols-1 lg:grid-cols-1 bg-gradient-to-r from-[#DE4982] to-[#EC8F4F] h-screen overflow-hidden  "
        style={{
          backgroundImage: `url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 ">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md bg-black-25 px-4 py-6 border-2 rounded-3xl backdrop-filter backdrop-blur">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Sign in
            </h2>
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-100"
                  >
                    {" "}
                    Username{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-xl border border-gray-100 bg-transparent px-3 py-2 text-sm placeholder:text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-white"
                      type="username"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                      required
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
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-xl border border-gray-100 bg-transparent px-3 py-2 text-sm placeholder:text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-white"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      required
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
        {error !== "" ? (
        <div className="w-full flex justify-center items-center  ">
          <h1 className="text-3xl bg-red-700 px-4 py-2 border rounded-xl outline-none border-red-700 text-white">
            {error}
          </h1>
        </div>
      ) : null}
      </div>
      
    </section>
  );
}

export default Login;
