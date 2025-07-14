import bgImage1 from '../../assets/ticket-bg1.png';
import bgImage2 from '../../assets/ticket-bg2.png';
import gitexNigeriaLogo from "../../assets/GITEXNIGERIA.png";
import bgImage3 from '../../assets/ticket-bg3.png';

export const tickets = [
    {
    id: "1",
    title: 'Visitor 3 Day Access Ticket',
    price: 'FREE',
    features: [
      { type: "image", images: [gitexNigeriaLogo] },
    ],
    disabledFeatures: [
      '3 Days Access to the Show',
      'Access to Dubai Internet City Lounge'
    ],
    bgImage: bgImage1,
    titleGradient: "from-[#5B2A7C] to-[#431B5A]",
    customFooter: true,
  },
  {
    id: "2",
    title: 'Visitor 3 Day Access Ticket',
    price: 'FREE',
    features: [
      'Access to ConneXions & Investor Lounge',
      'Network Events',
      'All Conference Tracks',
      'All Masterclasses',
      '3 Days Access to the Show',
      
    ],
    bgImage: bgImage2,
    titleGradient: "from-red-600 to-orange-500",
  },
  {
    id: "3",
    title: 'Visitor 3 Day Access Ticket',
    price: 'FREE',
    features: [
      'Access to ConneXions & Investor Lounge',
      'Network Events',
      'All Conference Tracks',
      'All Masterclasses',
      'Access to Dubai Internet City Lounge'
    ],
    isExclusive: true,
    bgImage: bgImage3,
    titleGradient: "from-green-700 to-emerald-500",
  },
    {
      id: "4",
    title: 'Visitor 3 Day Access Ticket',
    price: 'FREE',
    features: [
      'Access to ConneXions & Investor Lounge',
      'Network Events',
      'All Conference Tracks',
      'All Masterclasses',
      'Access to Dubai Internet City Lounge'
    ],
    isExclusive: true,
    bgImage: bgImage2,
    titleGradient: "from-red-800 to-red-900",
  },
    {
      id: "5",
    title: 'Visitor 3 Day Access Ticket',
    price: 'FREE',
    features: [
      'Access to ConneXions & Investor Lounge',
      'Network Events',
      'All Conference Tracks',
      'All Masterclasses',
      'Access to Dubai Internet City Lounge'
    ],
    bgImage: bgImage2,
  },
    {
      id: "6",
    title: 'Visitor 3 Day Access Ticket',
    price: 'FREE',
    features: [
      'Access to ConneXions & Investor Lounge',
      'Network Events',
      'All Conference Tracks',
      'All Masterclasses',
      'Access to Dubai Internet City Lounge'
    ],
    bgImage: bgImage3,
    titleGradient: "from-blue-800 to-blue-900",
  },
  
];