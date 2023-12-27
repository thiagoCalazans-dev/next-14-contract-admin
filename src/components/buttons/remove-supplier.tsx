"use client";

import { removeSupplierAction } from "@/src/actions/remove-supplier";
import { TrashIcon } from "../../infra/icons";
import { Button } from "../ui/button";

interface RemoveButtonProps {
  id: string;
}

export function RemoveSupplierButton(data: RemoveButtonProps) {
  async function handleRemoveClick() {
    try {
      await removeSupplierAction({ id: data.id });
      console.log("Marca removida com sucesso");
    } catch (error: Error | any) {
      console.log(error.message);
    }
  }

  return (
    <Button variant="destructive" type="button" onClick={handleRemoveClick}>
      <TrashIcon />
    </Button>
  );
}
