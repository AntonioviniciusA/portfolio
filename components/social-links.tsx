import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Instagram, Phone } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/AntonioviniciusA",
    color: "hover:bg-chart-1 hover:text-card",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/vinicius-alvino/",
    color: "hover:bg-chart-3 hover:text-card",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/_a.vinicius_/",
    color: "hover:bg-chart-2 hover:text-card",
  },
  {
    name: "WhatsApp",
    icon: Phone,
    href: "https://wa.me/5561996836619",
    color: "hover:bg-chart-4 hover:text-card",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:antoniovinicius_@outlook.com",
    color: "hover:bg-chart-5 hover:text-card",
  },
];

export function SocialLinks() {
  return (
    <div className="space-y-3">
      <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider text-center">
        Conecte-se
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Button
              key={link.name}
              variant="outline"
              size="lg"
              asChild
              className={`bg-card border-border transition-all duration-300 ${link.color}`}
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{link.name}</span>
              </a>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
