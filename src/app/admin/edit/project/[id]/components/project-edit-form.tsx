"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/src/components/ui/form";

import { z } from "zod";
import { Input } from "@/src/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/src/components/ui/button";
import { AlignLeft, Plus } from "lucide-react";

interface ProjectProps {
  id: string;
  name: string;
  slug: string;
  description: string;
  coverImageSrc: string[];
  thumbImageSrc: string[];
  screens: string[];
}

interface ProjectEditFormProps {
  project: ProjectProps;
  onPropertyMenuChange: (propertyName: string) => void;
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

const ProjectEditForm = ({ project, onPropertyMenuChange }: ProjectEditFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: project.name,
      slug: project.slug,
      description: project.description,
      coverImageSrc: "",
      thumbImageSrc: "",
      screens: "",
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

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
                    <Button size="icon">
                      <Plus />
                    </Button>
                    <Button variant="outline" size="icon" onClick={() => onPropertyMenuChange("coverImageSrc")}>
                      <AlignLeft />
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
                    <Button size="icon">
                      <Plus />
                    </Button>
                    <Button variant="outline" size="icon" onClick={() => onPropertyMenuChange("thumbImageSrc")}>
                      <AlignLeft />
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
                    <Button size="icon">
                      <Plus />
                    </Button>
                    <Button variant="outline" size="icon" onClick={() => onPropertyMenuChange("screens")}>
                      <AlignLeft />
                    </Button>
                  </div>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}

export default ProjectEditForm;