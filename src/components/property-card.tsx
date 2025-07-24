import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Property } from '@/lib/types';
import { BedDouble, Bath, Square, MapPin } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  return (
    <Link href={`/imoveis/${property.id}`}>
        <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <CardHeader className="p-0 relative">
            <Badge className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground">{property.type}</Badge>
            <Image
              src={property.images[0]}
              alt={property.title}
              width={400}
              height={300}
              className="w-full h-56 object-cover"
              data-ai-hint="property exterior"
            />
          </CardHeader>
          <CardContent className="p-4 flex-grow">
            <CardTitle className="text-xl font-headline mb-2">{property.title}</CardTitle>
            <div className="flex items-center text-muted-foreground text-sm mb-4">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{property.location}</span>
            </div>
            <p className="text-muted-foreground text-sm line-clamp-2">
                {property.description}
            </p>
          </CardContent>
          <CardFooter className="p-4 bg-secondary/50 flex-col items-start gap-4">
             <p className="text-2xl font-bold text-primary">{formatPrice(property.price)}</p>
            <div className="flex justify-start items-center gap-4 text-sm text-muted-foreground w-full">
              {property.bedrooms > 0 && 
                <div className="flex items-center gap-1">
                  <BedDouble className="w-5 h-5" />
                  <span>{property.bedrooms}</span>
                </div>
              }
              {property.bathrooms > 0 &&
                <div className="flex items-center gap-1">
                  <Bath className="w-5 h-5" />
                  <span>{property.bathrooms}</span>
                </div>
              }
               {property.area > 0 &&
                <div className="flex items-center gap-1">
                  <Square className="w-5 h-5" />
                  <span>{property.area} m²</span>
                </div>
              }
            </div>
          </CardFooter>
        </Card>
    </Link>
  );
}
