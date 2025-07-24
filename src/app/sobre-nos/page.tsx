import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Users } from 'lucide-react';

export default function SobreNosPage() {
  const teamMembers = [
    { name: 'João Bataglin', role: 'Fundador & CEO', image: 'https://placehold.co/400x400' },
    { name: 'Maria Silva', role: 'Diretora de Vendas', image: 'https://placehold.co/400x400' },
    { name: 'Carlos Pereira', role: 'Gerente de Marketing', image: 'https://placehold.co/400x400' },
    { name: 'Ana Costa', role: 'Consultora de Imóveis', image: 'https://placehold.co/400x400' },
  ];

  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center text-white">
        <Image
          src="https://placehold.co/1920x600"
          alt="Escritório moderno"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
          data-ai-hint="modern office"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center">
          <h1 className="text-4xl md:text-6xl font-headline font-bold">Sobre a Bataglin Imóveis</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-headline font-bold mb-4">Nossa História</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fundada em 2010 por João Bataglin, a Bataglin Imóveis nasceu do desejo de transformar o mercado imobiliário local. Com uma visão focada na transparência, confiança e na criação de relacionamentos duradouros, rapidamente nos tornamos uma referência na cidade.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ao longo de mais de uma década, ajudamos centenas de famílias a encontrar o lar dos seus sonhos e investidores a realizar negócios seguros e rentáveis. Nossa história é construída sobre a base sólida da satisfação de nossos clientes.
              </p>
            </div>
            <div>
                <Image src="https://placehold.co/600x400" alt="Equipe Bataglin reunida" width={600} height={400} className="rounded-lg shadow-xl" data-ai-hint="team meeting"/>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                    <div className="bg-primary text-primary-foreground p-4 rounded-full mb-4"><Target className="w-8 h-8"/></div>
                    <h3 className="text-2xl font-headline font-bold mb-2">Nossa Missão</h3>
                    <p className="text-muted-foreground">Oferecer assessoria imobiliária de excelência, com foco nas necessidades individuais de cada cliente, garantindo segurança e satisfação em cada transação.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-primary text-primary-foreground p-4 rounded-full mb-4"><Award className="w-8 h-8"/></div>
                    <h3 className="text-2xl font-headline font-bold mb-2">Nossa Visão</h3>
                    <p className="text-muted-foreground">Ser a imobiliária líder e mais admirada da região, reconhecida pela inovação, ética e por superar as expectativas de clientes e parceiros.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-primary text-primary-foreground p-4 rounded-full mb-4"><Users className="w-8 h-8"/></div>
                    <h3 className="text-2xl font-headline font-bold mb-2">Nossos Valores</h3>
                    <p className="text-muted-foreground">Ética, Transparência, Comprometimento, Excelência no Atendimento e Paixão pelo que fazemos.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">Conheça Nossa Equipe</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map(member => (
                    <Card key={member.name} className="text-center overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <Image src={member.image} alt={member.name} width={400} height={400} className="w-full h-auto" data-ai-hint="professional headshot"/>
                        <CardContent className="p-4">
                            <h3 className="font-headline font-semibold text-lg">{member.name}</h3>
                            <p className="text-sm text-primary">{member.role}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>
    </>
  );
}
