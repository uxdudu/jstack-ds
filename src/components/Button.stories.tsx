import React from 'react';
import { Button } from './Button';

// Exemplo de importação de SVG como React Component
import ArrowRight from '../icons/arrow-right.svg';
import ArrowLeft from '../icons/arrow-left-lg.svg';

export default function ButtonStories() {
  return (
    <div className="flex flex-col gap-6 p-8 bg-[rgb(var(--background))]">
      <div className="flex gap-4">
        <Button>Default</Button>
        <Button variant="primary">Primário</Button>
        <Button variant="secondary">Secundário</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="destructive">Destrutivo</Button>
        <Button variant="icon" leftIcon={<ArrowRight width={20} height={20} />} aria-label="Ícone" />
      </div>
      <div className="flex gap-4">
        <Button size="lg">Grande</Button>
        <Button size="md">Médio</Button>
        <Button size="sm">Pequeno</Button>
        <Button size="xs">Extra Pequeno</Button>
      </div>
      <div className="flex gap-4">
        <Button leftIcon={<ArrowLeft width={20} height={20} />}>Ícone à esquerda</Button>
        <Button rightIcon={<ArrowRight width={20} height={20} />}>Ícone à direita</Button>
        <Button loading>Carregando</Button>
        <Button disabled>Desabilitado</Button>
      </div>
    </div>
  );
} 