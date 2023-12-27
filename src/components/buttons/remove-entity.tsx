"use client";

import { removeEntityAction } from "@/src/actions/remove-entity";
import { TrashIcon } from "../../infra/icons";
import { Button } from "../ui/button";

interface RemoveButtonProps {
  id: string;
}

export function RemoveEntityButton(data: RemoveButtonProps) {
  async function handleRemoveClick() {
    try {
      await removeEntityAction({ id: data.id });
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
