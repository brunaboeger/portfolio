"use client";

import { font } from "@/app/ui/fonts";
import Link from "next/link";
import Button from "@/app/ui/components/button";

export default function Content({
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
    <section className="container-sm flex-column p-container gap-4">
      <h2 className={font.headingSm}>{heading}</h2>

      <div className="flex-column gap-3">
        {texts?.map((text, index) => (
          <p key={index} className={font.paragraph}>
            {text}
          </p>
        ))}
      </div>

      {buttonLink || buttonText ? (
        <Link href={buttonLink || "#"} target="_blank">
          <Button onClick={nothingHere}>{buttonText}</Button>
        </Link>
      ) : null}
    </section>
  );
}
