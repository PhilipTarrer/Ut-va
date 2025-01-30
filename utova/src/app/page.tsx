"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // A simple stub function to illustrate form handling
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Insert real authentication logic here
    console.log("Login with", { email, password });
  };

  return (
    <main className="text-center">
      <h1
        className="mb-1"
        style={{ fontFamily: "'MuseoModerno', sans-serif", fontSize: "8rem" }}
      >
        Utova
      </h1>
      <h4
        className="mb-8"
        style={{ fontFamily: "'MuseoModerno', sans-serif", fontSize: "2rem" }}
      >
        The better health app
      </h4>

      <form onSubmit={handleLogin} className="flex flex-col items-center gap-4">
        {/* Email Field */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="
            w-64
            border
            border-black
            px-3
            py-2
            bg-white
            text-black
            placeholder-gray-400
            focus:outline-none
            focus:ring-1
            focus:ring-black
            rounded
          "
        />

        {/* Password Field */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="
            w-64
            border
            border-black
            px-3
            py-2
            bg-white
            text-black
            placeholder-gray-400
            focus:outline-none
            focus:ring-1
            focus:ring-black
            rounded
          "
        />

        {/* Login Button */}
        <button
          type="submit"
          className="
            w-64
            border
            border-black
            bg-black
            text-white
            px-4
            py-2
            font-semibold
            rounded
            transition
            duration-200
            hover:bg-white
            hover:text-black
          "
        >
          Login
        </button>
      </form>

      {/* Bottom Register Link */}
      <p className="mt-4">
        Don’t have an account?{" "}
        <Link href="/register" className="underline font-semibold">
          Register!
        </Link>
      </p>
    </main>
  );
}
