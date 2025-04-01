"use client";

import type { ProjectContent } from "@prisma/client";
import { Prisma, Experience } from "@prisma/client";
import { updateProjectContent } from "@/src/data/projects/update-project-content"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/src/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select"


import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Button } from "@/src/components/ui/button";
import { toast } from "sonner"

import { Loader2 } from "lucide-react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { addProjectContent } from "@/src/data/projects/add-project-content";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface ProjectContentProps {
  project: Prisma.ProjectGetPayload<{
    include: {
      content: true
    }
  }>;
  experiences: Pick<Experience, "id" | "name">[];
}

interface ProjectDataProps {
  id?: number;
  projectId: string;
  client: string;
  duration: string;
  role: string;
  about: string;
  aboutLinks: string[];
  insights: string;
  insightsImages: string[];
  challenges: string;
  challengesImages: string[];
  results: string;
  resultsImages: string[];
  experienceId: string;
}

const formSchema = z.object({
  client: z.string().min(2),
  duration: z.string().min(2),
  role: z.string().min(2),
  about: z.string(),
  aboutLinks: z.string().array(),
  insights: z.string(),
  insightsImages: z.string().array(),
  challenges: z.string(),
  challengesImages: z.string().array(),
  results: z.string(),
  resultsImages: z.string().array(),
});

const ProjectContent = ({ project, experiences }: ProjectContentProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      client: project.content?.client ?? "",
      duration: project.content?.duration ?? "",
      role: project.content?.role ?? "",
      about: project.content?.about ?? "",
      aboutLinks: project.content?.aboutLinks ?? [],
      insights: project.content?.insights ?? "",
      insightsImages: project.content?.insightsImages ?? [],
      challenges: project.content?.challenges ?? "",
      challengesImages: project.content?.challengesImages ?? [],
      results: project.content?.results ?? "",
      resultsImages: project.content?.resultsImages ?? [],
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const {
      client,
      duration,
      role,
      about,
      aboutLinks,
      insights,
      insightsImages,
      challenges,
      challengesImages,
      results,
      resultsImages,
    } = values;

    const selectedExperience = experiences.find((experience) => experience.id === client);
    const clientName = selectedExperience ? selectedExperience.name : "";

    const projectData = {
      projectId: project.id,
      experienceId: client,
      client: clientName,
      duration,
      role,
      about,
      aboutLinks,
      insights,
      insightsImages,
      challenges,
      challengesImages,
      results,
      resultsImages,
    }

    setLoading(true);

    handleSave(projectData);
  }

  const handleSave = async (projectData: ProjectDataProps) => {
    if (!project.content) {
      await addProjectContent(projectData);
    } else {
      const projectDataWithId = {
        ...projectData,
        id: project.content!.id,
      }
      await updateProjectContent(projectDataWithId);
    }

    toast.success("Conteúdo salvo");
    setLoading(false);
  };

  const router = useRouter();

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Client */}
          <FormField
            control={form.control}
            name="client"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>client</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl className="col-span-2">
                    <SelectTrigger>
                      <SelectValue placeholder="Cliente..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-slate-900">
                    {experiences.map((experience) => (
                      <SelectItem key={experience.id} value={experience.id}>{experience.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Duration */}
          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>duration</FormLabel>
                <FormControl>
                  <Input placeholder="Duração..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Role */}
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>role</FormLabel>
                <FormControl>
                  <Input placeholder="Cargo..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* About */}
          <FormField
            control={form.control}
            name="about"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>about</FormLabel>
                <div className="col-span-3 flex gap-2">
                  <FormControl>
                    <Textarea placeholder="Sobre..." className="h-56" {...field} />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Insights */}
          <FormField
            control={form.control}
            name="insights"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>insights</FormLabel>
                <div className="col-span-3 flex gap-2">
                  <FormControl>
                    <Textarea placeholder="Insights..." className="h-56" {...field} />
                  </FormControl>
                  <div className="flex gap-2">

                  </div>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Challenges */}
          <FormField
            control={form.control}
            name="challenges"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>challenges</FormLabel>
                <div className="col-span-3 flex gap-2">
                  <FormControl>
                    <Textarea placeholder="Desafios..." className="h-56" {...field} />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Results */}
          <FormField
            control={form.control}
            name="results"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>results</FormLabel>
                <div className="col-span-3 flex gap-2">
                  <FormControl>
                    <Textarea placeholder="Resultados..." className="h-56" {...field} />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Actions */}
          <div className="flex justify-center gap-3 pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
            >
              Cancelar
            </Button>
            <Button type="submit">
              {loading && (
                <Loader2 className="animate-spin" />
              )}
              Salvar conteúdo
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default ProjectContent;