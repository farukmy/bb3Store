import { React, useState } from "react";
import free from "../assets/free.jpg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log(data);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  console.log(process.env.REACT_APP_SERVER_DOMAIN);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, email, password, confirmPassword } = data;
    if (firstName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        const fetchData = await fetch(
          `${process.env.REACT_APP_SERVER_DOMAIN}/signup`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        const dataRes = await fetchData.json();
        console.log(dataRes);
        //alert(dataRes.message);
        toast(dataRes.message);
        if (dataRes.alert) {
          navigate("/login");
        }
      } else {
        alert("check password not equal");
      }
    } else {
      alert("please enter required fields");
    }
  };
  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex flex-col p-4">
        {/*<h1 >Sign up</h1>*/}
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md  m-auto relative">
          <img src={free} className="w-full" />
        </div>

        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type={"text"}
            id="firstName"
            name="firstName"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within: outline-blue-300"
            value={data.firstName}
            onChange={handleOnChange}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type={"text"}
            id="lastName"
            name="lastName"
            className="mt-1 w-full bg-slate-200 px-2 py-1 rounded focus-within: outline-blue-400"
            value={data.lastName}
            onChange={handleOnChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within: outline-blue-400"
            value={data.email}
            onChange={handleOnChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type={"password"}
            id="password"
            name="password"
            className="mt-1 w-full bg-slate-200 px-2 py-1 rounded focus-within: outline-blue-400"
            value={data.password}
            onChange={handleOnChange}
          />
          <label htmlFor="password">Confirm Password</label>
          <input
            type={"password"}
            id="confirmpassword"
            name="confirmPassword"
            className="mt-1 w-full bg-slate-200 px-2 py-1 rounded focus-within: outline-blue-400"
            value={data.confirmPassword}
            onChange={handleOnChange}
          />
          <button className="w-full max-w-[150px] m-auto w-full bg-red-500 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-5 ">
            Sign up
          </button>
        </form>
        <p className="text-left text-sm mt-2">
          Already have account ?{" "}
          <Link to={"/login"} className="text-red-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
