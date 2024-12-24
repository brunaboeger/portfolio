"use client";

import Navbar from "@/app/ui/components/page/navbar";
import Banner from "@/app/ui/components/page/banner";
import Content from "@/app/ui/components/page/content";
import FloatingBar from "../ui/components/floating-bar";

import Paleta from "@/app/ui/components/paleta";

export default function Page() {
  return (
    <div className="container">
      <Navbar />
      <Banner />
      <Content />
      <FloatingBar />

      <Paleta />
    </div>
  );
}
