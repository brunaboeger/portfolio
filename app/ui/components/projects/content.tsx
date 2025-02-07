"use client";

import Link from "next/link";
import Button from "@/app/ui/components/button";
import { font } from "@/app/ui/fonts";
import { NavigateToProps } from "@/app/lib/types";

export default function Content({
  heading,
  texts,
  lists,
  actions,
}: {
  heading?: string;
  texts?: string[];
  lists?: string[];
  actions?: NavigateToProps[];
}) {
  return (
    <section className="container-sm flex-column p-container gap-4">
      <h2 className={font.headingSm}>{heading}</h2>

      {texts ? (
        <div className="flex-column gap-3">
          {texts?.map((text, index) => (
            <p key={index} className={font.paragraph}>
              {text}
            </p>
          ))}
        </div>
      ) : null}

      {lists ? (
        <ul className="flex-column gap-3">
          {lists.map((listItem, index) => (
            <li key={index} className={`${font.paragraph} flex align-center`}>
              <p className="mr-2 mb-1">👉</p>
              <p>{listItem}</p>
            </li>
          ))}
        </ul>
      ) : null}

      {actions ? (
        <div className="flex gap-2">
          {actions.map((action, index) => (
            <Button
              key={index}
              navigateTo={action}
              ariaLabel={action?.ariaLabel || ""}
            >
              {action?.text}
            </Button>
          ))}
        </div>
      ) : null}
    </section>
  );
}
