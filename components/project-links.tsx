import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
const asstjImage = "/logo-asstj-sem-fundo.png";
const dominusTechImage = "/Logo-light-dominus-tech.png";
const projects = [
  {
    title:
      "Site da Associação dos Servidores do Superior Tribunal de Justiça e do Conselho da Justiça Federal",
    description: "Veja um de meus projetos feito para a ASSTJ",
    imageLogo: asstjImage,
    href: "https://www.asstj.org.br",
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
    borderColor: "hover:border-chart-2",
  },
  {
    title: "Site catalogo de produtos da Dominus Tech",
    description: "Veja um de meus projetos feito para a Dominus Tech",
    imageLogo: dominusTechImage,
    href: "https://www.dominustech.shop/",
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
    borderColor: "hover:border-chart-2",
  },
];

export function ProjectLinks() {
  return (
    <div className="space-y-3">
      <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider text-center">
        Projetos & Conteúdo
      </h2>
      <div className="space-y-3">
        {projects.map((project) => {
          return (
            <Card
              key={project.title}
              className={`bg-card border-border ${project.borderColor} transition-all duration-300 group`}
            >
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${project.bgColor}`}>
                        <Image
                          src={project.imageLogo}
                          alt="Logo"
                          width={32}
                          height={32}
                          className="rounded-sm"
                        />
                      </div>
                      <div>
                        <CardTitle
                          className={`text-lg group-hover:${project.color} transition-colors`}
                        >
                          {project.title}
                        </CardTitle>
                        <CardDescription className="mt-1 leading-relaxed">
                          {project.description}
                        </CardDescription>
                      </div>
                    </div>
                    <ExternalLink
                      className={`w-5 h-5 text-muted-foreground group-hover:${project.color} transition-colors flex-shrink-0`}
                    />
                  </div>
                </CardHeader>
              </a>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
