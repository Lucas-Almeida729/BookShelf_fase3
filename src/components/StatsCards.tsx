// src/components/StatsCards.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, BookCheck, Glasses, Book } from "lucide-react";

interface StatsCardsProps {
  stats: {
    totalBooks: number;
    booksRead: number;
    booksReading: number;
    pagesRead: number;
  };
}

export default function StatsCards({ stats }: StatsCardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total de Livros</CardTitle>
          <Book className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalBooks}</div>
          <p className="text-xs text-muted-foreground">livros na sua estante</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Livros Lidos</CardTitle>
          <BookCheck className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.booksRead}</div>
          <p className="text-xs text-muted-foreground">livros concluídos</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Lendo Atualmente</CardTitle>
          <Glasses className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.booksReading}</div>
          <p className="text-xs text-muted-foreground">livros em andamento</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Páginas Lidas</CardTitle>
          <BookOpen className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.pagesRead.toLocaleString('pt-BR')}</div>
          <p className="text-xs text-muted-foreground">total de páginas lidas</p>
        </CardContent>
      </Card>
    </div>
  );
}