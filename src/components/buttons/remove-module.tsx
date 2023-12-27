"use client";

import { removeModuleAction } from "@/src/actions/remove-module";
import { TrashIcon } from "../../infra/icons";
import { Button } from "../ui/button";

interface RemoveButtonProps {
  id: string;
}

export function RemoveModuleButton(data: RemoveButtonProps) {
  async function handleRemoveClick() {
    try {
      await removeModuleAction({ id: data.id });
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
