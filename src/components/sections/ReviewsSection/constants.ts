import type { Review } from './types';

export const REVIEWS_DATA: Review[] = [
  {
    author: "Jonas Plewka",
    position: "CEO",
    company: "Pengoro UG",
    content: "The AI chatbot has transformed our customer service. Response times dropped by 80% and customer satisfaction is at an all-time high.",
    logo: "https://i.postimg.cc/SNV3Msnw/2.png",
    image: "https://i.postimg.cc/xCGLNwFd/139.png"
  },
  {
    author: "Julian Hall",
    position: "CEO",
    company: "Ultra Ventures",
    content: "Their voice AI system has revolutionized our appointment scheduling. It's like having a full-time receptionist that never sleeps.",
    logo: "https://i.postimg.cc/TY2Hf6tQ/5.png",
    image: "https://i.postimg.cc/DZ3qZv6D/142.png"
  },
  {
    author: "Maximilian Keiser",
    position: "Founder",
    company: "Adictive",
    content: "The automation solutions have streamlined our document processing. What used to take hours now happens in minutes.",
    logo: "https://i.postimg.cc/HkczksX0/3.png",
    image: "https://i.postimg.cc/KvpBTrQt/140.png"
  },
  {
    author: "Renee Baumann",
    position: "Founder",
    company: "Beautylounge AG",
    content: "The AI-powered inventory management system has reduced our stockouts by 95%. It's been a game-changer for our business.",
    logo: "https://i.postimg.cc/Y9kzR6V8/4.png",
    image: "https://i.postimg.cc/Sxw9TSBs/141.png"
  }
] as const;