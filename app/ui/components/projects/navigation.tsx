"use client";

import Link from "next/link";
import Image from "next/image";
import store from "@/app/lib/store";
import { usePathname } from "next/navigation";
import { font } from "@/app/ui/fonts";

export default function Navigation() {
  const pathname = usePathname();

  const setActiveClass = (path: string) => {
    return path === pathname ? "active" : "";
  };

  const projectsList = store.projects.map((project) => project.work);

  const list: { name: string | undefined; link: string | undefined }[] = [];

  projectsList.map((project) => {
    return project?.map((workItem) =>
      list.push({
        name: workItem.navigate?.name,
        link: workItem.navigate?.link,
      })
    );
  });

  return (
    <nav className="p-container position-fixed flex justify-between align-center w-100 z-index-20">
      <div
        className="flex p-4 align-center bg-glass-1 border-gradient-blue"
        style={{ height: "54px" }}
      >
        <Link
          href="/"
          className="hover-translateY-1"
          style={{ height: 40, transform: "translateX(-10px)" }}
        >
          <Image
            src="/images/photo.jpg"
            alt="Bruna Boeger"
            width={40}
            height={40}
            className="round-full"
          />
        </Link>
        <h3 className={`${font.logo} ml-1`}>Bruna Boeger</h3>
      </div>
      <div className="flex align-center bg-glass-1 gap-5 p-4 round-2 border-gradient-blue">
        {list.map((project, index) => (
          <Link
            key={index}
            href={project.link || "#"}
            className={`${setActiveClass(
              project.link || "#"
            )} flex align-center gap-2 hover-color-orange-400`}
          >
            {project.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
