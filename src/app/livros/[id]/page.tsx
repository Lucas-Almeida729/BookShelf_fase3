// src/app/livros/[id]/page.tsx

import { getBook } from '@/lib/database'; // Importa a função para buscar um único livro
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import DeleteBookButton from '@/components/DeleteBookButton';

// Este componente recebe "params", que contém as partes dinâmicas da URL.
// Neste caso, params.id será o ID do livro.
export default async function BookDetailsPage({ params }: { params: { id: string } }) {
  const book = await getBook(params.id);

  // Se o livro com aquele ID não for encontrado no banco, mostramos uma página 404.
  if (!book) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end gap-2 mb-4">
          <Button asChild variant="outline">
              <Link href={`/livros/${book.id}/editar`}>Editar</Link>
          </Button>
          {/* O botão de deletar precisará de uma ação específica, que podemos adicionar depois */}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          {book.cover ? (
              <Image
                  src={book.cover}
                  alt={`Capa de ${book.title}`}
                  width={300}
                  height={450}
                  className="rounded-lg shadow-lg w-full"
              />
          ) : (
              <div className="w-full h-[450px] bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Capa indisponível</span>
              </div>
          )}
        </div>

        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold mb-2">{book.title}</h1>
          <h2 className="text-2xl text-gray-600 mb-4">{book.author}</h2>
          
          <div className="space-y-2 mb-4">
              <p><strong>Gênero:</strong> {book.genre || 'Não especificado'}</p>
              <p><strong>Ano:</strong> {book.year || 'Não especificado'}</p>
              <p><strong>Status:</strong> {book.status.replace('_', ' ')}</p>
          </div>

          <div className="prose max-w-none">
              <h3 className="font-bold">Sinopse</h3>
              <p>{book.synopsis || 'Nenhuma sinopse disponível.'}</p>

              <h3 className="font-bold">Anotações</h3>
              <p>{book.notes || 'Nenhuma anotação.'}</p>
          </div>
<<<<<<< HEAD
=======
          <h3 className="text-2xl font-semibold border-b pb-2 mb-4">Sinopse</h3>
          <p className="text-base text-gray-500 leading-relaxed">
            {book.synopsis || 'Nenhuma sinopse disponível.'}
          </p>
>>>>>>> 6853691521fd8b4f95391224ef47a15307ac0096
        </div>
      </div>
    </div>
  );
}