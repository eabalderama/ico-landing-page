import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Blockchain expert with 10+ years of experience in fintech",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Former lead developer at a major cryptocurrency exchange",
  },
  {
    name: "Mike Johnson",
    role: "CFO",
    image: "/placeholder.svg?height=200&width=200",
    bio: "20+ years of experience in traditional finance and cryptocurrency markets",
  },
  {
    name: "Sarah Brown",
    role: "CMO",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Digital marketing expert with a focus on blockchain projects",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-accent/20">
              <CardHeader>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto"
                />
                <CardTitle className="text-center mt-4 text-accent">
                  {member.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-secondary mb-2">{member.role}</p>
                <p className="text-center text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
