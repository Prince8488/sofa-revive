import SofaUpholsteryClient from "@/components/services/SofaUpholsteryClient";

export const metadata = {
  title: "Premium Sofa Upholstery & Fabric Change in Bengaluru | SofaRevive",
  description:
    "Expert sofa upholstery services. Choose from 500+ premium fabrics, leathers, and suedes. Custom padding and high-density foam replacement included.Expert sofa upholstery services. 5-Star Rated. 10+ Years Experience. Choose from 500+ premium fabrics",
  keywords:
    "sofa upholstery near me, couch fabric replacement, leather sofa reupholstery, custom sofa covers",
  openGraph: {
    title: "Transform Your Sofa with Custom Upholstery",
    description: "Premium fabric and leather restoration for your home.",
    images: ["/images/upholstery-before-after.jpg"],
  },
};

const UpholsteryRestorationService = () => {
  return <SofaUpholsteryClient />;
};

export default UpholsteryRestorationService;
