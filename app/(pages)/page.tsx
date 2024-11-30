"use client";

import Navbar from "@/app/ui/components/navbar";
import Banner from "@/app/ui/components/banner";
import Content from "@/app/ui/components/content";
import Paleta from "@/app/ui/components/paleta";

export default function Page() {
  return (
    <div className="container">
      <Navbar />
      <Banner />
      <Content />
      <Paleta />
    </div>
  );
}
