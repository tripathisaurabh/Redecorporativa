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
        <div className="flex items-center justify-center gap-16 md:gap-28">
          {partnershipImages.map((item) => (
            <Image
              key={item.src}
              src={item.src}
              alt={item.alt}
              width={200}
              height={200}
              className="h-auto w-[140px] md:w-[180px] object-contain opacity-90 hover:opacity-100 transition duration-300"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
