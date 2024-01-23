import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
// import Form from "../components/Form";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

const Sign_up = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [passWord, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // const [isLoading,setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method: "POST",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/auth/signup",
      data: {
        email: email,
        fullName: firstName + lastName,
        password: passWord,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        console.log(
          localStorage.setItem("user", JSON.stringify(response.data.user))
        );
        toast.success("Success");
        setTimeout(() => {
          navigate("/login");
        }, 3000);

        setIsLoading(false);
      })
      .catch((error) => {
        toast.error("Error");
        setIsLoading(false);
      });

    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");

    setIsLoading(true);
  };
  return (
    <div className="container mx-auto">
      <ToastContainer />
      <div className="">
        <form
          action="/"
          method="get"
          id="form"
          class="flex flex-col space-y-4 p-8 "
        >
          <h2 className="font-bold text-3xl">Sign Up</h2>
          <p>
            Already have an account yet{" "}
            <span className="text-secondary">Login</span>
          </p>
          <div className="flex flex-col space-y-4 justify-center  md:w-1/2 container ">
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                Enter your email
              </label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                id="name1"
                class="border-2 border-black rounded-lg p-4 text-black "
                placeholder="Enter your email"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                First name
              </label>
              <input
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                type="text"
                id="name1"
                class="border-2 border-black rounded-lg p-4 text-black "
                placeholder="First name"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                Last Name
              </label>
              <input
                value={lastName}
                type="text"
                id="email"
                class="border-2  border-black rounded-lg p-4 text-black"
                placeholder="Enter your last name"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                Enter password
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                id="name1"
                class="border-2 border-black rounded-lg p-4 text-black "
                placeholder="Enter password"
              />
            </div>

            <div className="flex space-x-4 items-center">
              <p>Remember me </p>
              <input type="checkbox" name="" id="" />
            </div>
            <button
              onClick={handleSubmit}
              className="px-6 bg-secondary bg-yellow-400 text-white py-4 rounded-lg text-3xl font-bold hover:bg-black hover:text-white"
            >
              {isLoading ? (
                <ThreeDots
                  height="80"
                  width="80"
                  radius="9"
                  color="white"
                  ariaLabel="three-dots-loading"
                  wrapperStyle
                  wrapperClass="flex justify-center"
                />
              ) : (
                "Sign up "
              )}
            </button>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default Sign_up;