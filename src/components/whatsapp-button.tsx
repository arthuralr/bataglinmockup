"use client"

import Link from 'next/link';

// Using an inline SVG for the WhatsApp icon as it's not in lucide-react
const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="white"
      stroke="white"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);

export function WhatsAppButton() {
  const phoneNumber = "555185632393";
  const message = encodeURIComponent("Olá! Tenho interesse em um dos seus imóveis e gostaria de mais informações.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <Link 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#1DAE50] transition-colors duration-300 flex items-center justify-center"
      aria-label="Fale conosco no WhatsApp"
    >
      <WhatsAppIcon />
    </Link>
  );
}
