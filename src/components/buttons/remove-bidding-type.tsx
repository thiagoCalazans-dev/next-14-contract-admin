"use client";

import { removeBiddingTypeAction } from "@/src/actions/remove-bidding-type";
import { TrashIcon } from "../../infra/icons";
import { Button } from "../ui/button";

interface RemoveButtonProps {
  id: string;
}

export function RemoveBiddingTypeButton(data: RemoveButtonProps) {
  async function handleRemoveClick() {
    try {
      await removeBiddingTypeAction({ id: data.id });
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
