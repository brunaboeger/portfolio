"use client";

import Navbar from "@/app/ui/components/page/navbar";
import Banner from "@/app/ui/components/page/banner";
import Content from "@/app/ui/components/page/content";
import FloatingBar from "@/app/ui/components/floating-bar";

export default function Page() {
  const windowWidth = window.innerWidth;
  const tabletView = 768;

  return (
    <div className="container">
      <Navbar />
      <p className="p-container-lr">Window width: {windowWidth}</p>
      {windowWidth > tabletView ? (
        <>
          <Banner />
          <Content />
        </>
      ) : (
        <FloatingBar />
      )}
    </div>
  );
}
