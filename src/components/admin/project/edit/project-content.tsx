"use client";

import type { ProjectContent } from "@prisma/client";
import { Prisma } from "@prisma/client";
import { updateProjectContent } from "@/src/data/projects/update-project-content"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/src/components/ui/form";

import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Button } from "@/src/components/ui/button";

import { Loader2 } from "lucide-react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { addProjectContent } from "@/src/data/projects/add-project-content";
import { useState } from "react";

interface ProjectContentProps {
  project: Prisma.ProjectGetPayload<{
    include: {
      content: true
    }
  }>;
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

const ProjectContent = ({ project }: ProjectContentProps) => {
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

    const projectData = {
      projectId: project.id,
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

    setLoading(false);
  };

  const router = useRouter();

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="client"
            render={({ field }) => (
              <FormItem className="grid grid-cols-4 items-center gap-3">
                <FormLabel className="text-right">client</FormLabel>
                <FormControl className="col-span-3">
                  <Input placeholder="Cliente..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem className="grid grid-cols-4 items-center gap-3">
                <FormLabel className="text-right">duration</FormLabel>
                <FormControl className="col-span-3">
                  <Input placeholder="Duração..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="grid grid-cols-4 items-center gap-3">
                <FormLabel className="text-right">role</FormLabel>
                <FormControl className="col-span-3">
                  <Input placeholder="Cargo..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="about"
            render={({ field }) => (
              <FormItem className="grid grid-cols-4 items-center gap-3">
                <FormLabel className="text-right">about</FormLabel>
                <div className="col-span-3 flex gap-2">
                  <FormControl>
                    <Textarea placeholder="Sobre..." {...field} />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* <FormField
            control={form.control}
            name="aboutLinks"
            render={({ field }) => (
              <FormItem className="grid grid-cols-4 items-center gap-3">
                <FormLabel className="text-right">aboutLinks</FormLabel>
                <div className="col-span-3 flex gap-2">
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <div className="flex gap-2">
                    <Button type="button" size="icon">
                      <Plus />
                    </Button>
                  </div>
                </div>
                <FormMessage />
              </FormItem>
            )}
          /> */}

          <FormField
            control={form.control}
            name="insights"
            render={({ field }) => (
              <FormItem className="grid grid-cols-4 items-center gap-3">
                <FormLabel className="text-right">insights</FormLabel>
                <div className="col-span-3 flex gap-2">
                  <FormControl>
                    <Textarea placeholder="Insights..." {...field} />
                  </FormControl>
                  <div className="flex gap-2">

                  </div>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="challenges"
            render={({ field }) => (
              <FormItem className="grid grid-cols-4 items-center gap-3">
                <FormLabel className="text-right">challenges</FormLabel>
                <div className="col-span-3 flex gap-2">
                  <FormControl>
                    <Textarea placeholder="Desafios..." {...field} />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="results"
            render={({ field }) => (
              <FormItem className="grid grid-cols-4 items-center gap-3">
                <FormLabel className="text-right">results</FormLabel>
                <div className="col-span-3 flex gap-2">
                  <FormControl>
                    <Textarea placeholder="Resultados..." {...field} />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

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
              Salvar projeto
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default ProjectContent;