"use client";

import Navbar from "@/app/ui/components/page/navbar";
import Links from "@/app/ui/components/page/links";
import Banner from "@/app/ui/components/page/banner";
import Content from "@/app/ui/components/page/content";
import Footer from "@/app/ui/components/page/footer";

export default function Page() {
  return (
    <div className="container grid-template-areas gap-5 position-relative">
      <Navbar />
      <Banner />
      <Content />
      <Links />
      <Footer />
    </div>
  );
}
