import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What is Tangible Token?",
    answer:
      "Tangible (TGB) is a new cryptocurrency designed for decentralized finance operations, governance, and ecosystem incentives. It's built on the Ethereum blockchain as an ERC-20 token.",
  },
  {
    question: "How can I participate in the ICO?",
    answer:
      "You can participate in the ICO by creating an account on our platform and then purchasing tokens using ETH or USDT. The minimum purchase amount is $50 USD.",
  },
  {
    question: "When will the tokens be distributed?",
    answer:
      "Tokens will be distributed within 14 days after the end of the ICO. You'll be able to claim your tokens through our platform.",
  },
  {
    question: "Is there a vesting period for the tokens?",
    answer:
      "Yes, there is a vesting period for team and advisor tokens. These tokens will be locked for 12 months after the ICO, with a 25% release every quarter thereafter.",
  },
  {
    question: "What are the use cases for Tangible Token?",
    answer:
      "Tangible can be used for various purposes within our ecosystem, including participating in governance decisions, accessing premium features of our DeFi products, and as a means of payment within our upcoming NFT marketplace.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto [&>*]:border-primary/20"
        >
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-accent hover:text-accent/90">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
