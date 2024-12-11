"use client";

import Button from "@/app/ui/components/button";
import Link from "next/link";

export default function LoginForm() {
  function submitForm() {
    console.log("Submitted!");
  }

  function goBack() {
    console.log("Submitted!");
  }

  return (
    <div className="container w-100 p-container">
      <h1 className="heading">Hello!</h1>
      <div className="flex-column mt-5">
        <input
          id="username"
          type="text"
          name="username"
          placeholder="Username"
          className="input mb-4 w-100"
          required
        />
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          className="input mb-6 w-100"
          required
        />
      </div>
      <div className="flex">
        <Button onClick={submitForm}>Log in</Button>
        <Link href="/" className="button w-auto ml-2">
          Go back
        </Link>
      </div>
    </div>
  );
}
