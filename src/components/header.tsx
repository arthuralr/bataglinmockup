"use client"

import React from "react"
import Link from "next/link"
import { Menu, Home, Phone, Facebook, Instagram } from "lucide-react"
import { usePathname } from 'next/navigation'
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/imoveis", label: "Imóveis" },
  { href: "/sobre-nos", label: "Sobre Nós" },
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
  
  const headerClasses = cn(
      "sticky top-0 z-50 transition-all duration-300",
      isScrolled || pathname !== '/' ? "bg-card shadow-md text-foreground" : "bg-transparent text-white"
  );
  
  const linkClasses = cn(
      "text-sm font-medium transition-colors hover:text-primary",
      pathname === '/' && !isScrolled && "text-white hover:text-primary",
  );


  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-3">
              <Link href="#" className={linkClasses} aria-label="Facebook"><Facebook size={18}/></Link>
              <Link href="#" className={linkClasses} aria-label="Instagram"><Instagram size={18}/></Link>
            </div>
            <a href="tel:555185632393" className={cn(linkClasses, "flex items-center gap-2")}>
                <Phone size={16}/>
                <span>(51) 8563-2393</span>
            </a>
        </div>
        
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" width={180} height={50} alt="Bataglin Imóveis Logo" />
            </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={cn(linkClasses, pathname === link.href && "text-primary")}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild size="sm">
                <Link href="/contato">Fale Conosco</Link>
              </Button>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn("hover:bg-white/10", isScrolled || pathname !== '/' ? "text-foreground" : "text-white")}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <Image src="/logo.png" width={180} height={50} alt="Bataglin Imóveis Logo" />
                </Link>
                
                <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link key={link.href} href={link.href} className="text-lg font-medium hover:text-primary transition-colors">
                        {link.label}
                      </Link>
                    ))}
                    <Link href="/contato" className="text-lg font-medium hover:text-primary transition-colors">
                        Fale Conosco
                    </Link>
                </nav>

                <div className="border-t pt-6 mt-6 space-y-4">
                     <a href="tel:555185632393" className="text-lg font-medium hover:text-primary transition-colors flex items-center gap-2">
                        <Phone size={16}/>
                        (51) 8563-2393
                    </a>
                    <div className="flex items-center gap-4">
                        <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram /></Link>
                    </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
