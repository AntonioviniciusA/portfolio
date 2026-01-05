import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function ProfileHeader() {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <Avatar className="w-30 h-30 border-4 border-primary ring-4 ring-accent/30">
        <AvatarImage
          src="/Avatar-Vini-cartoon.webp"
          alt="Foto de perfil"
          className="object-cover object-center"
        />
        <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
          DS
        </AvatarFallback>
      </Avatar>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-balance">Vinícius Alvino</h1>
        <p className="text-lg text-muted-foreground">
          Desenvolvedor Full Stack
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        <Badge
          variant="secondary"
          className="bg-chart-3/20 text-chart-3 border border-chart-3/50"
        >
          React
        </Badge>
        <Badge
          variant="secondary"
          className="bg-chart-1/20 text-chart-1 border border-chart-1/50"
        >
          Next.js
        </Badge>
        <Badge
          variant="secondary"
          className="bg-chart-2/20 text-chart-2 border border-chart-2/50"
        >
          TypeScript
        </Badge>
        <Badge
          variant="secondary"
          className="bg-chart-5/20 text-chart-5 border border-chart-5/50"
        >
          Node.js
        </Badge>
      </div>

      <p className="text-muted-foreground max-w-md leading-relaxed">
        Construindo experiências web modernas e escaláveis. Apaixonado por
        código limpo e design intuitivo.
      </p>
    </div>
  );
}
