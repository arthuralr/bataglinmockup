"use client"

import React, { useState, useMemo } from 'react';
import { PropertyCard } from '@/components/property-card';
import { properties } from '@/lib/mock-data';
import type { Property } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function ImoveisPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [propertyType, setPropertyType] = useState('all');
  const [bedrooms, setBedrooms] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 3000000]);

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.id.includes(searchTerm);
      
      const matchesType = propertyType === 'all' || property.type === propertyType;
      
      const matchesBedrooms = bedrooms === 'all' || property.bedrooms >= parseInt(bedrooms);

      const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1];

      return matchesSearch && matchesType && matchesBedrooms && matchesPrice;
    });
  }, [searchTerm, propertyType, bedrooms, priceRange]);
  
  // Handlers for min and max price inputs
  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === '' ? 0 : parseInt(e.target.value, 10);
    setPriceRange([value, priceRange[1]]);
  };
  
  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === '' ? 3000000 : parseInt(e.target.value, 10);
    setPriceRange([priceRange[0], value]);
  };


  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Nossos Imóveis</h1>
        <p className="text-muted-foreground mt-2">Encontre aqui a propriedade ideal para você.</p>
      </div>

      <Card className="mb-8 p-4 md:p-6">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <div className='lg:col-span-2'>
              <label htmlFor="search" className="block text-sm font-medium mb-1">Buscar</label>
              <Input
                id="search"
                placeholder="Busque por título, localização ou código..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="filter-type" className="block text-sm font-medium mb-1">Tipo</label>
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger id="filter-type">
                  <SelectValue placeholder="Tipo de Imóvel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os Tipos</SelectItem>
                  <SelectItem value="Apartamento">Apartamento</SelectItem>
                  <SelectItem value="Casa">Casa</SelectItem>
                  <SelectItem value="Cobertura">Cobertura</SelectItem>
                  <SelectItem value="Terreno">Terreno</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="filter-bedrooms" className="block text-sm font-medium mb-1">Quartos (mín.)</label>
              <Select value={bedrooms} onValueChange={setBedrooms}>
                <SelectTrigger id="filter-bedrooms">
                  <SelectValue placeholder="Quartos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Qualquer</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
                <label htmlFor="min-price" className="block text-sm font-medium mb-1">Preço Mínimo</label>
                <Input id="min-price" type="number" placeholder="R$ 0" onChange={handleMinPriceChange} step="50000" />
            </div>
            <div>
                <label htmlFor="max-price" className="block text-sm font-medium mb-1">Preço Máximo</label>
                <Input id="max-price" type="number" placeholder="R$ 3.000.000+" onChange={handleMaxPriceChange} step="50000" />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property: Property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <div className="col-span-full text-center py-16">
            <p className="text-lg text-muted-foreground">Nenhum imóvel encontrado com os filtros selecionados.</p>
          </div>
        )}
      </div>
    </div>
  );
}
