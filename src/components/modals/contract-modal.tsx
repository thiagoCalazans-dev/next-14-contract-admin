"use client";
import { BiddingType } from "@/src/domain/entities/bidding-type";
import { ContractForm } from "../forms/contract-form";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "../ui/dialog";
import { Supplier } from "@/src/domain/entities/supplier";

interface ContractModalProps {
  biddingTypes: BiddingType[];
  suppliers: Supplier[];
}

export function ContractModal({ biddingTypes, suppliers }: ContractModalProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="default">Cadastrar</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cadastro</DialogTitle>
          <DialogDescription>Crie uma nova categoria</DialogDescription>
        </DialogHeader>
        {/* <ContractForm biddingTypes={biddingTypes} suppliers={suppliers} /> */}
      </DialogContent>
    </Dialog>
  );
}
