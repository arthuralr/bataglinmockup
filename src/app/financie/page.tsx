
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DollarSign } from 'lucide-react';

export default function FinanciePage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Financie seu Imóvel</h1>
          <p className="text-muted-foreground mt-2">Simule seu financiamento conosco e realize o sonho da casa própria.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl flex items-center gap-2">
              <DollarSign className="w-6 h-6" />
              Simulador de Financiamento
            </CardTitle>
            <CardDescription>
                Preencha os campos abaixo para obter uma simulação. Os valores são aproximados.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="valor-imovel">Valor do Imóvel</Label>
                  <Input id="valor-imovel" type="number" placeholder="R$ 300.000" />
                </div>
                <div>
                  <Label htmlFor="valor-entrada">Valor da Entrada</Label>
                  <Input id="valor-entrada" type="number" placeholder="R$ 60.000" />
                </div>
                 <div>
                  <Label htmlFor="prazo">Prazo (em anos)</Label>
                  <Input id="prazo" type="number" placeholder="30" />
                </div>
                 <div>
                  <Label htmlFor="renda">Renda Familiar Bruta</Label>
                  <Input id="renda" type="number" placeholder="R$ 8.000" />
                </div>
              </div>
               <div className="space-y-4">
                 <h3 className="font-semibold text-lg">Dados Pessoais</h3>
                <div>
                  <Label htmlFor="nome">Nome Completo</Label>
                  <Input id="nome" placeholder="Seu nome" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
                <div>
                  <Label htmlFor="telefone">Telefone / WhatsApp</Label>
                  <Input id="telefone" type="tel" placeholder="(00) 00000-0000" />
                </div>
                <Button type="submit" className="w-full">Simular Agora</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
