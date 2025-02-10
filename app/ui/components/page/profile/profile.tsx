import ProfileImage from "@/app/ui/components/page/profile/profile-image";
import ProfileAbout from "@/app/ui/components/page/profile/profile-about";
import ProfileTools from "@/app/ui/components/page/profile/profile-tools";
import ProfileExperiences from "@/app/ui/components/page/profile/profile-experiences";
import ProfileEducation from "@/app/ui/components/page/profile/profile-education";
import store from "@/app/lib/store";
import { ImageProps } from "@/app/lib/types";
import { font } from "@/app/ui/fonts";

export default function About() {
  const sectionTitle = store.home.navbar.links[2].name;
  const navbarLinkLabel = store.home.navbar.links.find(
    (item) => item.name === sectionTitle
  );

  const profile = {
    photo: store.profile[0].photo,
    about: store.profile[1].about,
    experiences: store.profile[2].experiences,
    education: store.profile[3].education,
    tools: store.profile[4].tools,
  };

  const defaultPhoto: ImageProps = {
    src: "",
    alt: "Padrão",
    width: 100,
    height: 100,
    className: "w-100",
  };

  return (
    <section
      id={navbarLinkLabel?.navigateTo.label}
      className="container-default p-container flex-column z-index-10 mb-5"
    >
      <h2 className={`${font.heading} mb-6`}>{sectionTitle}</h2>
      <div className="masonry-column-3 gap-5">
        <ProfileImage photo={profile.photo || defaultPhoto} />
        <ProfileAbout item={profile.about ?? {}} />
        <ProfileTools tools={profile.tools} />
        <ProfileExperiences items={profile.experiences} />
        <ProfileEducation items={profile.education} />
      </div>
    </section>
  );
}
