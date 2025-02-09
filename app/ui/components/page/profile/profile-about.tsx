import ProfileCard from "@/app/ui/components/card-outline";
import Image from "next/image";
import Link from "next/link";
import { font } from "@/app/ui/fonts";
import { SocialIconsProps } from "@/app/lib/types";

interface ItemProps {
  name?: string;
  role?: string;
  texts?: string[];
  socials?: SocialIconsProps[];
}

export default function ProfileImage({ item }: { item: ItemProps }) {
  return (
    <ProfileCard>
      <div className="p-container">
        {item.name && (
          <h4 className={`${font.heading} text-light mb-4`}>{item.name}</h4>
        )}

        {item.texts ? (
          <>
            {item.texts.map((text, index) => (
              <p key={index} className={`${font.paragraph} mb-3`}>
                {text}
              </p>
            ))}
          </>
        ) : null}

        {item.socials ? (
          <div className="flex justify-between mt-5">
            <div className="flex wrap align-center gap-1">
              {item.socials.map((icon, index) => (
                <Link
                  key={index}
                  href={icon.navigateTo?.link || ""}
                  target="_blank"
                  className="flex mr-2 position-relative hover-translateY-1"
                >
                  <Image
                    src={icon.image?.src || "/icons/cat.svg"}
                    alt={icon.image?.alt || "Ícone"}
                    width={icon.image?.width || 32}
                    height={icon.image?.height || 32}
                    className={icon.image?.className}
                  />
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </ProfileCard>
  );
}
