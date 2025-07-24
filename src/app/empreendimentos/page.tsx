
import { PropertyCard } from '@/components/property-card';
import { properties } from '@/lib/mock-data';
import type { Property } from '@/lib/types';
import { Building2 } from 'lucide-react';


export default function EmpreendimentosPage() {
    const empreendimentos = properties.slice(0, 4);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center mb-12">
        <div className="flex justify-center items-center gap-2">
            <Building2 className="w-10 h-10 text-primary" />
            <h1 className="text-4xl md:text-5xl font-headline font-bold">Lançamentos e Empreendimentos</h1>
        </div>
        <p className="text-muted-foreground mt-2">Confira as melhores oportunidades para investir ou morar.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {empreendimentos.length > 0 ? (
          empreendimentos.map((property: Property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <div className="col-span-full text-center py-16">
            <p className="text-lg text-muted-foreground">Nenhum empreendimento disponível no momento.</p>
          </div>
        )}
      </div>
    </div>
  );
}
