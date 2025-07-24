
import { Heart } from 'lucide-react';

export default function FavoritosPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Meus Favoritos</h1>
        <p className="text-muted-foreground mt-2">Os imóveis que você mais gostou, salvos em um só lugar.</p>
      </div>
      
        <div className="col-span-full text-center py-16 border rounded-lg">
            <Heart className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
            <p className="text-lg text-muted-foreground">Você ainda não selecionou nenhum imóvel como favorito.</p>
            <p className="text-sm text-muted-foreground">Clique no coração nos cards dos imóveis para adicioná-los aqui.</p>
        </div>
    </div>
  );
}
