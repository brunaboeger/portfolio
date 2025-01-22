"use client";

import { font } from "@/app/ui/fonts";
import Link from "next/link";
import Button from "@/app/ui/components/button";

export default function Overview({
  heading,
  texts,
  buttonText,
  buttonLink,
}: {
  heading?: string;
  texts?: string[];
  buttonText?: string;
  buttonLink?: string;
}) {
  const nothingHere = () => {
    console.log("nothing here");
  };

  return (
    <section className="container-sm flex-column p-container gap-5 mb-5">
      <h2 className={font.heading}>{heading}</h2>

      {texts?.map((text, index) => (
        <p key={index} className={font.paragraph}>
          {text}
        </p>
      ))}

      <Link href={buttonLink || "#"} target="_blank">
        <Button onClick={nothingHere}>{buttonText}</Button>
      </Link>
    </section>
  );
}
