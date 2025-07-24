
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Handshake } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function NegociePage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Anuncie ou Venda seu Imóvel</h1>
          <p className="text-muted-foreground mt-2">Quer vender ou alugar? Deixe seu imóvel conosco. Temos a melhor avaliação e os melhores clientes.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl flex items-center gap-2">
                <Handshake className="w-6 h-6" />
                Formulário de Captação
            </CardTitle>
            <CardDescription>
                Preencha os detalhes do seu imóvel e entraremos em contato o mais breve possível.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <Label htmlFor="nome">Nome Completo</Label>
                        <Input id="nome" placeholder="Proprietário" />
                    </div>
                     <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="seu@email.com" />
                    </div>
                     <div>
                        <Label htmlFor="telefone">Telefone / WhatsApp</Label>
                        <Input id="telefone" type="tel" placeholder="(00) 00000-0000" />
                    </div>
                    <div>
                        <Label htmlFor="tipo-negocio">Tipo de Negócio</Label>
                        <Select>
                            <SelectTrigger id="tipo-negocio">
                                <SelectValue placeholder="Venda ou Aluguel?" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="venda">Venda</SelectItem>
                                <SelectItem value="aluguel">Aluguel</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="border-t pt-6 space-y-4">
                     <h3 className="font-semibold text-lg">Detalhes do Imóvel</h3>
                    <div>
                        <Label htmlFor="endereco">Endereço Completo</Label>
                        <Input id="endereco" placeholder="Rua, Número, Bairro, Cidade, Estado" />
                    </div>
                     <div>
                        <Label htmlFor="detalhes">Descrição do Imóvel</Label>
                        <Textarea id="detalhes" placeholder="Fale um pouco sobre o imóvel: número de quartos, banheiros, diferenciais, etc." />
                    </div>
                </div>
                <Button type="submit" className="w-full">Enviar Dados</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
