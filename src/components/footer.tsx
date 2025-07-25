import Link from "next/link"
import { Home, Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-md">
                <Home className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold font-headline">Bataglin Imóveis</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Realizando sonhos, construindo lares.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="https://www.facebook.com/paulobataglinconsultoriamobiliaria" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
              <Link href="https://www.instagram.com/paulo.bataglin_assessoria/?hl=pt-br" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Instagram /></Link>
            </div>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li><Link href="/imoveis" className="text-sm text-muted-foreground hover:text-primary">Imóveis</Link></li>
              <li><Link href="/sobre-nos" className="text-sm text-muted-foreground hover:text-primary">Sobre Nós</Link></li>
              <li><Link href="/contato" className="text-sm text-muted-foreground hover:text-primary">Contato</Link></li>
              <li><Link href="/admin/gerador-descricao" className="text-sm text-muted-foreground hover:text-primary">Acesso Restrito</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Tipos de Imóveis</h3>
            <ul className="space-y-2">
              <li><Link href="/imoveis?type=apartamento" className="text-sm text-muted-foreground hover:text-primary">Apartamentos</Link></li>
              <li><Link href="/imoveis?type=casa" className="text-sm text-muted-foreground hover:text-primary">Casas</Link></li>
              <li><Link href="/imoveis?type=cobertura" className="text-sm text-muted-foreground hover:text-primary">Coberturas</Link></li>
              <li><Link href="/imoveis?type=terreno" className="text-sm text-muted-foreground hover:text-primary">Terrenos</Link></li>
            </ul>
          </div>
           <div>
            <h3 className="font-headline font-semibold mb-4">Contato</h3>
            <address className="not-italic space-y-2 text-sm text-muted-foreground">
              <p>Rua Exemplo, 123, Centro</p>
              <p>Cidade, Estado</p>
              <p>CEP 12345-678</p>
              <p>
                <a href="tel:+5511999999999" className="hover:text-primary">(11) 99999-9999</a>
              </p>
              <p>
                <a href="mailto:contato@bataglin.com.br" className="hover:text-primary">contato@bataglin.com.br</a>
              </p>
            </address>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Bataglin Imóveis. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
