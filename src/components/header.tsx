"use client"

import React from "react"
import Link from "next/link"
import { Heart, Home, Search, ThumbsUp, DollarSign, Handshake, Building2, Facebook, Instagram } from "lucide-react"
import { usePathname } from 'next/navigation'
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Início", icon: Home },
  { href: "/sobre-nos", label: "Sobre", icon: ThumbsUp },
  { href: "/contato", label: "Contato", icon: ThumbsUp },
  { href: "/financie", label: "Financie", icon: DollarSign },
  { href: "/negocie", label: "Negocie seu Imóvel", icon: Handshake },
  { href: "/empreendimentos", label: "Empreendimentos", icon: Building2 },
  { href: "/favoritos", label: "Imóveis Favoritos", icon: Heart },
];

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
      className="text-green-600"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);


export function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-background shadow-md sticky top-0 z-50">
      <div className="bg-[#facc15]">
        <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
            {/* Left: WhatsApp Button */}
            <div className="flex-1">
                <Button asChild variant="outline" className="border-gray-800/50 text-gray-800">
                    <a href="https://wa.me/555185632393" target="_blank" rel="noopener noreferrer">
                        <span>(51) 8563-2393</span>
                        <WhatsAppIcon />
                    </a>
                </Button>
            </div>
          
            {/* Center: Logo */}
            <div className="flex-1 flex justify-center">
                <Link href="/" className="flex items-center gap-2">
                  <Image src="/logo.png" width={200} height={80} alt="Bataglin Imóveis Logo" style={{objectFit: "contain"}}/>
                </Link>
            </div>

            {/* Right: Social Icons */}
            <div className="flex-1 flex justify-end items-center gap-3">
              <a href="#" className="text-gray-800 hover:text-primary" aria-label="Instagram"><Instagram size={24}/></a>
              <a href="#" className="text-gray-800 hover:text-primary" aria-label="Facebook"><Facebook size={24}/></a>
            </div>
        </div>
      </div>
      
      <div className="bg-white border-b border-t border-gray-200">
        <nav className="container mx-auto hidden md:flex items-center justify-center gap-6 py-3">
            {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/50 rounded-md",
                    pathname === link.href ? "bg-cyan-400 text-white" : "text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
        </nav>
      </div>

    </header>
  )
}
