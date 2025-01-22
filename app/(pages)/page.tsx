"use client";

import Navbar from "@/app/ui/components/page/navbar";
import Banner from "@/app/ui/components/page/banner";
import Projects from "@/app/ui/components/page/projects";
import Playground from "@/app/ui/components/page/playground";
import About from "@/app/ui/components/page/about";
import Footer from "@/app/ui/components/page/footer";
import UserDayTime from "@/app/ui/components/daytime";

export default function Page() {
  return (
    <div className="container gap-5 position-relative">
      <Navbar />
      <Banner />
      <Projects />
      <Playground />
      <About />
      <Footer />
      <UserDayTime />
    </div>
  );
}
