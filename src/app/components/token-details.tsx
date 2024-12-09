import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TokenDetails() {
  return (
    <section id="token" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Token Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-accent">Token Name</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">TangibleToken (TGB)</p>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-accent">Token Type</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">ERC-20</p>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-accent">Total Supply</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">1,000,000,000 CTK</p>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-accent">Initial Price</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">$0.10 USD</p>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-accent">Blockchain</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">Ethereum</p>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-accent">Use Case</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                Decentralized finance operations, governance, and ecosystem
                incentives
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
