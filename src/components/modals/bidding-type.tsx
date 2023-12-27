"use client";
import { BiddingTypeForm } from "../forms/bidding-type";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "../ui/dialog";

export function BiddingTypeModal() {
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
        <BiddingTypeForm initialData={null} />
      </DialogContent>
    </Dialog>
  );
}
