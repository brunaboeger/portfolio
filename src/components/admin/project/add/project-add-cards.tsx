"use client";

import ProjectAddForm from "@/src/components/admin/project/add/project-add-form";

import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { AlignLeft } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ProjectAddCards = () => {
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
              Novo projeto
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ProjectAddForm onPropertyMenuChange={handlePropertyMenu} />
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
              Lista
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
              Lista
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
              Lista
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

export default ProjectAddCards;