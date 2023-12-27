"use client";

import { removeContractAction } from "@/src/actions/remove-contract";
import { TrashIcon } from "../../infra/icons";
import { Button } from "../ui/button";

interface RemoveButtonProps {
  id: string;
}

export function RemoveContractButton(data: RemoveButtonProps) {
  async function handleRemoveClick() {
    try {
      await removeContractAction({ id: data.id });
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
