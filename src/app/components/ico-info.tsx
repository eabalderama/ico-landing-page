import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function IcoInfo() {
  return (
    <section id="ico" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          ICO Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-secondary/20">
            <CardHeader>
              <CardTitle className="text-secondary">ICO Details</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <strong>Start Date:</strong> July 1, 2023
                </li>
                <li>
                  <strong>End Date:</strong> August 31, 2023
                </li>
                <li>
                  <strong>Soft Cap:</strong> $5,000,000 USD
                </li>
                <li>
                  <strong>Hard Cap:</strong> $20,000,000 USD
                </li>
                <li>
                  <strong>Accepted Currencies:</strong> ETH, USDT
                </li>
                <li>
                  <strong>Min. Purchase:</strong> $50 USD
                </li>
                <li>
                  <strong>Max. Purchase:</strong> $50,000 USD
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-secondary/20">
            <CardHeader>
              <CardTitle className="text-secondary">
                Token Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <strong>ICO Participants:</strong> 40%
                </li>
                <li>
                  <strong>Team and Advisors:</strong> 20%
                </li>
                <li>
                  <strong>Reserve:</strong> 15%
                </li>
                <li>
                  <strong>Ecosystem Development:</strong> 15%
                </li>
                <li>
                  <strong>Marketing and Partnerships:</strong> 10%
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <Card className="mt-8 border-secondary/20">
          <CardHeader>
            <CardTitle className="text-secondary">ICO Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={65} className="w-full" />
            <p className="mt-2 text-center">
              $13,000,000 USD raised of $20,000,000 USD goal
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
