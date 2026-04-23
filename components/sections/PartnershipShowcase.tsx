import Image from "next/image";
import Container from "../ui/Container";

const partnershipImages = [
  {
    src: "/partnership/administrator.png",
    alt: "Zoho CRM Certified Administrator",
  },
  {
    src: "/partnership/associate.png",
    alt: "Zoho People Certified Associate",
  },
  {
    src: "/partnership/recruit.png",
    alt: "Zoho Recruit Certified Associate",
  },
];

export default function PartnershipShowcase() {
  return (
    <section className="bg-white py-8 md:py-12">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-20 lg:gap-28">
          {partnershipImages.map((item) => (
            <Image
              key={item.src}
              src={item.src}
              alt={item.alt}
              width={200}
              height={200}
              className="h-auto w-[90px] sm:w-[120px] md:w-[160px] lg:w-[180px] object-contain opacity-90 transition duration-300 hover:opacity-100"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
