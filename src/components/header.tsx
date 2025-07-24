"use client"

import React from "react"
import Link from "next/link"
import { Menu, Home } from "lucide-react"
import { usePathname } from 'next/navigation'
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/imoveis", label: "Imóveis" },
  { href: "/sobre-nos", label: "Sobre Nós" },
  { href: "/contato", label: "Contato" },
  { href: "/admin/gerador-descricao", label: "Gerador AI" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll() 
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      isScrolled || pathname !== '/' ? "bg-card shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={cn(
                "text-sm font-medium transition-colors",
                isScrolled || pathname !== '/' ? "text-foreground hover:text-primary" : "text-white hover:text-primary",
                pathname === link.href ? "text-primary" : ""
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" width={180} height={50} alt="Bataglin Imóveis Logo" />
            </Link>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn(isScrolled || pathname !== '/' ? "text-foreground" : "text-white hover:bg-white/10")}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <div className="bg-primary p-2 rounded-md">
                    <Home className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="text-xl font-bold font-headline">Bataglin Imóveis</span>
                </Link>
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-lg font-medium hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
