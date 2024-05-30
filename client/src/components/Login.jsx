import React, { useState } from "react";
import newRequest from "../utils/newRequest";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import toast from "react-hot-toast";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", { username, password });
      // localStorage.setItem("currentUser", JSON.stringify(res.data));
      login(res.data);
      toast.success("user loggedIn successfully");
      navigate("/");
    } catch (err) {
      setError(err.response.data);
      toast.error("Authentication failed. Please check your credentials")
    }
  };

  return (
    <div className="flex pt-24 items-center justify-center">
      <form
        className="w-96 p-8 flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-gray-500 text-2xl mb-4">Sign in</h1>
        <label className="text-gray-500 text-lg" htmlFor="username">
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="johndoe"
          onChange={(e) => setUsername(e.target.value)}
          className="p-4 border border-gray-300"
        />

        <label className="text-gray-500 text-lg" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="p-4 border border-gray-300"
        />
        <button
          type="submit"
          className="bg-green-500 text-white font-semibold text-lg p-4 cursor-pointer"
        >
          Login
        </button>
        {error && <span className="text-red-500 text-sm">{error}</span>}
      </form>
    </div>
  );
}

export default Login;
