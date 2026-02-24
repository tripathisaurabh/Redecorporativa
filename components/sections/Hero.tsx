import Image from "next/image";
import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="hero py-16 md:py-20" id="product">
      <Container className="relative z-10 grid items-center gap-10 md:grid-cols-[1fr_1fr] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-2xl">
        
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-6xl">
            Zoho Consulting + AI Automation
          </h1>

          <p className="mt-5 text-lg text-slate-600">
            Smarter systems. Faster operations. Real business growth.
          </p>

          <div className="mt-7 flex gap-4">
            <Button href="/contact">Book a Free 30 Min Call</Button>

            <Button href="/contact" variant="outline">
              Contact Us Now
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end md:-mr-8">
          <Image
            src="/hero.png"
            alt="CRM automation dashboard visual"
            width={1100}
            height={1100}
            className="w-full max-w-[840px] md:max-w-none md:w-[120%] lg:w-[132%]"
            priority
          />
        </div>

      </Container>
    </section>
  );
}
