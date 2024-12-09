import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-primary/20 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">
              About TangibleToken
            </h3>
            <p className="text-muted-foreground">
              TangibleToken is revolutionizing decentralized finance with
              innovative blockchain technology.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#token" className="text-text hover:text-primary">
                  Token Details
                </Link>
              </li>
              <li>
                <Link href="#ico" className="text-text hover:text-primary">
                  ICO Information
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-text hover:text-primary">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#roadmap" className="text-text hover:text-primary">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-text hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">
              Contact Us
            </h3>
            <p className="text-muted-foreground">Email: info@cryptotoken.com</p>
            <p className="text-muted-foreground">Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary/20 text-center text-text/80">
          <p>&copy; 2023 CryptoToken. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
