"use client";

import Button from "@/app/ui/components/button";
import Link from "next/link";

export default function Entrance() {
  function guestFunction() {
    console.log("Submitted!");
  }

  return (
    <div className="container w-100 p-container flex-column justify-center text-center">
      <h3>Welcome</h3>
      <h1 className="mtb-3">Wanna see something cool? Click the button below if you are a Guest</h1>
      <p className="paragraph">This is a simulation of the dashboard of this portfolio website. Feel free to explore it.</p>
      <div className="flex mt-6 align-center justify-center">
        <Button onClick={guestFunction}>I'm a Guest</Button>
        <Link href="/admin" className="button ml-2">I own this</Link>
        <Link href="/" className="button ml-2">Go back</Link>
      </div>
    </div>
  )
}