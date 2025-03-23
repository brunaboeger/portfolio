import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card"

import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { Pencil, Plus } from "lucide-react";
import { getProjects } from "@/src/data/projects/get-projects";
import { getExperiences } from "@/src/data/experiences/get-experiences";
import { getStudies } from "@/src/data/studies/get-studies";

const Admin = async () => {
  const projects = await getProjects();
  const experiences = await getExperiences();
  const studies = await getStudies();

  return (
    <div className="h-full flex justify-center items-center">
      <div className="w-full grid grid-cols-3 gap-6">

        <Card className="w-full">
          <CardHeader>
            <div className="flex gap-3 justify-between items-end">
              <div className="flex flex-col gap-3">
                <CardTitle className="font-sans">Projetos</CardTitle>
                <CardDescription className="font-sans text-slate-500">Lista com todos os projetos.</CardDescription>
              </div>
              <Button size="icon">
                <Link href="/admin/add">
                  <Plus />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {projects.map((project) => (
              <div key={project.id} className="flex justify-between items-center gap-4">
                <p className="font-sans">{project.name}</p>
                <Button variant="outline" size="icon">
                  <Link href={`/admin/${project.id}/edit`}>
                    <Pencil />
                  </Link>
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <div className="flex gap-3 justify-between items-end">
              <div className="flex flex-col gap-3">
                <CardTitle className="font-sans">Experiências</CardTitle>
                <CardDescription className="font-sans text-slate-500">Lista com todos as experiências.</CardDescription>
              </div>
              <Button size="icon">
                <Link href="/admin/add">
                  <Plus />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {experiences.map((experience) => (
              <div key={experience.id} className="flex justify-between items-center gap-4">
                <p className="font-sans">{experience.name}</p>
                <Button variant="outline" size="icon">
                  <Link href={`/admin/${experience.id}/edit`}>
                    <Pencil />
                  </Link>
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <div className="flex gap-3 justify-between items-end">
              <div className="flex flex-col gap-3">
                <CardTitle className="font-sans">Estudos</CardTitle>
                <CardDescription className="font-sans text-slate-500">Lista com todos os estudos.</CardDescription>
              </div>
              <Button size="icon">
                <Link href="/admin/add">
                  <Plus />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {studies.map((study) => (
              <div key={study.id} className="flex justify-between items-center gap-4">
                <p className="font-sans">{study.name}</p>
                <Button variant="outline" size="icon">
                  <Link href={`/admin/${study.id}/edit`}>
                    <Pencil />
                  </Link>
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Admin;