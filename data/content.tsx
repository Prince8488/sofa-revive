import { Hammer, Armchair, Paintbrush } from "lucide-react";

const services = [
  {
    id: "repair",
    title: "Sofa Restoration",
    image:
      "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800", // After
    beforeImage:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800&grayscale=1", // Before
    features: ["Frame Strengthening", "Spring Replacement", "Leg Repair"],
    icon: <Hammer className="w-5 h-5" />,
    tag: "Structural Fix",
  },
  {
    id: "upholstery",
    title: "Sofa Upholstery",
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800", // After
    beforeImage:
      "https://images.unsplash.com/photo-1560448204-61dc36dc98c8?q=80&w=800&grayscale=1", // Before
    features: ["500+ Fabric Options", "Foam Top-up", "On-site measurement"],
    icon: <Armchair className="w-5 h-5" />,
    tag: "Fabric Revival",
  },

  {
    id: "polishing",
    title: "Sofa Polishing",
    image:
      "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=800", // After
    beforeImage:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&grayscale=1", // Before
    features: ["Melamine Finish", "PU Coating", "Antique Polish"],
    icon: <Paintbrush className="w-5 h-5" />,
    tag: "Premium Finish",
  },
];

export default services;
