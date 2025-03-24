"use client";

import ProjectAddForm from "@/src/components/admin/project/add/project-add-form";

import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { AlignLeft, Trash2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface ProjectDataProps {
  coverImageSrc: string[];
  thumbImageSrc: string[];
  screens: string[];
}

const ProjectAddCards = () => {
  const [propertyName, setPropertyName] = useState<string>("Propriedade");
  const [togglePropertyMenu, setTogglePropertyMenu] = useState<boolean>(false);
  const [newCoverImageList, setNewCoverImageList] = useState<string[]>([]);
  const [newThumbImageList, setNewThumbImageList] = useState<string[]>([]);
  const [newScreenImageList, setNewScreenImageList] = useState<string[]>([]);
  const [projectImages, setProjectImages] = useState<ProjectDataProps>({
    coverImageSrc: newCoverImageList,
    thumbImageSrc: newThumbImageList,
    screens: newScreenImageList
  });

  const handlePropertyMenu = (newPropertyName: string) => {
    setPropertyName(newPropertyName);
    setTogglePropertyMenu(true);

    if (newPropertyName === propertyName) {
      setTogglePropertyMenu(!togglePropertyMenu);
    }
  }

  const addCoverImage = (newCoverImage: string) => {
    if (!newCoverImage) return;
    setNewCoverImageList((prevList) => {
      if (!prevList.includes(newCoverImage)) {
        setProjectImages({ ...projectImages, coverImageSrc: [...prevList, newCoverImage] });
        return [...prevList, newCoverImage];
      }
      return prevList;
    });
  }

  const removeCoverImage = (coverImageToRemove: string) => {
    setNewCoverImageList((prevList) =>
      prevList.filter((coverImage) => coverImage !== coverImageToRemove)
    );
    setProjectImages((prevProject) => ({ ...prevProject, coverImageSrc: prevProject.coverImageSrc.filter((coverImage) => coverImage !== coverImageToRemove) }));
  }

  const addThumbImage = (newThumbImage: string) => {
    if (!newThumbImage) return;
    setNewThumbImageList((prevList) => {
      if (!prevList.includes(newThumbImage)) {
        setProjectImages({ ...projectImages, thumbImageSrc: [...prevList, newThumbImage] });
        return [...prevList, newThumbImage];
      }
      return prevList;
    });
  }

  const removeThumbImage = (thumbImageToRemove: string) => {
    setNewThumbImageList((prevList) =>
      prevList.filter((thumbImage) => thumbImage !== thumbImageToRemove)
    );
    setProjectImages((prevProject) => ({ ...prevProject, thumbImageSrc: prevProject.thumbImageSrc.filter((thumbImage) => thumbImage !== thumbImageToRemove) }));
  }

  const addScreenImage = (newScreenImage: string) => {
    if (!newScreenImage) return;
    setNewScreenImageList((prevList) => {
      if (!prevList.includes(newScreenImage)) {
        setProjectImages({ ...projectImages, screens: [...prevList, newScreenImage] });
        return [...prevList, newScreenImage];
      }
      return prevList;
    })
  }

  const removeScreenImage = (screenImageToRemove: string) => {
    setNewScreenImageList((prevList) =>
      prevList.filter((screenImage) => screenImage !== screenImageToRemove)
    );
    setProjectImages((prevProject) => ({ ...prevProject, screens: prevProject.screens.filter((screenImage) => screenImage !== screenImageToRemove) }));
  }

  const route = useRouter();

  return (
    <>
      <div className="w-full flex gap-6">
        <Card className="w-1/2">
          <CardHeader>
            <CardTitle>
              Novo projeto
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ProjectAddForm
              onPropertyMenuChange={handlePropertyMenu}
              addCoverImage={addCoverImage}
              addThumbImage={addThumbImage}
              addScreenImage={addScreenImage}
              projectImages={projectImages}
            />
          </CardContent>
        </Card>

        {togglePropertyMenu === false && (
          <Card className="w-1/2 flex flex-col">
            <CardHeader>
              <CardTitle>
                Propriedade
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 flex-grow items-center justify-center text-slate-500">
              <AlignLeft size={40} />
              <p className="text-center font-sans">
                Selecione uma das propriedades ao lado <br />
                para mostrar sua lista de conteúdos
              </p>
            </CardContent>
          </Card>
        )}

        {propertyName === "coverImageSrc" && togglePropertyMenu === true && (
          <Card className="w-1/2 flex flex-col">
            <CardHeader>
              <CardTitle>
                {propertyName}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 flex-grow">
              {newCoverImageList.map((coverImage) => (
                <div key={coverImage} className="flex items-center justify-between">
                  <p>{coverImage}</p>
                  <Button size="icon" variant="outline" onClick={() => removeCoverImage(coverImage)}>
                    <Trash2 />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {propertyName === "thumbImageSrc" && togglePropertyMenu === true && (
          <Card className="w-1/2 flex flex-col">
            <CardHeader>
              <CardTitle>
                {propertyName}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 flex-grow">
              {newThumbImageList.map((thumbImage) => (
                <div key={thumbImage} className="flex items-center justify-between">
                  <p>{thumbImage}</p>
                  <Button size="icon" variant="outline" onClick={() => removeThumbImage(thumbImage)}>
                    <Trash2 />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {propertyName === "screens" && togglePropertyMenu === true && (
          <Card className="w-1/2 flex flex-col">
            <CardHeader>
              <CardTitle>
                {propertyName}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 flex-grow">
              {newScreenImageList.map((screenImage) => (
                <div key={screenImage} className="flex items-center justify-between">
                  <p>{screenImage}</p>
                  <Button size="icon" variant="outline" onClick={() => removeScreenImage(screenImage)}>
                    <Trash2 />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </div>

      <Card className="w-full flex p-6 gap-4 justify-center">
        <Button variant="outline" onClick={() => route.back()}>Cancelar</Button>
        <div>
          {projectImages.coverImageSrc.map((coverImage) => (
            <p key={coverImage}>{coverImage}</p>
          ))}
        </div>
        <div>
          {projectImages.thumbImageSrc.map((coverImage) => (
            <p key={coverImage}>{coverImage}</p>
          ))}
        </div>
        <div>
          {projectImages.screens.map((coverImage) => (
            <p key={coverImage}>{coverImage}</p>
          ))}
        </div>
      </Card>
    </>
  );
}

export default ProjectAddCards;