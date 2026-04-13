import Icon from '@/components/icons'

import sofaRepairAfter from '@/public/images/sofa-repair-after.webp'
import sofaRepairBefore from '@/public/images/sofa-repair-before.webp'
import sofaUpholsteryAfter from '@/public/images/sofa-upholstery-after.webp'
import sofaUpholsteryBefore from '@/public/images/sofa-upholstery-before.webp'
import woddenSofaPolishingAfter from '@/public/images/wodden-sofa-polishing-after.webp'
import woddenSofaPolishingBefore from '@/public/images/wodden-sofa-polishing-before.webp'

const services = [
  {
    id: 'repair',
    title: 'Sofa Restoration',
    afterImage: sofaRepairAfter,
    beforeImage: sofaRepairBefore,
    features: ['Frame Strengthening', 'Spring Replacement', 'Leg Repair'],
    icon: <Icon name="Hammer" className="h-5 w-5" />,
    tag: 'Structural Fix',
    href: '/services/sofa-repair',
  },
  {
    id: 'upholstery',
    title: 'Sofa Upholstery',
    afterImage: sofaUpholsteryAfter,
    beforeImage: sofaUpholsteryBefore,
    features: ['50+ Fabric Options', 'Foam Top-up', 'On-site measurement'],
    icon: <Icon name="Armchair" className="h-5 w-5" />,
    tag: 'Fabric Revival',
    href: '/services/sofa-upholstery',
  },
  {
    id: 'polishing',
    title: 'Sofa Polishing',
    beforeImage: woddenSofaPolishingBefore,
    afterImage: woddenSofaPolishingAfter,
    features: ['Melamine Finish', 'PU Coating', 'Antique Polish'],
    icon: <Icon name="Paintbrush" className="h-5 w-5" />,
    tag: 'Premium Finish',
    href: '/services/sofa-polishing',
  },
]

export default services
