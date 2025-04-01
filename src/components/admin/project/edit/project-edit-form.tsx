"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/src/components/ui/form";

import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { toast } from "sonner"

import { Plus, Loader2 } from "lucide-react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { updateProject } from "@/src/data/projects/update-project";

interface ProjectEditFormProps {
  project: ProjectProps;
  projectImages: ProjectImagesProps;
  handleProjectImages: (action: string, type: string, image: string) => void;
}

interface ProjectProps {
  id: string;
  name: string;
  slug: string;
  description: string;
  coverImageSrc: string[];
  thumbImageSrc: string[];
  screens: string[];
}

interface ProjectImagesProps {
  coverImageSrc: string[];
  thumbImageSrc: string[];
  screens: string[];
}

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Informe um nome para o projeto.",
  }),
  slug: z.string().min(2, {
    message: "Informe um slug para o projeto."
  }),
  description: z.string().min(2, {
    message: "Informe uma descrição para o projeto."
  }),
  coverImageSrc: z.any(),
  thumbImageSrc: z.any(),
  screens: z.any(),
})

const ProjectEditForm = ({ project, projectImages, handleProjectImages }: ProjectEditFormProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: project.name,
      slug: project.slug,
      description: project.description,
      coverImageSrc: `/images/projects/${project.slug}/cover.webp`,
      thumbImageSrc: `/images/projects/${project.slug}/thumb.webp`,
      screens: `/images/projects/${project.slug}/screens/screen.webp`,
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { name, slug, description } = values;

    const projectData = {
      id: project.id,
      name,
      slug,
      description,
      coverImageSrc: projectImages.coverImageSrc,
      thumbImageSrc: projectImages.thumbImageSrc,
      screens: projectImages.screens,
    }

    setLoading(true);
    handleSave(projectData);
  }

  const handleSave = async (projectData: ProjectProps) => {
    await updateProject(projectData);
    toast.success("Projeto salvo");
    setLoading(false);
  }

  const router = useRouter();

  const coverImage = form.watch("coverImageSrc");
  const thumbImage = form.watch("thumbImageSrc");
  const screenImage = form.watch("screens");

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="grid grid-cols-4 items-center gap-3">
                <FormLabel className="text-right">Name</FormLabel>
                <FormControl className="col-span-3">
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem className="grid grid-cols-4 items-center gap-3">
                <FormLabel className="text-right">Slug</FormLabel>
                <FormControl className="col-span-3">
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="grid grid-cols-4 items-center gap-3">
                <FormLabel className="text-right">Description</FormLabel>
                <FormControl className="col-span-3">
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="coverImageSrc"
            render={({ field }) => (
              <FormItem className="grid grid-cols-4 items-center gap-3">
                <FormLabel className="text-right">coverImageSrc</FormLabel>
                <div className="col-span-3 flex gap-2">
                  <FormControl>
                    <Input placeholder="Insira uma nova imagem" {...field} />
                  </FormControl>
                  <div className="flex gap-2">
                    <Button type="button" size="icon" onClick={() => handleProjectImages("add", "cover", coverImage)}>
                      <Plus />
                    </Button>
                  </div>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="thumbImageSrc"
            render={({ field }) => (
              <FormItem className="grid grid-cols-4 items-center gap-3">
                <FormLabel className="text-right">coverImageSrc</FormLabel>
                <div className="col-span-3 flex gap-2">
                  <FormControl>
                    <Input placeholder="Insira uma nova imagem" {...field} />
                  </FormControl>
                  <div className="flex gap-2">
                    <Button type="button" size="icon" onClick={() => handleProjectImages("add", "thumb", thumbImage)}>
                      <Plus />
                    </Button>
                  </div>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="screens"
            render={({ field }) => (
              <FormItem className="grid grid-cols-4 items-center gap-3">
                <FormLabel className="text-right">screens</FormLabel>
                <div className="col-span-3 flex gap-2">
                  <FormControl>
                    <Input placeholder="Insira uma nova imagem" {...field} />
                  </FormControl>
                  <div className="flex gap-2">
                    <Button type="button" size="icon" onClick={() => handleProjectImages("add", "screen", screenImage)}>
                      <Plus />
                    </Button>
                  </div>
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

export default ProjectEditForm;