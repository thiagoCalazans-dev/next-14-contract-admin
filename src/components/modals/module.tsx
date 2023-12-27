"use client";

import { ModuleForm } from "../forms/module";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "../ui/dialog";

export function ModuleModal() {
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
        <ModuleForm initialData={null} />
      </DialogContent>
    </Dialog>
  );
}
