// src/data.jsx
import Turkce    from './image/turkcekursu.png';
import Ingilizce from './image/ingilizcekursu.jpg';
import Japonca   from './image/japoncakursu.jpg';
import German    from './image/almancakursu.jpg';

export const courses = [
  {
    id: 1,
    title: "Türkçe Giriş",
    description: "Learn the basics of Turkish language.",
    price: 1000,
    link: "https://www.example.com/turkish-course",
    image: Turkce,
  },
  {
    id: 2,
    title: "English Basics",
    description: "Learn the basics of English language.",
    price: 1000,
    link: "https://www.example.com/english-course",
    image: Ingilizce,
  },
  {
    id: 3,
    title: "Japonca Basics",
    description: "Learn the basics of Japanese language.",
    price: 1000,
    link: "https://www.example.com/japanese-course",
    image: Japonca,
  },
  {
    id: 4,
    title: "German Basics",
    description: "Learn the basics of German language.",
    price: 1000,
    link: "https://www.example.com/german-course",
    image: German,
  },
];
