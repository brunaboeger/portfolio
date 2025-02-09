import ProfileCard from "@/app/ui/components/card-outline";
import Image from "next/image";
import { ImageProps } from "@/app/lib/types";

interface ProfileImageProps {
  photo: ImageProps;
}

export default function ProfileImage({ photo }: ProfileImageProps) {
  return (
    <ProfileCard>
      <Image
        width={photo.width}
        height={photo.height}
        src={photo.src}
        alt={photo.alt}
        className={`${photo.className} object-cover round-3`}
      />
    </ProfileCard>
  );
}
