// src/components/BookForm.tsx
<<<<<<< HEAD

"use client"; // ESSENCIAL: Transforma este componente em um interativo (de cliente)

import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Book } from "@prisma/client"; // Usando o tipo gerado pelo Prisma

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
=======
"use client";

import { useState } from "react";
import { Book, statuses, genres } from "@/types/book";
>>>>>>> 6853691521fd8b4f95391224ef47a15307ac0096
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
<<<<<<< HEAD
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
=======
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star } from "lucide-react";
import { createBook, updateBook } from "@/lib/actions";
import { SubmitButton } from "@/components/SubmitButton"; // 1. Importe o novo componente
>>>>>>> 6853691521fd8b4f95391224ef47a15307ac0096

// Definindo os tipos dos campos do nosso formulário
type FormValues = {
  title: string;
  author: string;
  genre: string;
  status: "QUERO_LER" | "LENDO" | "LIDO" | "PAUSADO" | "ABANDONADO";
  cover: string;
  synopsis: string;
  year: number;
  pages: number;
  rating: number;
  notes: string;
};

// As propriedades que o nosso formulário pode receber
interface BookFormProps {
  book?: Book | null; // O livro a ser editado (opcional)
  action: (data: FormData) => Promise<void>; // A "Server Action" que vai salvar os dados
}

<<<<<<< HEAD
export default function BookForm({ book, action }: BookFormProps) {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    // Valores padrão do formulário (se estiver editando, preenche com os dados do livro)
    defaultValues: {
      title: book?.title ?? "",
      author: book?.author ?? "",
      genre: book?.genre ?? "",
      status: book?.status as FormValues['status'] ?? "QUERO_LER",
      cover: book?.cover ?? "",
      synopsis: book?.synopsis ?? "",
      year: book?.year ?? undefined,
      pages: book?.pages ?? undefined,
      rating: book?.rating ?? 0,
      notes: book?.notes ?? "",
    },
  });
=======
export default function BookForm({ initialData }: BookFormProps) {
  const action = initialData ? updateBook.bind(null, initialData.id) : createBook;
  const [rating, setRating] = useState(initialData?.rating || 0);
>>>>>>> 6853691521fd8b4f95391224ef47a15307ac0096

  // O <form> agora tem um atributo "action". É aqui que a mágica acontece.
  // Quando o formulário é enviado, ele chama diretamente a função do servidor.
  return (
<<<<<<< HEAD
    <form action={action} className="space-y-4">
      {/* Campo oculto para guardar o ID do livro, caso seja uma edição */}
      {book && <input type="hidden" name="id" value={book.id} />}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Título do Livro */}
        <div>
          <Label htmlFor="title">Título</Label>
          <Input id="title" name="title" {...register("title", { required: "Título é obrigatório" })} />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>

        {/* Autor */}
        <div>
          <Label htmlFor="author">Autor</Label>
          <Input id="author" name="author" {...register("author", { required: "Autor é obrigatório" })} />
          {errors.author && <p className="text-red-500 text-sm">{errors.author.message}</p>}
=======
    <form action={action} className="space-y-6 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="title">Título *</Label>
          <Input id="title" name="title" defaultValue={initialData?.title} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="author">Autor *</Label>
          <Input id="author" name="author" defaultValue={initialData?.author} required />
>>>>>>> 6853691521fd8b4f95391224ef47a15307ac0096
        </div>
      </div>

      {/* URL da Capa */}
      <div>
        <Label htmlFor="cover">URL da Capa</Label>
        <Input id="cover" name="cover" {...register("cover")} />
      </div>
<<<<<<< HEAD

      {/* Status da Leitura */}
      <div>
        <Label htmlFor="status">Status da Leitura</Label>
        {/*
          Este é um componente especial que não funciona bem com o register padrão.
          Por isso, passamos o valor padrão e o name diretamente.
        */}
        <Select name="status" defaultValue={book?.status ?? "QUERO_LER"}>
          <SelectTrigger>
            <SelectValue placeholder="Selecione o status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="QUERO_LER">Quero Ler</SelectItem>
            <SelectItem value="LENDO">Lendo</SelectItem>
            <SelectItem value="LIDO">Lido</SelectItem>
            <SelectItem value="PAUSADO">Pausado</SelectItem>
            <SelectItem value="ABANDONADO">Abandonado</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Sinopse */}
      <div>
        <Label htmlFor="synopsis">Sinopse</Label>
        <Textarea id="synopsis" name="synopsis" {...register("synopsis")} />
      </div>

      {/* Anotações */}
      <div>
        <Label htmlFor="notes">Anotações Pessoais</Label>
        <Textarea id="notes" name="notes" {...register("notes")} />
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={() => router.back()}>
          Cancelar
        </Button>
        <Button type="submit">Salvar Livro</Button>
      </div>
=======
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="year">Ano de Publicação</Label>
          <Input id="year" name="year" type="number" defaultValue={initialData?.year} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="pages">Nº de Páginas</Label>
          <Input id="pages" name="pages" type="number" defaultValue={initialData?.pages} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="genre">Gênero</Label>
          <Select name="genre" defaultValue={initialData?.genre}>
            <SelectTrigger><SelectValue placeholder="Selecione um gênero" /></SelectTrigger>
            <SelectContent>{genres.map(g => <SelectItem key={g} value={g}>{g}</SelectItem>)}</SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Select name="status" defaultValue={initialData?.status || 'QUERO_LER'}>
            <SelectTrigger><SelectValue placeholder="Selecione o status" /></SelectTrigger>
            <SelectContent>{statuses.map(s => <SelectItem key={s} value={s}>{s.replace(/_/g, ' ')}</SelectItem>)}</SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="synopsis">Sinopse</Label>
        <Textarea id="synopsis" name="synopsis" defaultValue={initialData?.synopsis} rows={5} />
      </div>
      
      <input type="hidden" name="rating" value={rating} />
      
      <div className="space-y-2">
        <Label>Avaliação</Label>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((starValue) => (
            <button type="button" key={starValue} onClick={() => setRating(starValue)}>
              <Star size={24} className={starValue <= rating ? "text-yellow-500 fill-current" : "text-gray-300"} />
            </button>
          ))}
          {rating > 0 && (
            <button type="button" onClick={() => setRating(0)} className="ml-2 text-sm text-muted-foreground hover:text-foreground">Limpar</button>
          )}
        </div>
      </div>

      {/* 2. Substitua o Button pelo SubmitButton */}
      <SubmitButton className="w-full">
        {initialData ? 'Atualizar Livro' : 'Adicionar Livro'}
      </SubmitButton>
>>>>>>> 6853691521fd8b4f95391224ef47a15307ac0096
    </form>
  );
}