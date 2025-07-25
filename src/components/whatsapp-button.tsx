"use client"

import Link from 'next/link';
import Image from 'next/image';

export function WhatsAppButton() {
  const phoneNumber = "555185632393";
  const message = encodeURIComponent("Olá! Tenho interesse em um dos seus imóveis e gostaria de mais informações.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <Link 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#1DAE50] transition-colors duration-300 flex items-center justify-center"
      aria-label="Fale conosco no WhatsApp"
    >
      <Image src="/logowasap.png" alt="WhatsApp" width={32} height={32} />
    </Link>
  );
}
