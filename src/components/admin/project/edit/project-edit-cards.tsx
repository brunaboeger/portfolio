"use client";

import ProjectEditForm from "@/src/components/admin/project/edit/project-edit-form";
import ProjectContent from "@/src/components/admin/project/edit/project-content";

import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { Separator } from "@/src/components/ui/separator";

import { Prisma } from "@prisma/client";

import Image from "next/image";

interface ProjectEditCardsProps {
  project: Prisma.ProjectGetPayload<{
    include: {
      content: true
    }
  }>;
}

interface ProjectDataProps {
  coverImageSrc: string[];
  thumbImageSrc: string[];
  screens: string[];
}

// interface ProjectProps {
//   id: string;
//   name: string;
//   slug: string;
//   description: string;
//   coverImageSrc: string[];
//   thumbImageSrc: string[];
//   screens: string[];
//   content?: Prisma.ProjectGetPayload<{
//     include: {
//       content: true
//     }
//   }>
// }

const ProjectEditCards = ({ project }: ProjectEditCardsProps) => {
  const [projectImages, setProjectImages] = useState<ProjectDataProps>({
    coverImageSrc: project.coverImageSrc,
    thumbImageSrc: project.thumbImageSrc,
    screens: project.screens,
  });

  const handleProjectImages = (action: string, type: string, newImage: string) => {
    if (!newImage) return;

    if (action === "add") {
      if (type === "cover") {
        setProjectImages((prevList) => {
          if (!prevList.coverImageSrc.includes(newImage)) {
            return { ...projectImages, coverImageSrc: [...prevList.coverImageSrc, newImage] }
          }
          return prevList;
        });
      }

      if (type === "thumb") {
        setProjectImages((prevList) => {
          if (!prevList.thumbImageSrc.includes(newImage)) {
            return { ...projectImages, thumbImageSrc: [...prevList.thumbImageSrc, newImage] }
          }
          return prevList;
        })
      }

      if (type === "screen") {
        setProjectImages((prevList) => {
          if (!prevList.screens.includes(newImage)) {
            return { ...projectImages, screens: [...prevList.screens, newImage] }
          }
          return prevList;
        })
      }
    }

    if (action === "remove") {
      if (type === "cover") {
        setProjectImages((prevProject) => (
          {
            ...prevProject,
            coverImageSrc: prevProject.coverImageSrc.filter((coverImage) => coverImage !== newImage)
          }
        ));
      }

      if (type === "thumb") {
        setProjectImages((prevProject) => (
          {
            ...prevProject,
            thumbImageSrc: prevProject.thumbImageSrc.filter((thumbImage) => thumbImage !== newImage)
          }
        ));
      }

      if (type === "screen") {
        setProjectImages((prevProject) => (
          {
            ...prevProject,
            screens: prevProject.screens.filter((screenImage) => screenImage !== newImage)
          }
        ));
      }
    }
  }

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>
            Editar {project.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ProjectEditForm project={project} handleProjectImages={handleProjectImages} projectImages={projectImages} />
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>
            Imagens
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="font-sans text-slate-400">coverImageSrc</p>
            {projectImages.coverImageSrc.map((coverImage) => (
              <div key={coverImage} className="flex gap-2 justify-between items-center">
                <div className="flex gap-4 items-center">
                  <Image
                    src={coverImage}
                    alt="Image"
                    width={120}
                    height={120}
                    className="object-cover max-h-[60px] rounded"
                  />
                  <p>{coverImage}</p>
                </div>
                <div>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => handleProjectImages("remove", "cover", coverImage)}
                  >
                    <Trash2 />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div>
            <Separator />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-sans text-slate-400">thumbImageSrc</p>
            {projectImages.thumbImageSrc.map((thumbImage) => (
              <div key={thumbImage} className="flex gap-2 justify-between items-center">
                <div className="flex gap-4 items-center">
                  <Image
                    src={thumbImage}
                    alt="Image"
                    width={120}
                    height={120}
                    className="object-cover max-h-[60px] rounded"
                  />
                  <p>{thumbImage}</p>
                </div>
                <div>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => handleProjectImages("remove", "thumb", thumbImage)}
                  >
                    <Trash2 />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div>
            <Separator />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-sans text-slate-400">screens</p>
            {projectImages.screens.map((screenImage) => (
              <div key={screenImage} className="flex gap-2 justify-between items-center">
                <div className="flex gap-4 items-center">
                  <Image
                    src={screenImage}
                    alt="Image"
                    width={120}
                    height={120}
                    className="object-cover max-h-[60px] rounded"
                  />
                  <p>{screenImage}</p>
                </div>
                <div>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => handleProjectImages("remove", "screen", screenImage)}
                  >
                    <Trash2 />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>
            Conteúdo
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <ProjectContent project={project} />
        </CardContent>
      </Card>
    </>
  );
}

export default ProjectEditCards;