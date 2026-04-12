import { Hammer, Armchair, Paintbrush } from 'lucide-react'

import sofaRepairAfter from '@/public/images/sofa-repair-after.png'
import sofaRepairBefore from '@/public/images/sofa-repair-before.png'
import sofaUpholsteryAfter from '@/public/images/sofa-upholstery-after.png'
import sofaUpholsteryBefore from '@/public/images/sofa-upholstery-before.png'
import woddenSofaPolishingAfter from '@/public/images/wodden-sofa-polishing-after.png'
import woddenSofaPolishingBefore from '@/public/images/wodden-sofa-polishing-before.png'

const services = [
  {
    id: 'repair',
    title: 'Sofa Restoration',
    afterImage: sofaRepairAfter,
    beforeImage: sofaRepairBefore,
    features: ['Frame Strengthening', 'Spring Replacement', 'Leg Repair'],
    icon: <Hammer className="h-5 w-5" />,
    tag: 'Structural Fix',
    href: '/services/sofa-repair',
  },
  {
    id: 'upholstery',
    title: 'Sofa Upholstery',
    afterImage: sofaUpholsteryAfter,
    beforeImage: sofaUpholsteryBefore,
    features: ['50+ Fabric Options', 'Foam Top-up', 'On-site measurement'],
    icon: <Armchair className="h-5 w-5" />,
    tag: 'Fabric Revival',
    href: '/services/sofa-upholstery',
  },
  {
    id: 'polishing',
    title: 'Sofa Polishing',
    beforeImage: woddenSofaPolishingBefore,
    afterImage: woddenSofaPolishingAfter,
    features: ['Melamine Finish', 'PU Coating', 'Antique Polish'],
    icon: <Paintbrush className="h-5 w-5" />,
    tag: 'Premium Finish',
    href: '/services/sofa-polishing',
  },
]

export default services
