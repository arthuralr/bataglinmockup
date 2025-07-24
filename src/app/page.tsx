import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { PropertyCard } from '@/components/property-card';
import { properties } from '@/lib/mock-data';
import type { Property } from '@/lib/types';
import { Search } from 'lucide-react';

export default function Home() {
  const featuredProperties = properties.filter((p) => p.featured).slice(0, 6);

  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src="/capa.jpg"
          alt="Família olhando para casa nova"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
          data-ai-hint="family house"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 animate-fade-in-down">
            Encontre o imóvel dos seus sonhos
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            A Bataglin Imóveis tem as melhores opções para você e sua família.
          </p>
        </div>
      </section>

      <section className="bg-background -mt-20 relative z-30">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="w-full max-w-5xl mx-auto p-4 sm:p-6 shadow-lg">
            <CardContent className="p-0">
              <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-end">
                <div className="lg:col-span-2 xl:col-span-1">
                  <label htmlFor="negocio" className="block text-sm font-medium mb-1 text-foreground">Negócio</label>
                  <Select defaultValue="comprar">
                    <SelectTrigger id="negocio" className="w-full">
                      <SelectValue placeholder="Comprar ou Alugar?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="comprar">Comprar</SelectItem>
                      <SelectItem value="alugar">Alugar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="type" className="block text-sm font-medium mb-1 text-foreground">Tipo de Imóvel</label>
                  <Select>
                    <SelectTrigger id="type" className="w-full">
                      <SelectValue placeholder="Todos os tipos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="casa">Casa</SelectItem>
                      <SelectItem value="terreno">Terreno</SelectItem>
                      <SelectItem value="chacara">Chácara</SelectItem>
                      <SelectItem value="sala">Sala</SelectItem>
                      <SelectItem value="loja">Loja</SelectItem>
                      <SelectItem value="sobrado">Sobrado</SelectItem>
                      <SelectItem value="predio">Prédio</SelectItem>
                      <SelectItem value="pavilhao">Pavilhão/Galpão</SelectItem>
                      <SelectItem value="area-rural">Área Rural</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                 <div>
                  <label htmlFor="city" className="block text-sm font-medium mb-1 text-foreground">Cidade</label>
                  <Input id="city" placeholder="Digite a cidade" />
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label htmlFor="min-price" className="block text-sm font-medium mb-1 text-foreground">Valor Mínimo</label>
                      <Input id="min-price" placeholder="R$ 0" type="number" />
                    </div>
                     <div>
                      <label htmlFor="max-price" className="block text-sm font-medium mb-1 text-foreground">Valor Máximo</label>
                      <Input id="max-price" placeholder="R$ 1.000.000+" type="number" />
                    </div>
                </div>

                <Button type="submit" className="w-full h-10 bg-primary hover:bg-accent hover:text-accent-foreground text-primary-foreground md:col-start-2 lg:col-start-auto xl:col-start-auto">
                  <Search className="mr-2 h-4 w-4" />
                  Pesquisar
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
            Imóveis em Destaque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property: Property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <a href="/imoveis">Ver todos os imóveis</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
