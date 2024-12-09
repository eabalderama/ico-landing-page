import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 border-b border-primary/20">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-accent">
          TGB Token
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="#token" className="text-text hover:text-primary">
            Token
          </Link>
          <Link href="#ico" className="text-text hover:text-primary">
            ICO
          </Link>
          <Link href="#team" className="text-text hover:text-primary">
            Team
          </Link>
          <Link href="#roadmap" className="text-text hover:text-primary">
            Roadmap
          </Link>
          <Link href="#faq" className="text-text hover:text-primary">
            FAQ
          </Link>
        </nav>
        <Button className="bg-secondary text-background hover:bg-secondary/90">
          Join ICO
        </Button>
      </div>
    </header>
  );
}
