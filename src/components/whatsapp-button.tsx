"use client"

import Link from 'next/link';
import { Button } from './ui/button';

// Using an inline SVG for the WhatsApp icon as it's not in lucide-react
const WhatsAppIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export function WhatsAppButton() {
  const phoneNumber = "555185632393";
  const message = "Olá! Tenho interesse em um dos seus imóveis.";

  return (
    <Link
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="flex items-center justify-center bg-primary text-primary-foreground rounded-full shadow-lg p-4 transition-all duration-300 ease-in-out hover:bg-primary/90">
        <span className="font-semibold text-base pr-3">(51) 8563-2393</span>
        <WhatsAppIcon />
      </div>
    </Link>
  );
}
