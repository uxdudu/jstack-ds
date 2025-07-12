"use client";

import Image from "next/image";
import { Button } from "../components";
import { Tooltip } from "../components/Tooltip";
import { Toast } from "../components/Toast";
import { Textarea } from "../components/Textarea";
import { Tabs } from "../components/Tabs";
import { Table } from "../components/Table";
import { Spinner } from "../components/Spinner";
import { Switch } from "../components/Switch";
import { useState } from "react";

export default function Home() {
  const [tab, setTab] = useState(0);
  const [switchMd, setSwitchMd] = useState(false);
  const [switchSm, setSwitchSm] = useState(true);
  return (
    <div className="min-h-screen p-8 bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Bem-vindo ao JStack DS</h1>
        <div className="grid gap-6">
          <div className="p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Design System</h2>
            <p>
              Este é um projeto de design system usando Next.js e Tailwind CSS v4.
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="primary">Botão Primário</Button>
            <Button variant="secondary">Botão Secundário</Button>
          </div>
          {/* Tooltip */}
          <div className="flex gap-4 items-center">
            <Tooltip label="Tooltip abaixo" orientation="down" />
            <Tooltip label="Tooltip acima" orientation="up" />
            <Tooltip label="Tooltip direita" orientation="right" />
            <Tooltip label="Tooltip esquerda" orientation="left" />
          </div>
          {/* Toast */}
          <div className="flex gap-4">
            <Toast title="Toast padrão" description="Mensagem de exemplo." />
            <Toast title="Toast sucesso" description="Operação realizada!" type="success" />
            <Toast title="Toast erro" description="Algo deu errado." type="destructive" />
          </div>
          {/* Textarea */}
          <div className="flex gap-4">
            <Textarea label="Mensagem" helperText="Digite sua mensagem" placeholder="Escreva aqui..." />
            <Textarea label="Mensagem (focada)" state="focused" />
            <Textarea label="Mensagem (completa)" state="completed" />
            <Textarea label="Mensagem (desabilitada)" state="disabled" />
          </div>
          {/* Tabs */}
          <div className="flex flex-col gap-2">
            <Tabs
              items={[
                { label: "Tab 1" },
                { label: "Tab 2" },
                { label: "Tab 3" },
              ]}
              active={tab}
              onChange={setTab}
            />
          </div>
          {/* Table */}
          <div>
            <Table
              columns={[
                { label: "Invoice", maxWidth: "56px" },
                { label: "Status", maxWidth: "160px" },
                { label: "Method", maxWidth: "150px" },
                { label: "Amount", align: "right", maxWidth: "64px" },
              ]}
              data={[
                { Invoice: "INV001", Status: "Paid", Method: "Credit Card", Amount: "$250.00" },
                { Invoice: "INV002", Status: "Pending", Method: "Pix", Amount: "$100.00" },
                { Invoice: "INV003", Status: "Paid", Method: "Boleto", Amount: "$300.00" },
              ]}
              footer={<>
                <div className="flex-1 text-left">Total</div>
                <div className="flex-1 text-right">$650.00</div>
              </>}
              description="A list of your recent invoices."
            />
          </div>
          {/* Spinner */}
          <div className="flex gap-4 items-center">
            <Spinner step={1} />
            <Spinner step={2} />
            <Spinner step={3} />
            <Spinner step={4} />
          </div>
          {/* Switch */}
          <div className="flex gap-4 items-center">
            <Switch label="Ativo (md)" checked={switchMd} onChange={setSwitchMd} size="md" />
            <Switch label="Ativo (sm)" checked={switchSm} onChange={setSwitchSm} size="sm" />
            <Switch label="Desabilitado" checked={false} size="md" disabled />
          </div>
        </div>
      </main>
    </div>
  );
}
