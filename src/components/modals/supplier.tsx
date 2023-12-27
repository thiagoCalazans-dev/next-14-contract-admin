"use client";

import { SupplierForm } from "../forms/supplier";
// import { SupplierForm } from "../forms/supplier";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "../ui/dialog";

export function SupplierModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Cadastrar</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cadastro</DialogTitle>
          <DialogDescription>Adcione um novo fornecedor</DialogDescription>
        </DialogHeader>
        <SupplierForm initialData={null} />
      </DialogContent>
    </Dialog>
  );
}
