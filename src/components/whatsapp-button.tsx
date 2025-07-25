"use client"

import Link from 'next/link';
import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function WhatsAppButton() {
  const phoneNumber = "555185632393";
  const message = encodeURIComponent("Olá! Tenho interesse em um dos seus imóveis e gostaria de mais informações.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#1DAE50] transition-colors duration-300 flex items-center justify-center"
            aria-label="Fale conosco no WhatsApp"
          >
            <Image src="/logowasap.png" alt="WhatsApp" width={32} height={32} />
          </Link>
        </TooltipTrigger>
        <TooltipContent side="top" align="center" className="relative bg-background text-foreground border border-border shadow-md rounded-lg px-4 py-2">
            <p>Olá, estamos disponíveis!</p>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-9px] w-0 h-0 border-x-8 border-x-transparent border-t-[10px] border-t-background" />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-11px] w-0 h-0 border-x-8 border-x-transparent border-t-[10px] border-t-border" style={{zIndex: -1}} />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
