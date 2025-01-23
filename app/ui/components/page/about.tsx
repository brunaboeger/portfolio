import { font } from "@/app/ui/fonts";
import { useEffect, useState } from "react";
import { useWindowWidth } from "@/app/lib/utils";
import store from "@/app/lib/store";
import Image from "next/image";
import IconList from "@/app/ui/components/page/about/icon-list";
import Timeline from "@/app/ui/components/page/about/timeline";

export default function About() {
  const [sortedCards, setSortedCards] = useState<typeof store.about>([]);

  const tabletSize = 768;
  const width = useWindowWidth();
  const isMobile = width < tabletSize;

  // Altera a ordem dos cards quando a view é Mobile
  const sortCards = () => {
    if (isMobile) {
      setSortedCards([
        store.about[0], // Card com id 1
        store.about[1], // Card com id 2
        store.about[3], // Card com id 4
        store.about[4], // Card com id 5
        store.about[2], // Card com id 3
      ]);
    } else {
      setSortedCards(store.about.sort((a, b) => a.id - b.id));
    }
  };

  useEffect(() => {
    sortCards();
  }, [isMobile]);

  return (
    <section
      id="about"
      className="container-default p-container flex-column z-index-10 mb-5"
    >
      <h2 className={`${font.heading} mb-6`}>About</h2>
      <div className="masonry-column-3 gap-5">
        {sortedCards.map((aboutItem, index) => (
          <div
            key={index}
            className="masonry-item hover-translateY-2 flex-column border-gray-100 round-3 h-auto"
          >
            {aboutItem.title || aboutItem.icons ? (
              <div className="p-container">
                {/* Title */}
                <h4 className={`${font.heading} text-light`}>
                  {aboutItem.title}
                </h4>

                {/* Icons and Tools */}
                {aboutItem.icons ? (
                  <div className="flex justify-between mt-5">
                    <div className="flex wrap align-center gap-2">
                      <IconList iconList={aboutItem.icons} />
                    </div>
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
