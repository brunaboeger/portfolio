import { font } from "@/app/ui/fonts";
import store from "@/app/lib/store";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const icons = store.socialIcons;

  return (
    <footer className="grid-area:footer p-container bg-blue-500">
      <div className="p-container flex-column justify-center color-white text-center">
        <h3 className={`${font.heading} mt-2`}>Let’s get in touch</h3>
        <p className={`${font.paragraph} text-small mt-2`}>
          I'm always open to new opportunities and collaborations. <br /> Feel
          free to get in touch. I'll be happy to reply to you.
        </p>
        <div className="social-icons flex gap-4 justify-center mtb-5">
          {icons.map((icon, index) => (
            <Link href={icon.navigateTo} key={index} target="_blank">
              <Image
                src={icon.iconSrc}
                alt={icon.iconAlt}
                width="28"
                height="28"
              />
            </Link>
          ))}
        </div>
        <p className={`${font.copyright} text-small mb-2`}>
          Copyright &copy; {currentYear} <br /> Made by myself with love and
          dedication.
        </p>
      </div>
    </footer>
  );
}
