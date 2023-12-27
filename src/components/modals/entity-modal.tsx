"use client";

import { EntityForm } from "../forms/entity-form";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "../ui/dialog";

export function EntityModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Cadastrar</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cadastro</DialogTitle>
          <DialogDescription>Crie uma nova categoria</DialogDescription>
        </DialogHeader>
        <EntityForm initialData={null} />
      </DialogContent>
    </Dialog>
  );
}
