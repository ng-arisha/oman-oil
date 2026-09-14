export type NavItem = {
    href: string;
    label: string;
    sub?: { href: string; label: string }[];
  };
  
  export const NAV: NavItem[] = [
    { href: "/", label: "Home" },
    {
      href: "/about-us",
      label: "About us",
      sub: [{ href: "/strategy-and-vision", label: "Strategy and vision" }],
    },
    { href: "/service", label: "Services" },
    { href: "/storage", label: "Storage" },
    {
      href: "/oil-and-gas",
      label: "Products",
      sub: [
        { href: "/oil-and-gas", label: "Oil and gas" },
        { href: "/bitumen", label: "Bitumen" },
        { href: "/kerosene", label: "Kerosene" },
        { href: "/gasoline-ai-92", label: "Gasoline AI-92" },
        { href: "/dt-analogs", label: "DT analogs" },
      ],
    },
    { href: "/sustainability", label: "Sustainability" },
    { href: "/transportation", label: "Transportation" },
    { href: "/contact", label: "Contact" },
  ];