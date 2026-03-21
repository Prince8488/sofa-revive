import SofaRepairClient from "@/components/services/SofaRepairClient";

export const metadata = {
  title: "Sofa Repair & Sagging Cushion Fix in Bengaluru | SofaRevive",
  description:
    "Is your sofa sagging or broken? We provide on-site repair for wooden frames, spring replacement, and high-quality cushion refilling.Expert sofa upholstery services. 5-Star Rated. 10+ Years Experience. Choose from 500+ premium fabrics",
  keywords:
    "sagging sofa repair, broken sofa frame fix, sofa spring replacement, cushion refilling service",
  openGraph: {
    title: "Professional Sofa Repair Services",
    description: "Don't buy new—repair your favorite sofa today.",
    images: ["/images/sofa-repair-process.jpg"],
  },
};

const SofaFurnitureService = () => {
  return <SofaRepairClient />;
};

export default SofaFurnitureService;
