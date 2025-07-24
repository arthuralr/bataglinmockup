import { notFound } from 'next/navigation';
import Image from 'next/image';
import { properties } from '@/lib/mock-data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { BedDouble, Bath, Square, MapPin, CheckCircle } from 'lucide-react';

export async function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }));
}

async function getProperty(id: string) {
  const property = properties.find((p) => p.id === id);
  return property;
}

const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
};

export default async function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = await getProperty(params.id);

  if (!property) {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Carousel className="w-full mb-8">
              <CarouselContent>
                {property.images.map((src, index) => (
                  <CarouselItem key={index}>
                    <Card className='overflow-hidden'>
                      <Image
                        src={src}
                        alt={`${property.title} - Imagem ${index + 1}`}
                        width={800}
                        height={600}
                        className="w-full h-auto aspect-[4/3] object-cover"
                        data-ai-hint="property interior"
                      />
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="ml-16" />
              <CarouselNext className="mr-16" />
            </Carousel>
            
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-3xl">{property.title}</CardTitle>
                    <div className="flex items-center text-muted-foreground pt-2">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{property.location}</span>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center gap-6 text-lg my-4 border-y py-4">
                        {property.bedrooms > 0 && 
                            <div className="flex items-center gap-2">
                            <BedDouble className="w-6 h-6 text-primary" />
                            <span>{property.bedrooms} Quartos</span>
                            </div>
                        }
                        {property.bathrooms > 0 &&
                            <div className="flex items-center gap-2">
                            <Bath className="w-6 h-6 text-primary" />
                            <span>{property.bathrooms} Banheiros</span>
                            </div>
                        }
                        {property.area > 0 &&
                            <div className="flex items-center gap-2">
                            <Square className="w-6 h-6 text-primary" />
                            <span>{property.area} m²</span>
                            </div>
                        }
                    </div>

                    <h3 className="font-headline text-2xl font-semibold mb-4 mt-6">Descrição</h3>
                    <p className="text-muted-foreground leading-relaxed">{property.description}</p>
                    
                    {property.features.length > 0 && (
                        <>
                            <h3 className="font-headline text-2xl font-semibold mb-4 mt-8">Características</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-muted-foreground">
                                {property.features.map((feature, index) => (
                                    <li key={index} className="flex items-center">
                                        <CheckCircle className="w-5 h-5 mr-3 text-primary" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </CardContent>
            </Card>

          </div>
          <div className="md:col-span-1">
            <div className="sticky top-24">
                <Card>
                    <CardHeader>
                        <p className="text-muted-foreground">Valor do imóvel</p>
                        <p className="text-4xl font-bold text-primary">{formatPrice(property.price)}</p>
                    </CardHeader>
                    <CardContent>
                        <h3 className="font-headline text-xl font-semibold mb-4">Ficou interessado?</h3>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="sr-only">Nome</label>
                                <Input id="name" placeholder="Seu nome" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <Input id="email" type="email" placeholder="Seu email" required />
                            </div>
                            <div>
                                <label htmlFor="phone" className="sr-only">Telefone</label>
                                <Input id="phone" placeholder="Seu telefone" required />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">Mensagem</label>
                                <Textarea id="message" placeholder="Olá, tenho interesse neste imóvel e gostaria de mais informações." required />
                            </div>
                            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Enviar Mensagem</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
