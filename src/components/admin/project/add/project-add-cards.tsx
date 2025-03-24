"use client";

import ProjectAddForm from "@/src/components/admin/project/add/project-add-form";

import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { Separator } from "@/src/components/ui/separator";

interface ProjectDataProps {
  coverImageSrc: string[];
  thumbImageSrc: string[];
  screens: string[];
}

const ProjectAddCards = () => {
  const [projectImages, setProjectImages] = useState<ProjectDataProps>({
    coverImageSrc: [],
    thumbImageSrc: [],
    screens: []
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
            Novo projeto
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ProjectAddForm
            projectImages={projectImages}
            handleProjectImages={handleProjectImages}
          />
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardContent className="flex pt-6 gap-6">
          <div className="w-1/3 flex flex-col gap-2">
            <p className="font-sans text-slate-400">coverImageSrc</p>
            {projectImages.coverImageSrc.map((coverImage) => (
              <div key={coverImage} className="flex gap-2 justify-between items-center">
                <p>{coverImage}</p>
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
            <Separator orientation="vertical" />
          </div>
          <div className="w-1/3 flex flex-col gap-2">
            <p className="font-sans text-slate-400">thumbImageSrc</p>
            {projectImages.thumbImageSrc.map((thumbImage) => (
              <div key={thumbImage} className="flex gap-2 justify-between items-center">
                <p>{thumbImage}</p>
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
            <Separator orientation="vertical" />
          </div>
          <div className="w-1/3 flex flex-col gap-2">
            <p className="font-sans text-slate-400">screens</p>
            {projectImages.screens.map((screenImage) => (
              <div key={screenImage} className="flex gap-2 justify-between items-center">
                <p>{screenImage}</p>
                <div>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => handleProjectImages("remove", "thumb", screenImage)}
                  >
                    <Trash2 />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default ProjectAddCards;