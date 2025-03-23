"use client";

import ProjectEditForm from "@/src/app/admin/edit/project/[id]/components/project-edit-form";

import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { AlignLeft, Trash2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface ProjectProps {
  id: string;
  name: string;
  slug: string;
  description: string;
  coverImageSrc: string[];
  thumbImageSrc: string[];
  screens: string[];
}

interface ProjectCardsProps {
  project: ProjectProps;
}

const ProjectCards = ({ project }: ProjectCardsProps) => {
  const [propertyName, setPropertyName] = useState<string>("Propriedade");
  const [togglePropertyMenu, setTogglePropertyMenu] = useState<boolean>(false);

  const handlePropertyMenu = (newPropertyName: string) => {
    setPropertyName(newPropertyName);
    setTogglePropertyMenu(true);

    if (newPropertyName === propertyName) {
      setTogglePropertyMenu(!togglePropertyMenu);
    }
  }

  const route = useRouter();

  return (
    <>
      <div className="w-full flex gap-6">
        <Card className="w-1/2">
          <CardHeader>
            <CardTitle>
              Editar {project.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ProjectEditForm project={project} onPropertyMenuChange={handlePropertyMenu} />
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
              {project.coverImageSrc.map((imageSrc) => (
                <div key={imageSrc} className="flex items-center justify-between">
                  <p>{imageSrc}</p>
                  <Button size="icon" variant="outline">
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
              {project.thumbImageSrc.map((imageSrc) => (
                <div key={imageSrc} className="flex items-center justify-between">
                  <p>{imageSrc}</p>
                  <Button size="icon" variant="outline">
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
              {project.screens.map((imageSrc) => (
                <div key={imageSrc} className="flex items-center justify-between">
                  <p>{imageSrc}</p>
                  <Button size="icon" variant="outline">
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
        <Button>Salvar</Button>
      </Card>
    </>
  );
}

export default ProjectCards;