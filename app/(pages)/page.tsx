"use client";

import Navbar from "@/app/ui/components/page/navbar";
import Hero from "@/app/ui/components/page/hero";
import Projects from "@/app/ui/components/page/projects";
import Profile from "@/app/ui/components/page/profile/profile";
import Footer from "@/app/ui/components/page/footer";
import UserDayTime from "@/app/ui/components/daytime";

export default function Page() {
  return (
    <div className="container gap-5 position-relative">
      <Navbar />
      <Hero />
      <Projects />
      <Profile />
      <Footer />
      <UserDayTime />
    </div>
  );
}
