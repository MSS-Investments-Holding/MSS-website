type NavLink = {
  label: string;
  href: string;
  hasDropdown: boolean;
  dropdownItems?: Array<{
    label: string;
    href: string;
  }>;
};

export const navLinks: NavLink[] = [
  {
    label: "About Us",
    href: "/about",
    hasDropdown: false,
  },
  { label: "How We Invest", href: "/how-we-invest", hasDropdown: false },
  { label: "Pitch to Us",   href: "/pitch",       hasDropdown: false },
  {
    label: "Careers",
    href: "/careers",
    hasDropdown: false,
  },
];

export const stats = [
  {
    value: "$1.5B+",
    label: "Strategic capital across the broader financial ecosystem.",
    bg: "warm",
  },
  {
    value: "7+",
    label: "Ventures operating across emerging, priority sectors.",
    bg: "navy",
  },
  {
    value: "100+",
    label: "Collective workforce driving execution across the MSS ecosystem.",
    bg: "silver",
  },
];

export const sectors = [
  {
    title: "Fintech",
    description:
      "We back ventures building the next layer of global financial infrastructure across payments, lending, and regulated financial services.",
    icon: "fintech",
  },
  {
    title: "Agentic AI",
    description:
      "We invest in AI-led ventures developing intelligent systems that improve decision-making, workflow automation, and operational intelligence.",
    icon: "ai",
  },
  {
    title: "Venture Capitalization",
    description:
      "We partner with emerging businesses at high-potential stages, providing capital, network, and strategic direction to accelerate scale.",
    icon: "venture",
  },
  {
    title: "Digital Asset Tokenization",
    description:
      "We support platforms exploring the digitisation of value, enabling new models, asset classes, and infrastructure for the digital economy.",
    icon: "digital-asset",
  },
  {
    title: "Performance Digital Marketing",
    description:
      "We back digital platforms and media-led businesses shaping how audiences engage, consume, and interact with content globally.",
    icon: "media",
  },
];

export const processSteps = [
  {
    step: "Discovery",
    description: "Assess the idea, context, and fundamentals behind the idea.",
    image: "/images/process-1.jpg",
  },
  {
    step: "Strategy",
    description: "Aligning the concept with a long-term execution potential.",
    image: "/images/process-2.jpg",
  },
  {
    step: "Validation",
    description: "Evaluate viability and refine the opportunity before scale.",
    image: "/images/process-3.jpg",
  },
  {
    step: "Launch",
    description:
      "Turning concept into reality with a focus on clarity, and growth.",
    image: "/images/process-1.jpg",
  },
];

export const leadership = [
  {
    name: "Vincent de Cannière",
    role: "Chairman",
    bio: "Vincent brings over 40 years of experience across executive leadership, governance, and international financial markets. His career has spanned senior roles across Europe, the Middle East, and Asia.",
    image: "/images/leadership-1.jpg",
  },
  {
    name: "Husnain Nasir",
    role: "Director",
    bio: "Husnain brings over 25 years of experience across fintech, enterprise solutions, branchless banking, and telecom. With executive leadership roles tied to major digital finance and transformation initiatives in Pakistan, UAE, UK and Europe, he contributes deep expertise in strategy and investments.",
    image: "/images/leadership-2.jpg",
  },
];

export const footerLinks = {
  explore: [
    { label: "About Us", href: "/about" },
    { label: "How We Invest", href: "/how-we-invest" },
    { label: "Pitch to Us", href: "/pitch" },
  ],
  more: [
    { label: "Chairman Message", href: "/chairman-message" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Careers", href: "/careers" },
  ],
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "X — Formerly Twitter", href: "#" },
  ],
  legal: [
    { label: "Terms & Conditions", href: "/legal/terms" },
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Cookies Policy", href: "/legal/cookies" },
  ],
};
