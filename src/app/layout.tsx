import "@/src/app/globals.scss";
import { font } from "@/src/app/fonts";
import { Suspense } from "react";
import { Separator } from "@/src/components/ui/separator";
import { getSocials } from "@/src/data/socials/get-socials";
import { notFound } from "next/navigation";
import { AtSign, FolderOpen, Github, House, Linkedin, ScrollText, UserRound } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/ui/tooltip"


import Loading from "@/src/app/loading";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Portfolio Bruna Boeger",
  description: "Bruna Boeger - UX/UI Developer Portfolio",
  authors: [{ "name": "Bruna Boeger" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const socialIcons = await getSocials();
  const socialIconSize = 16;

  if (!socialIcons) return notFound();

  return (
    <html lang="pt-br">
      <body className={`${font.paragraph} text-slate-50 scroll-smooth antialiased relative bg-slate-950 bg-gradient overflow-hidden`}>
        <Suspense fallback={<Loading />}>
          {/* Top */}
          <div className="fixed w-full p-1 z-30">
            <div className="h-[32px] flex">
              <div className="w-[32px] h-[32px] border flex items-center justify-center">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="h-[10px] w-[10px] animate-pulse border border-primary rounded-full flex items-center justify-center">
                        <div className="w-[4px] h-[4px] bg-primary rounded-full animate-pulse" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="bg-primary text-slate-800 ml-2">
                      <p>Open to Work</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex-grow border-y text-center flex justify-center gap-3 items-center p-1">
                <p className="text-slate-400">bruna boeger</p>
                <Separator orientation="vertical" className="border" />
                <p className="text-slate-400">designer & developer</p>
              </div>
              <div className="w-[32px] h-[32px] border" />
            </div>
          </div>

          {/* Left */}
          <div className="fixed h-full p-1 z-20">
            <div className="h-full w-[32px] border-x flex flex-col gap-6 items-center justify-center text-slate-500">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="/#home"
                      className="hover:text-primary transition-colors duration-500"
                    >
                      <House size={16} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent className="bg-primary text-slate-800 ml-2">
                    <p>Homepage</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="/#projects"
                      className="hover:text-primary transition-colors duration-500"
                    >
                      <FolderOpen size={16} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent className="bg-primary text-slate-800 ml-2">
                    <p>Projects</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="/#about"
                      className="hover:text-primary transition-colors duration-500"
                    >
                      <UserRound size={16} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent className="bg-primary text-slate-800 ml-2">
                    <p>About</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* Right */}
          <div className="fixed h-full p-1 z-20 right-0">
            <div className="h-full w-[32px] border-x flex flex-col gap-6 items-center justify-center text-slate-500">
              {socialIcons.map((socialIcon) => (
                <TooltipProvider key={socialIcon.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link className="hover:text-primary transition-colors duration-500" href={socialIcon.link || ""} target="_blank">
                        {socialIcon.name === "Email" && (
                          <AtSign size={socialIconSize} />
                        )}
                        {socialIcon.name === "Github" && (
                          <Github size={socialIconSize} />
                        )}
                        {socialIcon.name === "LinkedIn" && (
                          <Linkedin size={socialIconSize} />
                        )}
                        {socialIcon.name === "Curriculum" && (
                          <ScrollText size={socialIconSize} />
                        )}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent className="bg-primary text-slate-800 mr-2">
                      <p>{socialIcon.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="fixed bottom-0 w-full p-1 z-20">
            <div className="h-[32px] flex">
              <div className="w-[32px] border" />
              <div className="flex-grow border-y text-center flex justify-center gap-3 items-center p-1">
                <p className="text-slate-400">Based in Brazil</p>
                <Separator orientation="vertical" className="border" />
                <p className="text-slate-400">Let’s work together</p>
              </div>
              <div className="w-[32px] border" />
            </div>
          </div>

          {/* Content */}
          <main className="p-[36px] h-screen w-screen z-10 relative overflow-hidden">
            <div className="h-full overflow-y-auto p-6">
              {children}
            </div>
          </main>

          {/* Background */}
          <div className="fixed top-0 bg-texture h-screen w-screen">
            <div className="flex flex-col justify-between h-full">
              <div className="flex justify-end pr-[60px] pt-8">
                <Image src="/images/details/detail-2.png" alt="Detail" width={194} height={194} className="object-contain" />
              </div>
              <div className="flex pl-[60px] pb-8">
                <Image src="/images/details/detail-1.png" alt="Detail" width={194} height={194} className="object-contain" />
              </div>
            </div>
          </div>
        </Suspense>
      </body>
    </html>
  );
}
