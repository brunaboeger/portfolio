"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/src/components/ui/form";

import { z } from "zod";
import { Input } from "@/src/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/src/components/ui/button";
import { Plus } from "lucide-react";

import { createProject } from "@/src/data/projects/create-project";

import { redirect, useRouter } from "next/navigation";

interface ProjectAddFormProps {
  handleProjectImages: (action: string, type: string, newImage: string) => void;
  projectImages: ProjectImagesProps;
}

interface ProjectImagesProps {
  coverImageSrc: string[];
  thumbImageSrc: string[];
  screens: string[];
}

interface ProjectDataProps {
  name: string;
  slug: string;
  description: string;
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

const ProjectAddForm = ({
  projectImages,
  handleProjectImages
}: ProjectAddFormProps) => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      slug: "",
      description: "",
      coverImageSrc: "/images/projects/",
      thumbImageSrc: "/images/projects/",
      screens: "/images/projects/",
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { name, slug, description } = values;

    const projectData = {
      name,
      slug,
      description,
      coverImageSrc: projectImages.coverImageSrc,
      thumbImageSrc: projectImages.thumbImageSrc,
      screens: projectImages.screens
    }

    handleSave(projectData);
  }

  const handleSave = async (projectData: ProjectDataProps) => {
    await createProject(projectData);
    redirect("/admin");
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
              <FormItem className="grid grid-cols-8 items-center gap-3">
                <FormLabel className="text-right">name</FormLabel>
                <FormControl className="col-span-7">
                  <Input placeholder="Informe um nome..." {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem className="grid grid-cols-8 items-center gap-3">
                <FormLabel className="text-right">slug</FormLabel>
                <FormControl className="col-span-7">
                  <Input placeholder="Informe um slug..." {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="grid grid-cols-8 items-center gap-3">
                <FormLabel className="text-right">description</FormLabel>
                <FormControl className="col-span-7">
                  <Input placeholder="Informe uma descrição..." {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="coverImageSrc"
            render={({ field }) => (
              <FormItem className="grid grid-cols-8 items-center gap-3">
                <FormLabel className="text-right">coverImageSrc</FormLabel>
                <div className="col-span-7 flex gap-2">
                  <FormControl>
                    <Input placeholder="Insira uma nova imagem" {...field} />
                  </FormControl>
                  <div>
                    <Button type="button" size="icon" onClick={() => handleProjectImages("add", "cover", coverImage)}>
                      <Plus />
                    </Button>
                  </div>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="thumbImageSrc"
            render={({ field }) => (
              <FormItem className="grid grid-cols-8 items-center gap-3">
                <FormLabel className="text-right">thumbImageSrc</FormLabel>
                <div className="col-span-7 flex gap-2">
                  <FormControl>
                    <Input placeholder="Insira uma nova imagem" {...field} />
                  </FormControl>
                  <div>
                    <Button type="button" size="icon" onClick={() => handleProjectImages("add", "thumb", thumbImage)}>
                      <Plus />
                    </Button>
                  </div>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="screens"
            render={({ field }) => (
              <FormItem className="grid grid-cols-8 items-center gap-3">
                <FormLabel className="text-right">screens</FormLabel>
                <div className="col-span-7 flex gap-2">
                  <FormControl>
                    <Input placeholder="Insira uma nova imagem" {...field} />
                  </FormControl>
                  <div>
                    <Button type="button" size="icon" onClick={() => handleProjectImages("add", "screen", screenImage)}>
                      <Plus />
                    </Button>
                  </div>
                </div>
              </FormItem>
            )}
          />

          <div className="flex justify-center gap-3 pt-6">
            <Button type="button" variant="outline" onClick={() => router.back()}>Cancelar</Button>
            <Button type="submit">Salvar projeto</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default ProjectAddForm;