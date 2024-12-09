import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const roadmapItems = [
  {
    quarter: "Q3 2023",
    events: [
      "ICO Launch",
      "Smart Contract Audit",
      "Exchange Listings (Top 5 exchanges)",
    ],
  },
  {
    quarter: "Q4 2023",
    events: [
      "Mobile Wallet Launch",
      "Partnership Announcements",
      "Community Governance Platform",
    ],
  },
  {
    quarter: "Q1 2024",
    events: [
      "DeFi Product Suite Launch",
      "Cross-chain Interoperability",
      "Staking Program Initiation",
    ],
  },
  {
    quarter: "Q2 2024",
    events: [
      "NFT Marketplace Integration",
      "Major Protocol Upgrade",
      "Global Marketing Campaign",
    ],
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Roadmap</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roadmapItems.map((item, index) => (
            <Card key={index} className="border-secondary/20">
              <CardHeader>
                <CardTitle className="text-secondary">{item.quarter}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {item.events.map((event, eventIndex) => (
                    <li key={eventIndex}>{event}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
