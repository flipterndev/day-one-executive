export type Testimonial = {
  quote: string;
  name: string;
  title?: string;
  company?: string;
  avatar?: string; // headshot path or URL
  logo?: string;   // company logo path or URL
  featured?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote: `Full of practical, easily understandable leadership wisdom that anyone can apply to their own life, starting immediately… I wish I&apos;d had this book when I was starting out as a young professional.`,
    name: "Jonathan R. Alger",
    title: "President",
    company: "James Madison University",
    avatar: "https://www.knightcommission.org/wp-content/uploads/2021/09/unnamed-scaled-e1632925765811.jpg",
    logo: "https://cvillebiohub-media.s3.amazonaws.com/content/uploads/2024/09/18115725/jmu-logo-rgb-without-block-jmu-purple.png",
    featured: true,
  },
  {
    quote: `…the essence of what it takes to be a successful executive… a &apos;secret decoder ring.&apos;`,
    name: "The Honorable Susan M. Gordon",
    title: "Former Principal Deputy Director of National Intelligence",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Susan_M._Gordon_official_photo.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/Seal_of_the_Office_of_the_Director_of_National_Intelligence.svg",
  },
  {
    quote: `…a clear playbook for a successful career.`,
    name: "Maggie Wilderotter",
    title: "Former President and Chief Executive Officer (CEO)",
    company: "Frontier Communications",
    avatar: "https://conferences.law.stanford.edu/directorscollege2021/wp-content/uploads/sites/98/2019/05/Wilderotter_Maggie_photo-square-428x428.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/02/Frontier_communications_logo_2022.png",
  },
  {
    quote: `…compresses a decade of learning to help you fast-track your success without taking any shortcuts—a must read.`,
    name: "Rebecca M. Brewster",
    title: "President and Chief Operating Officer",
    company: "American Transportation Research Institute",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFJDnIyzgV5nw/profile-displayphoto-shrink_400_400/B4DZSJ_KPqGUAg-/0/1737481823541?e=1758153600&v=beta&t=75fwUVCn9B5kjUpr0mj3WE3n6dQ-Af6EVsC3Sbu8ozM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/72/ATRI_Logo.png",
  },
];


