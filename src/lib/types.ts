export type Property = {
  id: string;
  title: string;
  type: 'Apartamento' | 'Casa' | 'Cobertura' | 'Terreno';
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  images: string[];
  features: string[];
  featured: boolean;
};
