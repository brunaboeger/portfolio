import { font } from "@/app/ui/fonts";
import store from "@/app/lib/store";
import Image from "next/image";
import IconList from "@/app/ui/components/page/about/icon-list";
import Timeline from "@/app/ui/components/page/about/timeline";

export default function About() {
  return (
    <section
      id="about"
      className="p-container-top-0 flex-column z-index-10 mb-5"
    >
      <h2 className={`${font.heading} mb-5`}>About</h2>
      <div className="masonry gap-5">
        {store.about.map((aboutItem, index) => (
          <div
            key={index}
            className="masonry-item hover-translateY-2 flex-column border-gray-600 round-3 h-auto"
          >
            {aboutItem.title || aboutItem.icons ? (
              <div className="p-container">
                {/* Title */}
                <h4 className={`${font.heading} text-light`}>
                  {aboutItem.title}
                </h4>

                {/* Description */}
                {/* {aboutItem.description ? (
                  <p className={`${font.paragraph} mt-3`}>
                    {aboutItem.description}
                  </p>
                ) : null} */}

                {/* Icons and Tools */}
                {aboutItem.icons ? (
                  <div className="flex justify-between mt-5">
                    {aboutItem.icons ? (
                      <div className="flex align-center gap-3">
                        <IconList iconList={aboutItem.icons} />
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>
            ) : null}

            {/* Timeline */}
            {aboutItem.timeline ? (
              <Timeline timeline={aboutItem.timeline} />
            ) : null}

            {/* Image */}
            {aboutItem.image ? (
              <Image
                src={aboutItem.image.src}
                alt={aboutItem.image.alt}
                width={aboutItem.image.width}
                height={aboutItem.image.height}
                className="w-100 object-cover round-3"
              />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
