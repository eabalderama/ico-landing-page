import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary text-background">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          Welcome to TangibleToken ICO
        </h1>
        <p className="text-xl sm:text-2xl mb-8">
          Join the future of decentralized finance with our revolutionary token
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="bg-accent hover:bg-accent/90 text-background"
        >
          Participate in ICO
        </Button>
      </div>
    </section>
  );
}
