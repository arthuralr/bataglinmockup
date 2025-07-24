"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generatePropertyDescription } from '@/ai/flows/generate-property-description';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { Wand2, Copy } from 'lucide-react';

const formSchema = z.object({
  propertyType: z.string().min(1, 'Tipo de imóvel é obrigatório.'),
  location: z.string().min(3, 'Localização é obrigatória.'),
  numberOfBedrooms: z.coerce.number().min(0, 'Deve ser um número positivo.'),
  numberOfBathrooms: z.coerce.number().min(0, 'Deve ser um número positivo.'),
  squareFootage: z.coerce.number().min(1, 'Área é obrigatória.'),
  keyFeatures: z.string().min(5, 'Descreva ao menos uma característica.'),
  targetAudience: z.string().min(3, 'Público-alvo é obrigatório.'),
});

export function AIDescriptionGeneratorForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [description, setDescription] = useState('');
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      propertyType: 'Apartamento',
      location: '',
      numberOfBedrooms: 2,
      numberOfBathrooms: 1,
      squareFootage: 70,
      keyFeatures: 'cozinha planejada, varanda, piso de madeira',
      targetAudience: 'jovens casais',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setDescription('');
    try {
      const result = await generatePropertyDescription(values);
      setDescription(result.description);
    } catch (error) {
      console.error(error);
      toast({
        title: "Erro ao gerar descrição",
        description: "Houve um problema ao se comunicar com a IA. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  }
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(description);
    toast({
        title: "Copiado!",
        description: "A descrição do imóvel foi copiada para a área de transferência.",
    });
  }

  return (
    <Card>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle className="font-headline">Detalhes do Imóvel</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="propertyType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo de Imóvel</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger><SelectValue placeholder="Selecione o tipo" /></SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Apartamento">Apartamento</SelectItem>
                        <SelectItem value="Casa">Casa</SelectItem>
                        <SelectItem value="Cobertura">Cobertura</SelectItem>
                        <SelectItem value="Terreno">Terreno</SelectItem>
                        <SelectItem value="Loft">Loft</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Localização (Bairro, Cidade)</FormLabel>
                    <FormControl><Input placeholder="Ex: Pinheiros, São Paulo" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <FormField control={form.control} name="numberOfBedrooms" render={({ field }) => ( <FormItem><FormLabel>Quartos</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem> )} />
              <FormField control={form.control} name="numberOfBathrooms" render={({ field }) => ( <FormItem><FormLabel>Banheiros</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem> )} />
              <FormField control={form.control} name="squareFootage" render={({ field }) => ( <FormItem><FormLabel>Área (m²)</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem> )} />
            </div>
            <FormField
              control={form.control}
              name="keyFeatures"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Principais Características</FormLabel>
                  <FormControl><Textarea placeholder="Ex: piscina, churrasqueira, varanda gourmet, etc." {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="targetAudience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Público-alvo</FormLabel>
                  <FormControl><Input placeholder="Ex: famílias com filhos, investidores, estudantes" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex-col items-stretch gap-4">
            <Button type="submit" disabled={isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              <Wand2 className="mr-2 h-4 w-4" />
              {isLoading ? 'Gerando...' : 'Gerar Descrição'}
            </Button>
            
            {isLoading && (
              <div className="space-y-2 mt-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            )}
            
            {description && !isLoading && (
              <div className="mt-4 w-full">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold font-headline">Descrição Gerada:</h3>
                    <Button variant="ghost" size="sm" onClick={copyToClipboard}><Copy className="mr-2 h-4 w-4" />Copiar</Button>
                </div>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={10}
                  className="bg-secondary"
                />
              </div>
            )}
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
