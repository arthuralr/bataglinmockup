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

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const parseCurrency = (value: string): number => {
    const onlyDigits = value.replace(/\D/g, '');
    return Number(onlyDigits);
};


export default function ImoveisPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [propertyType, setPropertyType] = useState('all');
  const [bedrooms, setBedrooms] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 3000000]);
  const [minPriceInput, setMinPriceInput] = useState('');
  const [maxPriceInput, setMaxPriceInput] = useState('');


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
  
  
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'min' | 'max') => {
    const rawValue = e.target.value;
    const numericValue = parseCurrency(rawValue);

    if (type === 'min') {
        setMinPriceInput(rawValue === '' ? '' : formatCurrency(numericValue));
        setPriceRange([numericValue, priceRange[1]]);
    } else {
        setMaxPriceInput(rawValue === '' ? '' : formatCurrency(numericValue));
        setPriceRange([priceRange[0], numericValue || 3000000]);
    }
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
                <Input 
                  id="min-price" 
                  type="text" 
                  placeholder="R$ 0" 
                  value={minPriceInput}
                  onChange={(e) => handlePriceChange(e, 'min')} 
                />
            </div>
            <div>
                <label htmlFor="max-price" className="block text-sm font-medium mb-1">Preço Máximo</label>
                <Input 
                  id="max-price" 
                  type="text" 
                  placeholder="R$ 3.000.000+" 
                  value={maxPriceInput}
                  onChange={(e) => handlePriceChange(e, 'max')}
                 />
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
