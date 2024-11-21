"use client";

import Navbar from "@/app/ui/components/navbar";
import Banner from "@/app/ui/components/banner";
import Content from "@/app/ui/components/content";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Banner />
      <Content />
    </div>
  );
}
