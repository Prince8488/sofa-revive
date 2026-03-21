import SofaPolishingClient from "@/components/services/SofaPolishingClient";

export const metadata = {
  title:
    "Wood Furniture Polishing & Antique Restoration in Bengaluru | SofaRevive",
  description:
    "Restore the shine to your teak, rosewood, or mahogany furniture. Professional Melamine and PU polishing for a mirror-like finish. Expert sofa upholstery services. 5-Star Rated. 10+ Years Experience. Choose from 500+ premium fabrics",
  keywords:
    "wood polishing near me, teak wood restoration, furniture buffing, antique sofa polishing",
  openGraph: {
    title: "Luxury Wood Polishing & Restoration",
    description: "Bringing back the natural glow of your wooden furniture.",
    images: ["/images/wood-polishing-results.jpg"],
  },
};

const SofaPolishingService = () => {
  return <SofaPolishingClient />;
};

export default SofaPolishingService;
