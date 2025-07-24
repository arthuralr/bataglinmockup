import { AIDescriptionGeneratorForm } from '@/components/ai-description-generator-form';

export default function AIDescriptionGeneratorPage() {
  return (
    <div className="bg-secondary min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-headline font-bold">Gerador de Descrição de Imóvel com IA</h1>
            <p className="text-muted-foreground mt-2">
              Preencha os detalhes do imóvel para criar uma descrição de venda atraente e profissional.
            </p>
          </div>
          <AIDescriptionGeneratorForm />
        </div>
      </div>
    </div>
  );
}
