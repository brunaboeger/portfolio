import { font } from "@/app/ui/fonts";
import store from "@/app/lib/store";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialIcons = store.profile.find((item) => item.about)?.about?.socials;
  const footerTexts = store.home.footer;

  return (
    <footer className="p-container bg-blue-500">
      <div className="p-container flex-column justify-center align-center color-white text-center">
        <h3 className={`${font.heading} mt-2 mb-3`}>{footerTexts.title}</h3>
        {footerTexts.texts.map((text, index) => (
          <p
            key={index}
            className={`${font.paragraph} text-small mt-2 mw-500x`}
          >
            {text}
          </p>
        ))}
        <div className="social-icons flex gap-4 justify-center mt-5 mb-4">
          {socialIcons?.map((icon, index) => (
            <Link
              href={icon.navigateTo?.link}
              key={index}
              target="_blank"
              className="hover-translateY-1 color-white"
            >
              <Image
                src={icon.image?.src}
                alt={icon.image?.alt}
                width="28"
                height="28"
              />
            </Link>
          ))}
        </div>
        <p className={`${font.copyright} text-small mb-2`}>
          {footerTexts.copyright.title} {currentYear} <br />{" "}
          {footerTexts.copyright.description}
        </p>
      </div>
    </footer>
  );
}
