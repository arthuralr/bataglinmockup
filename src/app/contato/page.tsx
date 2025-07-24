import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContatoPage() {
  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center text-white">
        <Image
          src="https://placehold.co/1920x600"
          alt="Contato"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
          data-ai-hint="contact handshake"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center">
          <h1 className="text-4xl md:text-6xl font-headline font-bold">Fale Conosco</h1>
          <p className="text-lg mt-2">Estamos prontos para atender você.</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-headline font-bold mb-2">Entre em Contato</h2>
              <p className="text-muted-foreground mb-8">
                Preencha o formulário ao lado ou utilize um de nossos canais de atendimento. Será um prazer falar com você.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-md">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Nosso Endereço</h3>
                    <p className="text-muted-foreground">Rua Exemplo, 123, Sala 45, Centro<br/>Cidade, Estado, CEP 12345-678</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-md">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Telefone</h3>
                    <a href="tel:+5511999999999" className="text-muted-foreground hover:text-primary">(11) 99999-9999</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-md">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:contato@bataglin.com.br" className="text-muted-foreground hover:text-primary">contato@bataglin.com.br</a>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Envie uma Mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name">Nome</label>
                      <Input id="name" placeholder="Seu nome completo" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email">Email</label>
                      <Input id="email" type="email" placeholder="seu@email.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject">Assunto</label>
                    <Input id="subject" placeholder="Sobre qual assunto gostaria de falar?" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message">Mensagem</label>
                    <Textarea id="message" placeholder="Escreva sua mensagem aqui..." rows={5} />
                  </div>
                  <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Enviar
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <div className="w-full h-[400px] bg-muted">
         <Image src="https://placehold.co/1920x400" alt="Mapa da localização" width={1920} height={400} className="w-full h-full object-cover" data-ai-hint="city map" />
      </div>
    </>
  );
}
